const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  joke: String
},
{ timestamps: true, versionKey: false })

const userSchema = new Schema({
  username: String,
  password: String
},
{ timestamps: true, versionKey: false })

const ProductModel = mongoose.model('Joke', productSchema )//param 3 : coll name , 'collection_Name')
const UserModel = mongoose.model('User', userSchema )
module.exports = { ProductModel,UserModel }