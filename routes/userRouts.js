const usrRoutr = require("express").Router();
//const middleware = require('../middleware');
//const validators = require('../validators');
const userController = require('../controlers/userController');
const resHandler = require('../utils/responseHandler')

usrRoutr.route('/signup')
  .post([],(req,res)=>{
      let {email,password}= req.body;
   userController.userData({email,password}).then(result =>{
       resHandler.sendSuccess(res, result, req);
   }).catch(err =>{
       resHandler.sendError(res, err, req)
   })

  })


  usrRoutr.route('/userList').get((req,res)=>{
    return userController.list().then(res =>{
        resHandler.sendSuccess(res, result, req);

    }).catch(err =>{
        resHandler.sendError(res, err, req)

    })

  })


  usrRoutr.route('/login').post((req,res)=>{
    let {email,password}= req.body;
    return userController.login({email,password}).then(res =>{
        resHandler.sendSuccess(res, result, req);

    }).catch(err =>{
        resHandler.sendError(res, err, req)

    })

  })








module.exports = usrRoutr;

