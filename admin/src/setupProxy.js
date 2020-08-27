const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    //eg：https://www.google.com/v1/count/common/list  完整的接口地址
    app.use(
        createProxyMiddleware(
            '/api',
            // dev
            {
                target: 'http://localhost:6000',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            },
            // prod
           /*  {
                target:'http://www.abandon.work',
                changeOrigin: true,
            } */
        )
    );

};