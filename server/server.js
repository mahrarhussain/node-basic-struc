const express = require("express");
const connect = require("./config/db");
const api = require("./routes/index");
const appConfig = require("./config/appConfig");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

connect();

app.listen(appConfig.PORT, () => {
  console.log(`server started on ${appConfig.PORT}`);
});
