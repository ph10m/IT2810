const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Dis is project 2')
})

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
