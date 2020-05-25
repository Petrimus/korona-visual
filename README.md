# korona-visual
Application is providing information about korona virus in Finland. Live version is running on Google App Engine https://demoproject-218708.ey.r.appspot.com/.

## Purpose
Application has two reason to exist. I wrote it to demonstrate my programming skills as I am looking for new challanges as a developer. But it also provides up-to-date information about Korona virus for anyone who finds it usefull.

## Technique
Application is small express server that serves static front end written with React. Express layer is added in order to be able to cache data requests to Helsingin Sanomat Korona API as was requested in HS Korona API. 

### Front end
Front end code is availlable at https://github.com/Petrimus/korona-visual-front. It is React App.

## Development
Clone the repo and install node_modules using npm install. Clone the front end repo and likewise install node_modules using npm install. Start the server with npm run watch  command and open the browser in http://localhost:3001. Run the front end with command npm start and it should open in http://localhost:3000.

## API
In addition to serve static build files, server also responds to data requests to the paths /api/infections, /api/hospitalised and /api/deaths. It is basicly sama data that HS Korona API provides. It is returned in JSON format.


## Technologies
React
NodeJs
Express
Styled-components
Recharts
mcache
etc

## Licence MIT
Copyright 2020 Helsingin Sanomat

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


