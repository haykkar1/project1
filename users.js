const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  userName: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  balance: {type: Number , default: 1000}
});

const UsersModel = mongoose.model("User", UsersSchema);

module.exports = UsersModel;