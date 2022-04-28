const bcrypt = require('bcrypt');
const UsersModel = require("../models/users");

const registerService = async (req) => {
  const { userName, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 8);

  const user = await UsersModel.create({ userName, password: hashedPassword });
  return  user ;
}

module.exports = registerService;