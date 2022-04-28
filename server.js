const express = require("express");
const register = require("./controllers/register");
const login = require("./controllers/login")
const connection  = require("./database/connection");
const registerPhone = require("./controllers/registerPhone")
// const buyPhone = require("./controllers/buyPhone");
const buyPhoneService = require("./services/buyPhoneService");
const auth = require("./middleware/authjwt");


const bodyParser = require('body-parser')

const app = express();


connection("taskDb");
app.use(bodyParser.json());


app.post("/register",register);
app.post("/login",login);

// let stream = PhoneModel.watch();
// stream.on("change", (req)=>{
//     await UsersModel.updateOne({userName : req.userName} , {balance:user.balance - phone.price });
//     console.log(req);
// })
app.post("/buyPhone",auth.verifyToken , buyPhoneService );
app.post("/registerPhone",registerPhone);


app.listen(3000, () =>{
  console.log("Server running at port 3000!");
})

