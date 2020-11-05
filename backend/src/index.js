const express = require('express');
const cors= require('cors');
const app = express();


require('./database');
app.set('port', process.env.PORT || 4000)

app.use(express.json());
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.get('/', function(req, res, next) {
    // Handle the get for this route
  });
  
  app.post('/', function(req, res, next) {
   // Handle the post for this route
  });
app.use('/api',require('./routes/index'));

app.listen(3000);
console.log('server on port',3000);
