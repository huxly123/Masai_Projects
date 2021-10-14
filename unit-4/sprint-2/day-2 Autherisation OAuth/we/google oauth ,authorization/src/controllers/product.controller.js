const express = require('express');

const router = express.Router();

const Product = require("../models/product.model")

const authenticate = require('../middlewares/authenticate')
const authorize = require('../middlewares/authorize');

router.get("/",authenticate,authorize(["user","admin"]),async function(req, res) {

  const product=await Product.find().lean().exec();

  const user=req.user

  return res.status(200).send({product,user})
})



module.exports = router;