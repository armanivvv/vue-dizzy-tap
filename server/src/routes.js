const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const CocktailsController = require('./controllers/CocktailsController');
const BookmarksController = require('./controllers/BookmarksController');

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
    BookmarksController.index);
  app.post('/bookmarks',
    BookmarksController.post);
  app.delete('/bookmarks/:bookmarkId',
    BookmarksController.delete);
};
