//Dependences
const morgan = require('morgan');
const express = require('express');
const app = express();
//Routers 

//Middleware

console.log("Hola mundo")

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...')
});