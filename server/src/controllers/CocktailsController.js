const { Op } = require('sequelize');
const { Cocktail } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      let cocktails = null;
      // eslint-disable-next-line prefer-destructuring
      const search = req.query.search;
      if (req.query.search) {
        cocktails = await Cocktail.findAll({
          where: {
            [Op.or]: [
              'name', 'description', 'ingredient',
            ].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`,
              },
            })),
          },
        });
      } else {
        cocktails = await Cocktail.findAll({
          limit: 10,
        });
      }
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
        error: 'An error has occured trying to create a cocktail',
      });
    }
  },
  async put(req, res) {
    try {
      await Cocktail.update(req.body, {
        where: {
          id: req.params.cocktailId,
        },
      });
      return res.send(req.body);
    } catch (error) {
      return res.status(500).send({
        error: 'An error has occured trying to update a cocktail',
      });
    }
  },
};
