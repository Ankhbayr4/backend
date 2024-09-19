const express = require("express");
const UserRouter = require("./router/user");

const app = express();

app.use(express.json());

const port = 8000;

app.use(UserRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
