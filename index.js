//Dependences
const morgan = require('morgan');
const express = require('express');
const app = express();
//Routes 
const employee = require('./routes/employee');
//Middleware
const index = require('./middleware/index');
const notFound = require('./middleware/notFound');
const cors = require('./middleware/cors');

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended :  true}))

app.get('/', index)
app.use('/employee', employee);
app.use(notFound)

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...')
});