const PhoneModel = require("../models/phone");
const UsersModel = require("../models/users");
const buyPhoneModel = require("../models/buyPhoneModel");


const buyPhoneService = async (req,res) => {
  const { boughtPhone } = req.body;
  const user = await UsersModel.findOne({userName:req.userName});
  const phone = await PhoneModel.findOne({ Name : boughtPhone });
  if(!phone){
    res.send("Phone doesn't exist!!!");
  }
  console.log(user);
  if(user.balance >= phone.price){
    // const a = await UsersModel.findOneAndUpdate({userName : req.userName });
    await buyPhoneModel.create({ phoneName : boughtPhone });
    await PhoneModel.deleteOne({ Name : boughtPhone });
    await UsersModel.updateOne({userName : req.userName} , {balance:user.balance - phone.price });
    // {
    //   let stream = PhoneModel.watch();
    //   stream.on("change", async (req)=>{
    //     await UsersModel.updateOne({userName : req.userName} , {balance:user.balance - phone.price });
    //   })
    res.send(`You just bought ${boughtPhone} \n Your current balance is ${user.balance - phone.price}`);
      
    // }
  }
  else {
    res.send("Not enough money!");
    console.log("Not enough money!");
  

  }
}

module.exports = buyPhoneService;


// function wait(argum) {
//   setTimeout(() =>{console.log("waiting...")},argum*1000);
// }

// console.log("1");

// await wait(2);
// console.log("2");