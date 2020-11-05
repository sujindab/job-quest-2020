var express = require('express');
var router = express.Router();
var { ProductModel,UserModel } = require('../model/db')

/* GET home page. */
router.get('/', async (req, res, next) => {
  const products = await ProductModel.find({})//.distinct('joke')
    console.log(products)
    console.log("get")
    res.json(products)
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params

    try {
        const product = await ProductModel.findById(id)
        console.log(product.createdAt)
        res.json(product)
    } catch (error) {
        res.status(400).json(error)
    }
});

router.post('/', async (req, res, next) => {
  console.log(req.body)
  const product = new ProductModel(req)
  product.joke=req.body.joke
  const base64Credentials =  req.headers.authorization.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const username = credentials.split(':');

  const user = await UserModel.findOne({username: username}, 
    async(err,obj) =>{
      if (!obj){
        res.json("Please log in to continuous")
      }else if (obj.username && obj.password===req.headers.authorization) {
        await product.save()
        res.json(obj.username+" : add joke").status(201).end()
      }
    }
  )
});

router.post('/:id/like', async(req, res, next) =>{
  const product = await ProductModel.findById(req.params.id)
  const base64Credentials =  req.headers.authorization.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  const user = await UserModel.findOne({username: username}, 
    function(err,obj) {
      if (!obj){
        res.json("Please log in to continuous")
      }else if (obj.username && obj.password===req.headers.authorization) {
        res.json(obj.username+" Like : "+product.joke)
      }
    }
  )
});

router.post('/:id/dislike', async(req, res, next)=> {
  const product = await ProductModel.findById(req.params.id)
  const base64Credentials =  req.headers.authorization.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const username = credentials.split(':');

  const user = await UserModel.findOne({username: username}, 
    function(err,obj) {
      if (!obj){
        res.json("Please log in to continuous")
      }else if (obj.username && obj.password===req.headers.authorization) {
        res.json(obj.username+" Dislike : "+product.joke)
      }
    }
  )
});

router.delete('/:id', async (req, res, next) => { 

  const product = await ProductModel.findById(req.params.id)
  const base64Credentials =  req.headers.authorization.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const username = credentials.split(':');

  const user = await UserModel.findOne({username: username}, 
    async(err,obj)=> {
      if (!obj){
        res.json("Please log in to continuous")
      }else if (obj.username && obj.password===req.headers.authorization) {
        await ProductModel.findByIdAndDelete(req.params.id)
        res.status(204).end()
      }
    }
  )
});

module.exports = router;
