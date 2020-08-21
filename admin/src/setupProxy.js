const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/api', { target: 'https://www.abandon.work/' }));
    //target是请求接口的根地址    /v1是请求的url地址中的前缀  
    //eg：https://www.google.com/v1/count/common/list  完整的接口地址
};