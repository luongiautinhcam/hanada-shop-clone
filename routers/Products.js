const express = require('express')
const router = express.Router()
const { Products } = require('../models');

router.get("/", async (req, res) => {
    const products = await Products.findAll();
    res.json(products);
})
router.get("/productDetail/:id",async (req,res)=>{
    const id = req.params.id;
    const product = await Products.findAll({where:{id : id}})
    res.json(product);
})
module.exports = router;