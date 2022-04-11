console.log("********************Welocme To Basic MVC Structre*****************");
console.log("Server Start Date : ",new Date());

//
require('dotenv').config({ debug: process.env.DEBUG });
const dbConfig = require('./config/db');
dbConfig.databaseConnection((err)=>{
    if(err){
        console.log(err)
    }
    console.log("**********Database Connection sucessfully*******************")
})


const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 require('./routes/index')(app)
const port = process.env.PORT || 5002
app.listen(port, () => {
    console.log(`Server is running on port ${port}` )
});
