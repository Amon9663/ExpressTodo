var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');
const cors = require('cors')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb')  

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);

console.log('todo list started on ' + port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});