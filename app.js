const express = require("express");
const os = require("os");
const app = express();

app.get("/home", (req, res) => res.send(`안녕 ${os.hostname()} 사용자?`));

app.listen(3000, () => {
  console.log(`docker test server on ${os.hostname()}`);
});
