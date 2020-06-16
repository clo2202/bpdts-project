const geolib = require("geolib");
const { cityCentreLookup } = require('./refObject');

exports.milesConversion = miles => {
    return miles * 1609;
  };

exports.lookupCity = city => {
  return cityCentreLookup[city];
}  
  
exports.checkDistance = (user, meters, lngLat) => {
    return geolib.isPointWithinRadius(
      { latitude: user.latitude, longitude: user.longitude },
      lngLat,
      meters
    );
  };