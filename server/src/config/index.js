require('dotenv').config({path: './.env'});

export default {
  env: process.env.NODE_ENV || 'development',
  database: {
    uri: ""
  },
  logger: {
    host: process.env.LOGGER_HOST, // Papertrail Logging Host
    port: process.env.LOGGER_PORT, // Papertrail Logging Port
  }
};
