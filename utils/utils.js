const geolib = require("geolib");
const { cityLatLongLookup } = require('./refObject');

exports.milesConversion = miles => {
    return miles * 1609;
  };

exports.lookupCity = city => {
  return cityLatLongLookup[city];
}  
  
exports.checkDistance = (user, meters, lngLat) => {
    return geolib.isPointWithinRadius(
      { latitude: user.latitude, longitude: user.longitude },
      lngLat,
      meters
    );
  };