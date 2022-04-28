const registerService = require("../services/registerService");

const register = async (req, res, next) => {
  try {

    const result = await registerService(req);
    return res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = register;

