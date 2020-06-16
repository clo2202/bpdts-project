const axios = require("axios");
const geolib = require("geolib");

const baseUrl = "https://bpdts-test-app.herokuapp.com";

const milesConversion = miles => {
  return miles * 1609;
};

const checkDistance = (user, meters) => {
  return geolib.isPointWithinRadius(
    { latitude: user.latitude, longitude: user.longitude },
    { latitude: 51.50853, longitude: -0.12574 },
    meters
  );
};

const fetchUsersByCity = async city => {
  const { data } = await axios.get(`${baseUrl}/city/${city}/users`);
  return data;
};

const fetchUsersWithinRadius = async miles => {
  const meters = milesConversion(miles);
  const { data } = await axios.get(`${baseUrl}/users`);
  return data.filter(user => checkDistance(user, meters));
};

module.exports = { fetchUsersByCity, fetchUsersWithinRadius };
