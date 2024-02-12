const express = require('express');
// import the entire express library 
const app = express(); // create an instance of our application (server)
const PORT =3001;
app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`));


app.get('/groceries', (req, res) =>{
res.send([{
    item : "milk",
    quantity: 2,

},
{
    item : "cereal",
    quantity: 1,
},
{
    item : "pop-tarts",
    quantity: 5,

},

])
})