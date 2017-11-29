import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3001;
const app  =  express();

app.use(compression());

app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  //hard coding for simplicity. Pretend this hits real database
  res.json([
    {"id":1,"FirstName":"Sammie","LastName":"Clark","email":"test@test.com"},
    {"id":2,"FirstName":"Samantha","LastName":"Smith","email":"test2@test.com"},
    {"id":3,"FirstName":"Sam","LastName":"Taylor","email":"test3@test.com"}
  ]);
});

app.listen(port, function(err) {
  if (err){
    console.log(err);
  } else {
    open('http:localhost:'+ port);
  }
});
