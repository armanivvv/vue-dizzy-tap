const { User } = require('../models');

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      const userJson = user.toJSON();
      res.send({
        user: userJson,
      });
    } catch (error) {
      res.status(400).send({
        error: 'This email is already in use.',
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        return res.status(403).send({
          error: 'Invalid login information',
        });
      }

      const isPasswordValid = user.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Login info is incorrect',
        });
      }

      const userJson = user.toJSON();
      return res.send({
        user: userJson,
      });
    } catch (err) {
      return res.status(500).send({
        error: 'An error has occured.',
      });
    }
  },
};
