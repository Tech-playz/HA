const express = require('express')
const app = express()
const path = require('path');

const port = 3000

app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function (req, res) {
  res.sendFile(__dirname + '/Home.html');
  
});

app.get('/Home.css', function (req, res) {
    res.sendFile(__dirname + '/Home.css');
    
  });

app.get('/assets/css/hexagons.min.css', function (req, res) {
    res.sendFile(__dirname + '/assets/css/hexagons.min.css');
    
  });

app.get('/TT', function (req, res) {
    res.sendFile(__dirname + '/TT.html');
  });
  app.get('/TT.css', function (req, res) {
    res.sendFile(__dirname + '/TT.css');
    
  });

  app.get('/Map', function (req, res) {
    res.sendFile(__dirname + '/pages/Map.html');
  });
  app.get('/pages/Map.css', function (req, res) {
    res.sendFile(__dirname + '/pages/Map.css');
    
  });
  app.get('/pages/index.js', function (req, res) {
    res.sendFile(__dirname + '/pages/index.js');
    
  });





app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
});
