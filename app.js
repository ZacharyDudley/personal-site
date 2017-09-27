const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const router = require('./routes/');
const app = express();

app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.use('/', router);

app.listen(3000, function(){
  console.log('Listening');
});
