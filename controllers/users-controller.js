const getUsersByLocation = (req, res, next) => {
    res.status(200).send({msg: "fetch users"})
}

module.exports = { getUsersByLocation }