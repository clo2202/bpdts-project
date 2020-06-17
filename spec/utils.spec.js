const { expect } = require("chai");
const {
  filterWithinRadius,
  milesConversion,
  lookupCity
} = require("../utils/utils");
const { allUsers } = require("../test-data");

describe("filterWithinRadius", () => {
  it("returns a new empty array when passed an empty array", () => {
    expect(filterWithinRadius([])).to.eql([]);
  });
  it("returns a new array containing only users who live within radius of given point", () => {
    const miles = 50;
    const latLng = {
      latitude: 51.50853,
      longitude: -0.12574
    };
    const actual = filterWithinRadius(allUsers, miles, latLng);
    const expected = [
      {
        id: 10,
        first_name: "Test",
        last_name: "Tester",
        email: "test@testmail.com",
        ip_address: "123.123.123.123",
        latitude: 51.5489435,
        longitude: 0.3860497
      },
      {
        id: 11,
        first_name: "John",
        last_name: "Smith",
        email: "johnsmith@testmail.com",
        ip_address: "321.321.321.321",
        latitude: 51.6710832,
        longitude: 0.8078532
      }
    ];
    expect(actual).to.eql(expected);
    expect(actual.length).to.equal(2);
  });
  it("does not mutate the input array", () => {
    const miles = 50;
    const testUsers = [
      {
        id: 5,
        first_name: "Maurise",
        last_name: "Shieldon",
        email: "mshieldon0@squidoo.com",
        ip_address: "192.57.232.111",
        latitude: 34.003135,
        longitude: -117.7228641
      },
      {
        id: 10,
        first_name: "Test",
        last_name: "Tester",
        email: "test@testmail.com",
        ip_address: "123.123.123.123",
        latitude: 51.5489435,
        longitude: 0.3860497
      }
    ];
    const latLng = {
      latitude: 51.50853,
      longitude: -0.12574
    };
    filterWithinRadius(testUsers, miles, latLng);
    expect(testUsers).to.eql([
      {
        id: 5,
        first_name: "Maurise",
        last_name: "Shieldon",
        email: "mshieldon0@squidoo.com",
        ip_address: "192.57.232.111",
        latitude: 34.003135,
        longitude: -117.7228641
      },
      {
        id: 10,
        first_name: "Test",
        last_name: "Tester",
        email: "test@testmail.com",
        ip_address: "123.123.123.123",
        latitude: 51.5489435,
        longitude: 0.3860497
      }
    ]);
  });
});

describe("milesConversion", () => {
  it("return 0 if no miles are given", () => {
    expect(milesConversion(0)).to.equal(0);
  });
  it("returns the correct number of meters", () => {
    expect(milesConversion(10)).to.equal(16093.4);
  });
});

describe("lookupCity", () => {
  it("returns undefined if city is not present in refObject", () => {
    expect(lookupCity("Leeds")).to.be.undefined;
  });
  it("returns object containing lat and log properties for given city that is present in refObject", () => {
    const actual = lookupCity("London");
    const expected = {
      latitude: 51.50853,
      longitude: -0.12574
    };
    expect(actual).to.eql(expected);
  });
});
