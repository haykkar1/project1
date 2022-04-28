const PhoneModel = require("../models/phone");

const registerPhoneService = async (req) => {
  const { Name , price } = req.body;
  const phone = await PhoneModel.create({ Name , price });
  return  phone ;
}

module.exports = registerPhoneService;