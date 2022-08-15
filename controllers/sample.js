const apiConfig = require('../config/api');

exports.getSample = (req, res) => {
  res.json(apiConfig.sample);
};

exports.getError = (req, res) => {
  res.status(400).send({
    message: 'Error'
  });
}