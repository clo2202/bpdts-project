const axios = require("axios");
const { milesConversion, checkDistance } = require('../utils/utils');

const baseUrl = "https://bpdts-test-app.herokuapp.com";

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
