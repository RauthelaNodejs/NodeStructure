"use strict";
//========================== Load Modules Start =======================

//========================== Load internal modules ====================
//========================== Load internal modules ====================
const User = require('../models/userModel');


// init user dao
let BaseDao = require('../config/dataSet');
const dao = new BaseDao(User);


//========================== Load Modules End ==============================================

function create(params) {
  console.log(params,">>>>>>>>>>>>")
    let user = new User(params);
    return dao.save(user);
}

function updateByKey(query,update) {
    update.updated = new Date();   
let option = {};
    option.new = true;
return dao.findOneAndUpdate(query, update, option);
}

function getByKey(query) {
    // query.isDel = false
    return dao.findOne(query)
}
function deleteByKey(query) {
    console.log(query,'lllllllllll');
    let option = {};
    return dao.deleteByKey(query, option)
}

function find(query) {
    return dao.find(query)
}



const agg = (pipe = []) => dao.aggregate(pipe);

//========================== Export Module Start ==============================

module.exports = {
    create,
    getByKey,
    agg,
    deleteByKey,
    updateByKey,
    find

};

//========================== Export Module End ===============================
