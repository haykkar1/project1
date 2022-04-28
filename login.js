const loginService = require("../services/loginService");

const login = async (req, res, next) => {
  try {
    const result = await loginService(req);
    return res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = login;

