const { Cocktail } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const cocktails = await Cocktail.findAll({
        limit: 10,
      });
      return res.send(cocktails);
    } catch (error) {
      return res.status(500).send({
        error: 'An error has occured, trying to display cocktails',
      });
    }
  },
  async show(req, res) {
    try {
      const cocktail = await Cocktail.findById(req.params.cocktailId);
      return res.send(cocktail);
    } catch (error) {
      return res.status(500).send({
        error: 'An error has occured, trying to display cocktails',
      });
    }
  },
  async create(req, res) {
    try {
      const cocktail = await Cocktail.create(req.body);
      return res.send(cocktail);
    } catch (error) {
      return res.status(500).send({
        error: 'An error has occured. trying to create a cocktail',
      });
    }
  },
};
