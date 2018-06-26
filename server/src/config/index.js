const username = "superuser-ven";
const password = "12345";

export default {
  env: process.env.NODE_ENV || "development",
  server: {
    port: "3000"
  },
  database: {
    uri:
      `mongodb://${username}:${password}@cluster0-shard-00-00-vdlr2.mongodb.net:27017,cluster0-shard-00-01-vdlr2.mongodb.net:27017,cluster0-shard-00-02-vdlr2.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`
  },
  logger: {
    host: process.env.LOGGER_HOST, // Papertrail Logging Host
    port: process.env.LOGGER_PORT // Papertrail Logging Port
  }
};
