var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');
   



var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(require('./src/routes'));


app.use(function(req, res, next) {
    res.sendStatus(404);
});



var server = app.listen( process.env.PORT || 3000, function(){
    console.log('Listening on port ' + server.address().port);
});