const express = require('express')
const app = express();

var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb'

})

connection.connect()


  // creating a new table 
  app.get('/create', (req, res) => {
var sql = "CREATE TABLE uuiuiu (name VARCHAR(255), address VARCHAR(255), email VARCHAR(255))";
 connection.query(sql, function (err, result) {
    if (err) throw err;
   console.log("Table created");
   
   
  })
});


//   //inserting new data
app.post('/insert', (req, res) => {
  var sql = "INSERT INTO bbbb (name, address, email) VALUES ('Co', 'Higy7','shil6@gmail.com')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    
  })
  });



//   //fetching data from data base
app.get('/fetch', (req, res) => {
    connection.query('select * from bbbb', function (err, rows, fields)
    {
        if (err) throw err
        console.log('The data is', rows)
       res.send(rows);
    })
});

//  // updating data base
app.put('/update', (req, res) => {
var sql = "UPDATE bbbb SET email = 'sentlgowtham6@gmail.com' WHERE email = 'shil6@gmail.com'";
 connection.query(sql, function (err, result) {
  })
 });

//   //deleting a data base
app.delete('/del', (req, res) => {
  var sql = "DELETE from bbbb WHERE email = 'shil6@gmail.com'";
  connection.query(sql, function (err, result) {
   if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  })
  });


app.listen(6000, () => {
  console.log('Example app listening on port 6000!')
});