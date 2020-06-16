const {
  fetchUsersByCity,
  fetchUsersWithinRadius
} = require("../models/users-model");

const getUsersByLocation = (req, res, next) => {
  const { city } = req.params;
  const { miles } = req.query;
  return fetchUsersByCity(city).then(cityUsers => {
    return fetchUsersWithinRadius(miles).then(withinRadiusUsers => {
      res.status(200).send({ users: [...cityUsers, ...withinRadiusUsers] });
    });
  });
};

module.exports = { getUsersByLocation };
