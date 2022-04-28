const jwt = require("jsonwebtoken");
const config = require("../config/config.js");
// const UsersModel = require("../models/users")
const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  jwt.verify(token, config.secret, (err, user) => {
    console.log(err);
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userName = user.id;
    next();
  });
};

module.exports = {
  verifyToken,
}