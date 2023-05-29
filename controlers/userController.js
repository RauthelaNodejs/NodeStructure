const userStore = require('../stores/userCollection')

function userData(params) {
    console.log(params,"PJJJJJJJJJJJJJJ")
return userStore.create(params).then(res =>{
    console.log(res,"PPPPPPPPPP")
    return res
})
    
}


function login(params) {
return userStore.getByKey({email : params.email}).then(res =>{
return res
})
    
}

 async function list(params) {
    let users =  await userStore.find(params);
    let userCount =await  userData.count(params);
    return Promise.all([users,userCount]).then(res =>{
        let resp = {
            users : res[0],
            userCount : res[1]
        }

        return resp ;
    })
    
}

module.exports = {
    userData,
    login,
    list
}