var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World, ini menggunakan nodejs pm2-2");
});

app.listen(4000);
