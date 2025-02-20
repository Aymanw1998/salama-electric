const mongoose = require('mongoose');

const connectDB = async () => {
   //console.log("***************start - connectDB************")
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
       //console.log(`MongoDB Connected: ${conn.connection.host}`);
        ////console.log("***************end - connectDB************")
    }
    catch(err){
       //console.log("ErrorMongoDB ", err)
    }
   //console.log("***************end - connectDB************")

};

module.exports = connectDB;
