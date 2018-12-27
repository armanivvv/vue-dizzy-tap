// const _ = require('lodash');
// const { History, Cocktail } = require('../models');

// module.exports = {
//   async index(req, res) {
//     try {
//       const userId = req.user.id;
//       const histories = await History.findAll({
//         where: {
//           UserId: userId,
//         },
//         include: [
//           {
//             model: Cocktail,
//           },
//         ],
//       }).map(history => history.toJSON())
//         .map(history => _.extend({
//           historyId: history.id,
//           historyCreatedAt: history.createdAt,
//         }, history.Cocktail));
//       return res.send(histories);
//     } catch (err) {
//       return res.status(500).send({
//         error: 'an error has occured trying to fetch the history',
//       });
//     }
//   },
//   async post(req, res) {
//     try {
//       const history = req.body;
//       history.UserId = req.user.id;
//       const checkHistory = (await History.findOne(history)).data;

//       if (checkHistory) {
//         return res.status(400).send({
//           error: 'you already set this history',
//         });
//       }

//       const newHistory = await History.create(history);
//       return res.send(newHistory);
//     } catch (err) {
//       return res.status(500).send({
//         error: 'an error has occured trying to create the history record',
//       });
//     }
//   },
// };

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
