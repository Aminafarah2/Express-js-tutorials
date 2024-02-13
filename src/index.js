const express = require('express');
const groceriesRoute=require('./Routes/groceries');
// import the entire express library 
const app = express(); // create an instance of our application (server)
const PORT =3001;

app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
    console.log(`${req.method}:${req.url}`);
    next()
    ;})
// Route for handling groceries
app.use('/api/v1/groceries', groceriesRoute);

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`));
