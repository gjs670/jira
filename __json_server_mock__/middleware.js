module.exports = (req, res, next) => {
  console.log(req, res, next);
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "gjs" && req.body.password === "111111") {
      return res.status(200).json({
        message: "请求成功",
        user: {
          token: "XXXXXXXXXXXXXXXXXXX",
        },
      });
    } else {
      return res.status(400).json({
        message: "用户名或者密码错误！",
      });
    }
  }
  next();
};
