const Promise = require('bluebird');

// initialize model creation
const {
  sequelize,
  Cocktail,
  User,
  Bookmark,
  History,
} = require('../src/models');

const cocktails = require('./cocktails.json');
const users = require('./users.json');
const bookmarks = require('./bookmarks.json');
const histories = require('./histories.json');

sequelize.sync({ force: true })
  .then(async () => {
    await Promise.all(
      users.map(user => User.create(user)),
    );
    await Promise.all(
      cocktails.map(cocktail => Cocktail.create(cocktail)),
    );
    await Promise.all(
      bookmarks.map(bookmark => Bookmark.create(bookmark)),
    );
    await Promise.all(
      histories.map(history => History.create(history)),
    );
  });
