const apiConfig = require('../config/api');

exports.getGeolocation = (req, res) => {
  res.json(apiConfig.geolocation);
};