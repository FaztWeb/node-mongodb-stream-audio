const express = require('express')
const cors = require('cors');
const morgan = require('morgan');

const trackRoutes = require('./routes/tracks');

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(cors());

// routes
app.use('/tracks', trackRoutes);

app.listen(3000);
console.log('Server on port', 3000);