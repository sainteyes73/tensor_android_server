var express  = require('express');
var connect = require('connect');
var app      = express();
var router = express.Router();
var port     = process.env.PORT || 8080;
const bodyParser = require('body-parser');
// Configuration
app.use(express.static(__dirname + '/public'));
app.use(connect.cookieParser());
app.use(connect.logger('dev'));
app.use(connect.bodyParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(connect.json());
app.use(connect.urlencoded());

// Routes

require('./routes/routes.js')(app);


app.listen(port);
console.log('The App runs on port ' + port);
