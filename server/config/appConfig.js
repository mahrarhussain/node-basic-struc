const dotenv = require("dotenv");

dotenv.config({
  path: `${__dirname}/../.env`,
});

const processEnv = process.env;

module.exports = {
  DB_URL: processEnv.DB_URL,
  PORT: processEnv.PORT,
  UNFONICE_LEY: processEnv.unifonic,
};
