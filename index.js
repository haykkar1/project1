const jwt = require('jsonwebtoken');
const config = require("../config/config")

const createJwtToken = (userId) => {
  return jwt.sign({ id: userId }, config.secret, {
    expiresIn: 86400
  });
}

module.exports = createJwtToken;