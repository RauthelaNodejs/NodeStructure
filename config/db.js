const mongoose = require("mongoose"); 

function databaseConnection(callback) 
{
    mongoose.connect(
        process.env.MONGODB_URI,
        { useNewUrlParser: true, useUnifiedTopology: true },
        function (err) {
          if (err) {
              console.log(err);
              callback(err)
          }
          callback()
        }
      );
};


module.exports ={
    databaseConnection
}