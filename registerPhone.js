const registerPhoneService = require("../services/registerPhoneService");

const registerPhone = async (req, res, next) => {
  try {

    const result = await registerPhoneService(req);
    return res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = registerPhone;

