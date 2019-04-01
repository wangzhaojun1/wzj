var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("users");
});

router.post("/login", function(req, res) {
  //如果是post请求，则请求数据（入参）会被包装到req.body属性上
  //直接是无法获取的，需要安装body-parser中间件进行解析
  console.log(req.body);
  res.send("user login");
});

router.get("/regist", function(req, res, next) {
  res.send("user regist");
});

module.exports = router;
