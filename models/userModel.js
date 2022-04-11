// Importing mongoose
var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var Employee;

var EmployeeSchema = new Schema({

    email: {
        type: String,
        required: true
    },
   password : {
       type : String,
       required : true
   },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    },
    isDel: {
        type: Boolean,
        default: false
    },


}
);

//Export user module
Employee = module.exports = mongoose.model("employee", EmployeeSchema);


