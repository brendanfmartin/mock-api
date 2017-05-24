// set up =====================================================================
const express         = require('express');
const app             = express();
const cors            = require('cors');
const port            = process.env.PORT || 8082;
const morgan          = require('morgan');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');


// configuration ==============================================================
const apiURL = process.argv[2] || '/api/';

app.use(morgan('dev'));                                           // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));              // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                       // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));   // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override'));                // override with the X-HTTP-Method-Override header in the request
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(cors());

// Controllers ================================================================
const sampleController = require('./controllers/sample');

// Routes =====================================================================
app.get(apiURL + '', sampleController.getSample);
app.get(apiURL + 'sample', sampleController.getSample);

// listen =====================================================================
app.listen(port);
console.log('************************************************************');
console.log('* Mock Api listening on port ' + port);
console.log('* Mock Api emulating ' + apiURL);
console.log('************************************************************');
