const mongoose = require('mongoose');
const URL =
  "mongodb+srv://saurabh:saurabh123@cluster0.hmdwt.mongodb.net/hack2skill";
module.exports = ()=>{
    mongoose.connect(URL)
    .then(()=>{
        console.log("Connected to database")
    })
    .catch((error)=>{
        console.log("Error in connecting to database")
    })
}