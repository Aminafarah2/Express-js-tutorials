const express = require('express');
const cookieParser = require('cookie-parser') 
const session= require('express-session');
const groceriesRoute=require('./Routes/groceries');
const marketRoute=require('./Routes/market');

// import the entire express library 
const app = express(); // create an instance of our application (server)
const PORT =3001;

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use (session{
    secret:""
}}               )
app.use((req, res, next) => {
    console.log(`${req.method}:${req.url}`);
    next()
    ;})
// Route for handling groceries
app.use('/api/v1/groceries', groceriesRoute);
app.use('/api/v1/market', marketRoute);
app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`));
