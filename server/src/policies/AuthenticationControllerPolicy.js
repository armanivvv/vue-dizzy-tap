const Joi = require('joi');

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('[^a-zA-Z0-9]{8,32}$'),
      ),
    };

    const { error, value } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Please enter a valid email!',
          });
          break;
        case 'password':
          res.status(400).send({
            error: `Please provide a valid password.
            <br>
            1. Must contain only alphanumeric characters
            <br>
            2. Must be between 8 and 32 characters long`,
          });
          break;
        default:
          res.status(400).send({
            error: 'Invalid registration information',
          });
      }
    } else {
      next();
    }
  },
};
