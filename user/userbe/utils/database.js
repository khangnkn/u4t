const mongoose = require('mongoose');
const config = require('./config');

const connection = mongoose.connect(
  config.database_uri,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (error) => {
    if (error) {
      console.log(`Error ${error}`);
    } else {
      console.log(`Connected successfully to MongoDB at: ${config.database_uri}`);
    }
  },
);

module.exports = connection;
