const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require('./routers/user');
const countryRouter = require('./routers/country');

app.use('/users', userRouter);
app.use('/countries', countryRouter);

module.exports = app