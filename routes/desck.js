var express = require('express');
var router = express.Router();

const { Client } = require('pg');
const connectionString  = 'postgresql://miruta:miruta@165.227.123.63:5432/miruta';

const client = new Client({
    connectionString: connectionString,
});

/* GET home page. */
router.get('/empresas', function(req, res, next) {
    client.connect();
    
      client.query('SELECT * FROM empresas', (err, result) => {
        //console.log(err, response)
        res.render('bussines', { title: 'Express' , empresas: result.rows });
        client.end()
      })
});

router.get('/empresas/delete/:id', function(req, res, next, id) {
    client.connect();
      client.query('SELECT * FROM empresas', (err, result) => {
        //console.log(err, response)
        res.render('bussines', { title: 'Express' , empresas: result.rows });
        client.end()
      })
});

module.exports = router;
