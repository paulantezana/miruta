let express = require('express');
let router = express.Router();


const { Client } = require('pg');
const connectionString  = 'postgresql://miruta:miruta@127.0.0.1/miruta';


/* GET bussines page. */
// router.get('/all', function(req, res, next) {
//   const client = new Client({
//     connectionString: connectionString,
//   });
//
//   client.connect();
//
//   client.query('SELECT * FROM empresas', (err, result) => {
//     //console.log(err, response)
//     if(err != null){
//       res.json(err);
//       return;
//     }
//     res.json(result.rows)
//     client.end()
//   })
// });


module.exports = router;
module.exports = function (app) {
    let empresasAll = (req, res)=>{
        const client = new Client({
            connectionString: connectionString,
        });
        client.connect();
        client.query('SELECT * FROM empresas', (err, result) => {
            if(!err){ res.json( result.rows );} else {res.json(err);}
            client.end();
        })
    };
    let empresasDetail = (req, res)=>{
      const client = new Client({
          connectionString: connectionString,
      });
      res.setHeader('Content-Type', 'application/json');
      let currentID = req.body.id || null;
      client.connect();
      client.query('SELECT * FROM empresas WHERE id_empresa = ' + currentID, (err, result) => {
          if(!err){ res.json( result.rows );} else {res.json(err);}
          client.end();
      });
    };
    app.post('/empresas/detalle',empresasDetail);
    app.get('/empresas/all',empresasAll);
};
