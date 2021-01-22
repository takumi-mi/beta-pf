const protect = require("static-auth");
const safeCompare = require("safe-compare");

const USER_NAME = process.env.USER_NAME || "admin";
const PASSWORD = process.env.PASSWORD || "admin";

const app = protect(
  "/",
  (username, password) =>
    safeCompare(username, USER_NAME) && safeCompare(password, PASSWORD),
  {
    directory: `${__dirname}/public`, // public 配下のファイルを静的コンテンツとして配信する
    onAuthFailed: (res) => {
      res.end("Authentication failed");
    }
  }
);

module.exports = app;
