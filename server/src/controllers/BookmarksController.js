// const _ = require('lodash');
const { Bookmark, Cocktail } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const { cocktailId } = req.query;
      const userId = req.user.id;
      const where = {
        UserId: userId,
      };
      if (cocktailId) {
        where.CocktailId = cocktailId;
      }
      const bookmark = await Bookmark.findAll({
        where,
        include: [
          {
            model: Cocktail,
          },
        ],
      }).map(bm => bm.toJSON())
        // eslint-disable-next-line no-undef
        .map(bm => _.extend({
          bookmarkId: bm.id,
          bookmarkCreatedAt: bm.createdAt,
        }, bm.Cocktail));
      return res.send(bookmark);
    } catch (err) {
      return res.status(500).send({
        error: 'an error has occured trying to fetch bookmarks',
      });
    }
  },
  async post(req, res) {
    try {
      const bookmark = req.body.params;
      bookmark.UserId = req.user.id;
      const checkBookmark = (await Bookmark.findOne(bookmark)).data;

      if (checkBookmark) {
        return res.status(400).send({
          error: 'You already bookmarked this cocktail.',
        });
      }

      const newBookmark = await Bookmark.create(bookmark);
      return res.send(newBookmark);
    } catch (err) {
      return res.status(500).send({
        error: 'An error occured trying to store this bookmark.',
      });
    }
  },
  async delete(req, res) {
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
          error: "You can't access this bookmark!",
        });
      }
      await bookmark.destroy();
      return res.send(bookmark);
    } catch (err) {
      return res.status(500).send({
        error: "You can't delete this bookmark!",
      });
    }
  },
};
