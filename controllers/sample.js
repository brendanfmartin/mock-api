const apiConfig = require('../config/api');

exports.getSample = (req, res) => {
  res.json(apiConfig.sample);
};