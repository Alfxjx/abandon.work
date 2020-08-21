const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    //target是请求接口的根地址    /v1是请求的url地址中的前缀  
    //eg：https://www.google.com/v1/count/common/list  完整的接口地址
    app.use(
        createProxyMiddleware(
            '/api',
            {
                target: 'http://www.abandon.work',
                changeOrigin: true,
            })
    );

};