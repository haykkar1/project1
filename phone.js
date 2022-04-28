const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhoneSchema = new Schema({
  Name: { type: String , required: true },
  price:{ type: String , required: true }
});

const PhoneModel = mongoose.model("Phone", PhoneSchema);

module.exports = PhoneModel;

