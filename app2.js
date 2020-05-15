const express = require('express')
const app = express();
var bodyParser = require('body-parser')
var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb'
})

connection.connect()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


  
app.post('/addition', (req, res) => {
    console.log("values",req.body)
    var a = req.body.value1 + req.body.value2    
    console.log("result",a)
    res.json(a)
});

app.post('/sub', (req, res) => {
    console.log("values",req.body)
    var a = req.body.value2 - req.body.value1    
    console.log("result",b)
    res.json(a)
});

app.post('/mul', (req, res) => {
    console.log("values",req.body)
    var a = req.body.value1 * req.body.value2    
    console.log("result",a)
    res.json(a)
});

app.post('/div', (req, res) => {
    console.log("values",req.body)
    var a = req.body.value1 / req.body.value2    
    console.log("result",a)
    res.json(a)
});


app.get('/add/:value1/:value2', function(req, res) {
var c = parseInt(req.params.value1) + parseInt(req.params.value2)
console.log("result",c)
res.json(c)
});

app.get('/sub/:value1/:value2', function(req, res) {
  var c = parseInt(req.params.value1) - parseInt(req.params.value2)
  console.log("result",c)
  res.json(c)
  });
  
  app.get('/mul/:value1/:value2', function(req, res) {
    var c = parseInt(req.params.value1) * parseInt(req.params.value2)
    console.log("result",c)
    res.json(c)
    });

    app.get('/div/:value1/:value2', function(req, res) {
      var c = parseInt(req.params.value1) / parseInt(req.params.value2)
      console.log("result",c)
      res.json(c)
      });

app.listen(7000, () => {
  console.log('Example app listening on port 7000!')
});