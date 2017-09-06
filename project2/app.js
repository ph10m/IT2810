const express = require('express');
const app = express();

// include styles (.css files)
app.use(express.static(__dirname + '/Styles'));
// include scripts (.js files)
app.use(express.static(__dirname + '/Script'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

// app.get('/somepage', function (req, res) {
//   res.sendFile('somepage.html');
// });
//
// app.get('/anotherpage', function (req, res) {
//   res.sendFile('anotherpage.html');
// });

app.listen(3000, function () {
  console.log('listening on port 3000!')
})

