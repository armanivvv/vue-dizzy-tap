const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const CocktailsController = require('./controllers/CocktailsController');

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register);

  app.post('/login',
    AuthenticationController.login);

  app.get('/cocktails',
    CocktailsController.index);

  app.get('/cocktails/:cocktailId',
    CocktailsController.show);

  app.post('/cocktails',
    CocktailsController.create);
};
