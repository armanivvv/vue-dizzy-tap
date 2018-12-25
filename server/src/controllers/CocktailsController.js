const { Cocktail } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const cocktail = await Cocktail.findAll({
        limit: 20,
      });
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
