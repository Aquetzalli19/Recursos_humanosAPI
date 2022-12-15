//Dependences
const morgan = require('morgan');
const express = require('express');
const app = express();
//Routes 
const employee = require('./routes/employee');
const user = require('./routes/user');
//Middleware
const auth = require("./middleware/auth");
const index = require('./middleware/index');
const notFound = require('./middleware/notFound');
const cors = require('./middleware/cors');

import {PORT} from './config.js';

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended :  true}))

app.get('/', index);
app.use('/employee', employee);
app.use('/user', user);
app.use(auth);
app.use(notFound);

app.listen(PORT, () => {
    console.log('Server is running...')
});