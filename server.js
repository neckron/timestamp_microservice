var express = require('express');
var moment = require('moment'); 
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  //id = req.body.id;
  res.render('index.ejs');
})

app.get('/:param', function(req, res) {
    var valid = moment(req.params.param).isValid();
    if(valid){
        res.send({'unix':req.params.param,'natural':moment(req.params.param).toDate()})
    }else{
        res.send({'unix':'null','natural':'null'})
    }
  
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})