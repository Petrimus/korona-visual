const express = require('express')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')
const axios = require('axios')
const mcache = require('memory-cache')

const baseUrl = 'https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/'

//
app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

const cache = (duration) => {
  return (req, res, next) => {
    let key = '_express_' + req.originalUrl || req.originalUrl
    console.log('key', key)

    let cachedBody = mcache.get(key)

    if (cachedBody) {
      res.send(cachedBody)
      return
    } else {
      res.sendResponse = res.send
      res.send = (body) => {
        mcache.put(key, body, duration * 1000)
        res.sendResponse(body)
      }
      next()
    }
  }
}

app.get('/', (req, res) => {
  res.send('<h1>Hello You</h1>')
})

app.get('/api/infections', cache(100000), async (req, res) => {
  const response = await axios.get(`${baseUrl}processedThlData`)
  console.log('axios called')
  res.send(response.data)
})

app.get('/api/hospitalised', cache(100000), async (req, res) => {
  const response = await axios.get(`${baseUrl}finnishCoronaHospitalData`)
  const dataToSort = response.data['hospitalised']
  console.log('axios called')
 
  const result = dataToSort.filter(day => day.area === 'Finland')
  result.forEach(day => day.date = Date.parse(day.date))

  res.send(result)
})

app.get('/api/deaths',  cache(10000), async (req, res) => {
const response = await axios.get(`${baseUrl}finnishCoronaData/v2`)
const deaths = response.data['deaths']

const result = deaths.reduce((ary, item) => {
  const finded = ary.find(row => row.date === item.date)
  if (finded) {
    finded.value ++
  } else {
    const obj = {
      date: item.date,
      value: 1
    }
    ary.push(obj)
  }
  return ary
}, [])
result.sort((day1, day2) => {
  return Date.parse(day1.date) - Date.parse(day2.date)
})

res.send(result)
})

app.use(middleware.unknownEndpoint)

module.exports = app



