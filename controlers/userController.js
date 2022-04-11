const userStore = require('../stores/userCollection')

function userData(params) {
    console.log(params,"PJJJJJJJJJJJJJJ")
return userStore.create(params).then(res =>{
    console.log(res,"PPPPPPPPPP")
    return res
})
    
}


module.exports = {
    userData
}