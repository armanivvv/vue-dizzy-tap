const path = require('path');

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'dizzytaps',
    user: process.env.DB_USER || 'dizzytaps',
    password: process.env.DB_PASS || 'dizzytaps',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../dizzytaps.sqlite'),
    },
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret',
  },
};
