const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors())

app.use(morgan('dev'));
app.use('/', express.static('../public'));
app.use(/\/\d+\//, express.static('./public/'));

//app.get('/', (req,res) => res.send('WORK'))

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
