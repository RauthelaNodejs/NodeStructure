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


  usrRoutr.route('/ppp').get((req,res)=>{
      res.send("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
  })









module.exports = usrRoutr;

