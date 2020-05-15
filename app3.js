
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// parse application/json
app.use(bodyParser.json());
 
//create database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bodypraser'
});
 
//connect to database
connection.connect()

 
//show
app.get('/dispaly',(req, res) => {
    let sql = "SELECT * FROM crud";
    let query = connection.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });

  //insert
app.post('/adding',(req, res) => {
  let data = {workername: req.body.workername, workinghours: req.body.workinghours};
  let sql = "INSERT INTO crud SET ?";
  let query = connection.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//update 
app.put('/update/:id',(req, res) => {
  let sql = "UPDATE crud SET workername='"+req.body.workername+"', workinghours='"+req.body.workinghours+"' WHERE id="+req.params.id;
  let query = connection.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Delete 
app.delete('/del/:id',(req, res) => {
  let sql = "DELETE FROM crud WHERE id="+req.params.id+"";
  let query = connection.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Server listening
app.listen(4000,() =>{
  console.log('Server started on port 4000...');
});