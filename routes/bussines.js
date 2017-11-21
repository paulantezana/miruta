var express = require('express');
var router = express.Router();


const { Client } = require('pg');
const connectionString  = 'postgresql://transporte:transporte@localhost:5432/transporte';


/* GET bussines page. */
router.get('/all', function(req, res, next) {
  const client = new Client({
    connectionString: connectionString,
  });

  client.connect();

  client.query('SELECT * FROM empresas', (err, result) => {
    //console.log(err, response)
    if(err != null){
      res.json(err);
      return;
    }
    res.json(result.rows)
    client.end()
  })
});

module.exports = router;
