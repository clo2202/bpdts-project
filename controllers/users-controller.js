const {
  fetchUsersByCity,
  fetchUsersWithinRadius
} = require("../models/users-model");
const { lookupCity } = require("../utils/utils");

const getUsersByLocation = (req, res, next) => {
  const { city } = req.params;
  const { miles } = req.query;
  const latLng = lookupCity(city);

  if (latLng) {
    return fetchUsersByCity(city).then(cityUsers => {
      return fetchUsersWithinRadius(miles, latLng).then(withinRadiusUsers => {
        res.status(200).send({ users: [...cityUsers, ...withinRadiusUsers] });
      });
    });
  } else {
    res.status(404).send({ message: "No records found, please check your input" });
  }
};

module.exports = { getUsersByLocation };
