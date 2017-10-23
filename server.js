var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var app = express()
//We need to set this variable to take a whatever port is declared by heroku and local host
var PORT = process.env.PORT || 8080;
// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyparser.json())

require('./app/routing/apiRoutes.js')(app);

require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT,function()
{
  console.log('Application running on',PORT);
});
