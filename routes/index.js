const basicAuth = require('../middleware/basicAuth');

const route = require('./route');

module.exports = function (app) {
    //app.use(basicAuth.basicAuthentication);
    
    app.use('/api/v1',route)
}