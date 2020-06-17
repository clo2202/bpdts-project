const geolib = require("geolib");
const { cityLatLongLookup } = require('./refObject');

exports.milesConversion = (miles) => {
    return miles * 1609;
  };

exports.lookupCity = city => {
  return cityLatLongLookup[city];
}

exports.filterWithinRadius = (users, miles = 0, latLng = {}) => {
  const meters = this.milesConversion(miles);
  return users.filter(user => {
    return geolib.isPointWithinRadius(
      { latitude: user.latitude, longitude: user.longitude },
      latLng,
      meters
    );
  })
}
  