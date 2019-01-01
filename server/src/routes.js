const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const CocktailsController = require('./controllers/CocktailsController');
const BookmarksController = require('./controllers/BookmarksController');
const HistoriesController = require('./controllers/HistoriesController');

const isAuthenticated = require('./policies/isAuthenticated');

module.exports = (app) => {
  // User Credentials and Functions
  app.post('/api/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register);
  app.post('/api/login',
    AuthenticationController.login);

  // Cocktail CRUD and Functions
  app.get('/api/cocktails',
    CocktailsController.index);
  app.get('/api/cocktails/:cocktailId',
    CocktailsController.show);
  app.put('/api/cocktails/:cocktailId',
    CocktailsController.put);
  app.post('/api/cocktails',
    CocktailsController.create);

  // Bookmark CRUD and Functions
  app.get('/api/bookmarks',
    isAuthenticated,
    BookmarksController.index);
  app.post('/api/bookmarks',
    isAuthenticated,
    BookmarksController.post);
  app.delete('/api/bookmarks/:bookmarkId',
    isAuthenticated,
    BookmarksController.remove);

  // Recent History Function
  app.get('/api/histories',
    isAuthenticated,
    HistoriesController.index);
  app.post('/api/histories',
    isAuthenticated,
    HistoriesController.post);
};
