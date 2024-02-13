const {Router} =require('express');
const router =Router();
const grocerylist = [
    { item: "milk", quantity: 2 },
    { item: "cereal", quantity: 1 },
    { item: "pop-tarts", quantity: 5 }
];
router.get('',(req, res) => {
    res.send(grocerylist);
});
router.get('/:item',(req, res) => {
    const { item } = req.params;
    const groceryitem = grocerylist.find((i) => i.item === item);
    res.send(groceryitem);
})
// POST route to add new items to the grocery list
router.post('', (req, res) =>{
    console.log(req.body);
    grocerylist.push(req.body)
    res.send(201);
});
// 
module.exports =router;