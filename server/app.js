const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var corsOptions = {
	origin: 'http://localhost:3000',
}
app.use(cors(corsOptions))

app.get('/', function(req, res){
	res.send('Sever alive');
});

app.use('/api', require('./api/router'));
app.use('/file', express.static('tmpData'));

module.exports = app;

