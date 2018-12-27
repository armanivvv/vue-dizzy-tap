const _ = require('lodash');
const {
  Bookmark,
  Cocktail,
} = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const userId = req.user.id;
      const { cocktailId } = req.query;
      const where = {
        UserId: userId,
      };
      if (cocktailId) {
        where.CocktailId = cocktailId;
      }
      const bookmarks = await Bookmark.findAll({
        where,
        include: [
          {
            model: Cocktail,
          },
        ],
      })
        .map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend(
          {},
          bookmark.Cocktail,
          bookmark,
        ));
      return res.send(bookmarks);
    } catch (err) {
      return res.status(500).send({
        error: 'an error has occured trying to fetch the bookmark',
      });
    }
  },
  async post(req, res) {
    try {
      const userId = req.user.id;
      const { cocktailId } = req.body;
      const bookmark = await Bookmark.findOne({
        where: {
          CocktailId: cocktailId,
          UserId: userId,
        },
      });
      if (bookmark) {
        return res.status(400).send({
          error: 'you already have this set as a bookmark',
        });
      }
      const newBookmark = await Bookmark.create({
        CocktailId: cocktailId,
        UserId: userId,
      });
      return res.send(newBookmark);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      return res.status(500).send({
        error: 'an error has occured trying to create the bookmark',
      });
    }
  },
  async remove(req, res) {
    try {
      const userId = req.user.id;
      const { bookmarkId } = req.params;
      const bookmark = await Bookmark.findOne({
        where: {
          id: bookmarkId,
          UserId: userId,
        },
      });
      if (!bookmark) {
        return res.status(403).send({
          error: 'you do not have access to this bookmark',
        });
      }
      await bookmark.destroy();
      return res.send(bookmark);
    } catch (err) {
      return res.status(500).send({
        error: 'an error has occured trying to delete the bookmark',
      });
    }
  },
};
