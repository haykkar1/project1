const buyPhoneService = require("../services/buyPhoneService");

const buyPhone = async (req, res, next) => {
  try {
    const result = await buyPhoneService(req);
    return res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = buyPhone;

