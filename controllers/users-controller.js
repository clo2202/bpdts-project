const { fetchUsersByCity } = require("../models/users-model");

const getUsersByLocation = (req, res, next) => {
    const { city } = req.params;
    fetchUsersByCity(city).then(users => {
        res.status(200).send({users})
    })
}

module.exports = { getUsersByLocation }