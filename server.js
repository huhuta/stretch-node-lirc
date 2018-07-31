// TODO helmet compressed isntall
const express = require('express');
const bodyParser = require('body-parser');
const v1 = require('./api/v1');
const { developmentErrors, catchErrors } = require('./util/errorHandler');

const app = express();
const serverPort = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.get('/', (req, res) => {
  res.send('home');
});

app.use('/api/v1', v1);

app.use(developmentErrors);

const server = app.listen(serverPort, () => {
  console.log(`Server start! listening on ${serverPort}`);
});
