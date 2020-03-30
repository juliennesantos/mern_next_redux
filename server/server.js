const express = require('express')
const next = require('next')
const cookieParser = require('cookie-parser');
require('dotenv').config()
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const server = express();
const ApiRouter = require('./api');

server.use(express.json());
server.use(cookieParser());

app.prepare().then(() => {
  server.use('/api', ApiRouter)
  server.all('*', (req, res) => handle(req, res))

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
