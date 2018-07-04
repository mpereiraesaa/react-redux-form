import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import cors from "cors";
import compression from "compression";

import config from "./config";
import logger from "./utils/logger";

// Initialize API
const api = express();

// initialize middleware
api.use(cors());
api.use(compression());
api.use(bodyParser.urlencoded({extended: true}));
api.use(bodyParser.json());

api.use(express.static(__dirname + '/public'));

// listen on the designated port found in the configuration
api.listen(config.server.port, err => {
  if (err) {
    logger.error(err);
    process.exit(1);
  }

  // require the database library (which instantiates a connection to mongodb)
  require("./utils/db");

  // loop through all routes and dynamically require them – passing api
  fs.readdirSync(path.join(__dirname, "routes")).map(file => {
    require("./routes/" + file)(api);
  });

  // output the status of the api in the terminal
  logger.info(
    `API is now running on port ${config.server.port} in ${config.env} mode`
  );
});

module.exports = api;
