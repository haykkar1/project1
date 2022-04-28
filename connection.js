const mongoose = require("mongoose");


const connection = (dbname) => {
  mongoose.connect(`mongodb://localhost/${dbname}`);
  (err) => {
    if(err) console.log(err) 
    else console.log("db is connected");
  }
}


module.exports = connection;