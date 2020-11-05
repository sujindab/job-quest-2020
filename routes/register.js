var express = require('express');
var router = express.Router();
var {UserModel} = require('../model/db')

router.post('/', async (req, res, next) => {
  
  let name=req.body.username;
  let pass=req.body.password;
  if (name.length===0 || pass.length===0) {
    res.json("Please complete all information")
  }else{
    var bAuth = 'Basic ' + Buffer.from(req.body.user + ':' + req.body.passw).toString('base64');
    const product = new UserModel(req)
    product.username=req.body.user
    product.password=bAuth
    await product.save()
    res.status(201).end()
  }
});

module.exports = router;
