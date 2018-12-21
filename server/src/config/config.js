module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'dizzytaps',
    user: process.env.DB_USER || 'dizzytaps',
    password: process.env.DB_PASSWORD || 'dizzytaps',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './dizzytaps.sqlite',
    },
  },
};
