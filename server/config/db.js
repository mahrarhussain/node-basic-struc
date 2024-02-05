const mongoose = require("mongoose");
const appConfig = require("./appConfig");

const connect = () => {
  mongoose
    .connect(appConfig.DB_URL)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => console.log("Error Connect", err));
};

module.exports = connect;
