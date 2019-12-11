const dotenv = require('dotenv');

dotenv.config();

const config = {};

config.secret = process.env.SECRET;
config.database_uri = process.env.DATABASE_URI;
config.environment = process.env.NODE_ENV;
config.salt = parseInt(process.env.SALT, 10);
config.clientid = process.env.CLIENT_ID;
config.clientsecret = process.env.CLIENT_SECRET;
config.authcallback = process.env.AUTH_CALLBACK;

module.exports = config;
