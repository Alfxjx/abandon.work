/**
 * 对dev-server进行配置
 */
const fs = require("fs");
const path = require("path");
// TODO: put static file in public to solve hmr hot.update.json
const publicDIR = path.join(__dirname, "public");
const basePath = path.join(publicDIR, "mock");

let config = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "assets",
  productionSourceMap: false,
  // 它支持webPack-dev-server的所有选项
  devServer: {
    // host: "0.0.0.0",
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: false //配置自动启动浏览器
  }
};

if (process.env.NODE_ENV === "development") {
  config["devServer"] = {
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: false, //配置自动启动浏览器
    /**
     * 如果是本地环境，就返回mock json文件
     */
    before(app) {
      app.get("*.json", (req, res) => {
        res.json(
          JSON.parse(fs.readFileSync(path.join(basePath, req.url), "utf8"))
        );
      });
      app.post("*.json", (req, res) => {
        res.json(
          JSON.parse(fs.readFileSync(path.join(basePath, req.url), "utf8"))
        );
      });
      app.put("*.json", (req, res) => {
        res.json(
          JSON.parse(fs.readFileSync(path.join(basePath, req.url), "utf8"))
        );
      });
      app.delete("*.json", (req, res) => {
        res.json(
          JSON.parse(fs.readFileSync(path.join(basePath, req.url), "utf8"))
        );
      });
    }
  };
}

if (process.env.NODE_ENV === "test") {
  config["devServer"] = {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  };
}

module.exports = config;
