//Dependences
import morgan from'morgan';
import express from'express';
const app = express();
//Routes 
import  employee from './routes/employee.js';
import  user from './routes/user.js';

//Middleware
import  {auth} from "./middleware/auth.js" ;
import  {index} from './middleware/index.js' ;
import  {notFound} from './middleware/notFound.js' ;
import  {cors} from './middleware/cors.js' ;

import {PORT} from './src/config.js' ;

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended :  true}))

app.get('/', index);
app.use('/employee', employee);
app.use('/user', user);
app.use(auth);
app.use(notFound);

app.listen(PORT);
console.log('listening on port')