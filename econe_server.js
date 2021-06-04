const express = require('express');
const app = express();
const path = require('path');
var compression = require('compression');
const router = express.Router();

app.use(compression());
app.use(express.static('dist'));
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.use('/', router);
app.listen(process.env.port || 4020);

console.log('Running at Port 4020');