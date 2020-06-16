const geolib = require("geolib");

exports.milesConversion = miles => {
    return miles * 1609;
  };
  
exports.checkDistance = (user, meters) => {
    return geolib.isPointWithinRadius(
      { latitude: user.latitude, longitude: user.longitude },
      { latitude: 51.50853, longitude: -0.12574 },
      meters
    );
  };