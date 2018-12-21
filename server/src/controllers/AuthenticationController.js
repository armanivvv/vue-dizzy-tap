module.exports = {
  register (req, res) {
    res.send({
      message: `User ${req.body.email}, with ${req.body.password} was registered! Enjoy!`,
    });
  },
};
