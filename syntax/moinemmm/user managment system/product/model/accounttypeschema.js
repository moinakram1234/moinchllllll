const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const producttypeSchema = new Schema ({
   username:String,
   phone:String,
});

const producttype = mongoose.model('producttype', producttypeSchema);
module.exports = producttype;