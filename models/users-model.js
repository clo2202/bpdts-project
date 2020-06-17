const axios = require("axios");
const { filterWithinRadius } = require('../utils/utils');

const baseUrl = "https://bpdts-test-app.herokuapp.com";

const fetchUsersByCity = async city => {
  const { data } = await axios.get(`${baseUrl}/city/${city}/users`);
  return data;
};

const fetchUsersWithinRadius = async (miles, latLng) => {
  const { data } = await axios.get(`${baseUrl}/users`);
  const usersWithinRadius = filterWithinRadius(data, miles, latLng)
  return usersWithinRadius
};

module.exports = { fetchUsersByCity, fetchUsersWithinRadius };
