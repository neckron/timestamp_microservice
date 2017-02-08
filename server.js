var express = require('express');
var moment = require('moment');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index.ejs');
})

app.get('/:param', function(req, res) {
      if(isNumeric(req.params.param)){
        var dateNatural = moment.unix(req.params.param).format("MMMM DD ,  YYYY");
        if(moment(dateNatural).isValid()){
          res.send({'unix':req.params.param,'natural':dateNatural});
        }else{
          res.send({'unix':null,'natural':null});
        }
      }else{
        if(moment(req.params.param).isValid()){
          var dateUnix = moment(req.params.param).unix();
          res.send({'unix':dateUnix,'natural':req.params.param});
        }else{
          res.send({'unix':null,'natural':null});
        }
      }
});

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var port = 8000;
app.listen(port, function () {
  console.log('Example app listening on port %s!',port);
})
