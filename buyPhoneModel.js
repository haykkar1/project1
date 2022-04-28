const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buyPhoneSchema = new Schema({
  phoneName: { type: String , required : true}
});

const buyPhoneModel = mongoose.model("boughtPhones", buyPhoneSchema);

module.exports = buyPhoneModel;

