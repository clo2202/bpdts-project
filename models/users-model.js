const axios = require('axios');

const baseUrl = "https://bpdts-test-app.herokuapp.com";

const fetchUsersByCity = async (city) => {
    const { data } = await axios.get(`${baseUrl}/city/${city}/users`)
    return data;
}

module.exports = { fetchUsersByCity }