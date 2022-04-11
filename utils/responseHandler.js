// var constant = require('./constant'),
//     customException = require('./customException'),
//     logger = require('./logger').logger,
//     APIResponse = require('./model/APIResponse');
    
//var sendgrid_email = require('./service/sendgrid_email');
//var config = require('./config/index');        
class APIResponse {
    constructor(statusCode, result,request){
        this.statusCode = statusCode;
        if(statusCode == 401){
            result.message=result.message?result.message:"Api Result";
            result ? this.responseData = result : constant.EMPTY;
        }else{
            result ? this.data = result : constant.EMPTY;
        }
        // if (config.cfg.debug===true||config.cfg.debug==="true") {
        //     this.requestParams=request.body;
        // }
        this.time = new Date();
    }
}
function _sendResponse(response, result) {
    // send status code 200
    return response.send(result);
}

function sendError(response, error,request) {
    // if error doesn't has sc than it is an unhandled error,
    // log error, and throw intrnl server error
    if (!error.errorCode) {
        //logger.error(error, "Unhandled error.");
        error = "fatel errror";
    }
   // var result = new APIResponse(400, error,request);
    _sendResponse(response,error );
}

function handleError(error, request, response, next) {
    // unhandled error
    sendError(response, error,request);
}

function sendSuccess(response, result,request) {
    var result = new APIResponse(200,result,request);
    _sendResponse(response, result);
}

function sendErrorEmail(params) {
    //console.log("sendErrorEmail")
    let { env, response, error,request,headers,url } = params;
    let payload={
        email:config.cfg.smtp.errorLogEmail,
        subject:"Demo : Server Error",
        template:"errorLog.ejs",
        env, response, error,request,headers,url
    }
    sendgrid_email.sendEmail(payload);
}

// ========================== Export Module Start ==========================
module.exports = {
    sendError,
    handleError,
    sendSuccess,
    sendErrorEmail
}
// ========================== Export Module End ============================