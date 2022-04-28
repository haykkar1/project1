const bcrypt = require('bcrypt');
const UsersModel = require("../models/users");
const createJwtToken = require("../helpers");

const loginService = async (req) => {
  const { userName, password } = req.body;
  const user = await UsersModel.findOne({ userName });
  if (user) {
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) throw new Error("Password is not correct");
    return { token: createJwtToken(user.userName) };
  }
  throw new Error("User not found!");
}

module.exports = loginService;