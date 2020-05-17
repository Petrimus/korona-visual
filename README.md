# korona-visual-server
Server is providing information about korona virus in Finland. Its main purpose is to serve react app korona-visual. Server is build with NodeJs and it is express server. It collects data from Helsingin Sanomat Korona API. It has a simple cache to store data as was requested HS Korona API.

## API
Server is running in Google Cloud App Engine at https://demoproject-218708.ey.r.appspot.com/. Paths that server responds are /infections, /hospitalised and /deaths. It returns data in JSON format.

## Front end
