const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const CocktailsController = require('./controllers/CocktailsController');
const BookmarksController = require('./controllers/BookmarksController');
const HistoriesController = require('./controllers/HistoriesController');

const isAuthenticated = require('./policies/isAuthenticated');

module.exports = (app) => {
  // User Credentials and Functions
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register);
  app.post('/login',
    AuthenticationController.login);

  // Cocktail CRUD and Functions
  app.get('/cocktails',
    CocktailsController.index);
  app.get('/cocktails/:cocktailId',
    CocktailsController.show);
  app.put('/cocktails/:cocktailId',
    CocktailsController.put);
  app.post('/cocktails',
    CocktailsController.create);

  // Bookmark CRUD and Functions
  app.get('/bookmarks',
    isAuthenticated,
    BookmarksController.index);
  app.post('/bookmarks',
    isAuthenticated,
    BookmarksController.post);
  app.delete('/bookmarks/:bookmarkId',
    isAuthenticated,
    BookmarksController.remove);

  // Recent History Function
  app.get('/histories',
    isAuthenticated,
    HistoriesController.index);
  app.post('/histories',
    isAuthenticated,
    HistoriesController.post);
};
