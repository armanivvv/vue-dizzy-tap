const _ = require('lodash');
const {
  History,
  Cocktail,
} = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const userId = req.user.id;
      const histories = await History.findAll({
        where: {
          UserId: userId,
        },
        include: [
          {
            model: Cocktail,
          },
        ],
        order: [
          ['createdAt', 'DESC'],
        ],
      })
        .map(history => history.toJSON())
        .map(history => _.extend(
          {},
          history.Cocktail,
          history,
        ));
      return res.send(_.uniqBy(histories, history => history.CocktailId));
    } catch (err) {
      return res.status(500).send({
        error: 'an error has occured trying to fetch the history',
      });
    }
  },
  async post(req, res) {
    try {
      const userId = req.user.id;
      const { cocktailId } = req.body;
      const history = await History.create({
        CocktailId: cocktailId,
        UserId: userId,
      });
      return res.send(history);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      return res.status(500).send({
        error: 'an error has occured trying to create the history object',
      });
    }
  },
};
