# 后台设计

## server 端的设计（nest.js）

### RESTful API 设计

1. 重新设计 api 的结构
2. 使用 method 来表示操作
3. 根据返回的 http 状态码进行错误处理
4. 设计统一的返回结构

#### 路由表

| 模块名称 |  方法  | router |              备注              |
| -------- | :----: | :----: | :----------------------------: |
| bbs      |        |        |     bbs 未登录就显示为游客     |
| bbs      |  get   |  /bbs  |            获取列表            |
| bbs      |  post  |  /bbs  |            新建一个            |
| bbs      | delete |  /bbs  |            删除一个            |
| blog     |        |        |        需要检验登录权限        |
| user     |        |        | 登录注册，需要使用 jwt/session |

#### 返回结构设计

```json
{
  "status":200,
  "message":"OK",
  "data":{
    "name":"小李",
    ...
  }
}
```

---

## 数据库设计

### mongodb

### mongoose 使用

---

## 服务器端的运维

### 容器化

### nginx