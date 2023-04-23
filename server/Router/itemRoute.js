const express = require('express')
const { additems, deleteItem, updateItems, getitems } = require('../constoller/itemController')
const router = express.Router()

//add item route
router.post('/add',additems)
//delete
router.delete('/delete/:id',deleteItem)
//update
router.put('/update/:id',updateItems)
//get items
router.get('/show-item',getitems)

module.exports = router;
