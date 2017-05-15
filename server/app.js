var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname , '../client'))); // set static files location, in this case the route, add a file name if not
app.listen(process.env.PORT || 3000);