const express = require('express');
// import the entire express library 
const app = express(); // create an instance of our application (server)
const PORT =3001;

app.use(express.json());
app.use(express.urlencoded());
app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`));
const grocerylist = [
    { item: "milk", quantity: 2 },
    { item: "cereal", quantity: 1 },
    { item: "pop-tarts", quantity: 5 }
];

// GET route to fetch grocery list
app.get('/groceries', (req, res) => {
    res.send(grocerylist);
});
// POST route to add new items to the grocery list
app.post('/groceries', (req, res) =>{
    console.log(req.body);
    grocerylist.push(req.body)
    res.send(201);
})
