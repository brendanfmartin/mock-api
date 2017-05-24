const apiConfig = require('../config/api');

exports.getForecast = (req, res) => {
  res.json(apiConfig.forecast);
};

exports.getTimeMachine = (req, res) => {
  res.json(apiConfig.forecast);
};