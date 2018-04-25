var express = require('express'),
    bodyParser = require('body-parser'),
    // bissecao = require('./bissecao.js'),
    eliminacaolu = require('./eliminacaolu.js');
var cors = require('cors');

var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.status(200).send('API de Numericos.')
});

// app.post('/bissecao/', function (req, res) {
//     if (!req.body || req.body.length === 0) {
//         console.log('request body not found');
//         return res.sendStatus(400);
//     }
//     console.log(JSON.stringify(req.body));
//     // res.header(200, {'Access-Control-Allow-Origin': '*'});
//     res.json({
//         response: bissecao.bissecao(
//             req.body.stringExpression,
//             parseFloat(req.body.limInf),
//             parseFloat(req.body.limSup),
//             parseInt(req.body.maxInterations),
//             parseFloat(req.body.tolerancia),
//             {graphs: []})
//     })
// });

/**
 * Entrada:
 *
 * Matriz Aumentada:
 *
 * 2 1 5 1
 * 1 8 -3 2
 * 3 5 7 3
 *
 * Resultado:
 *
 * Matriz L
 *
 * 2 2 4
 * 0 1 4
 * 0 0 1
 */
app.post('/eliminacaolu/', function (req, res) {
    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }
    // console.log(JSON.stringify(req.body));
    res.json({
        response: eliminacaolu.eliminacaolu(req.body.stringMatrix)
    })
});

app.use(function (err, req, res, next) {
    console.error(err);
});

app.listen(process.env.PORT || 8080, function () {
    console.log("NodeJS API running on port "+8080);
});


module.exports = app;