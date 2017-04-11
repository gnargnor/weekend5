var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 5000;

app.set('port', port);

app.use(express.static('server/public'));

app.get('/', function(req,res){
  res.sendFile(path.resolve('server/public/views/index.html'));
});

app.listen(app.get('port'), function(){
  console.log('listening on port: ', port);
});
