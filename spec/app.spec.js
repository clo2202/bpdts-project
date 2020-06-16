const { app } = require("../app");
const request = require("supertest")(app);
const chai = require("chai");
const { expect } = chai;
const nock = require("nock");
const { usersByCity, allUsers } = require("../test-data");

const baseUrl = "https://bpdts-test-app.herokuapp.com";

describe("/users/:city", () => {
  beforeEach(() => {
    nock(baseUrl)
      .get("/city/London/users")
      .reply(200, [...usersByCity]);
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it("GET responses with status: 200 and an array of users listed as living in London", () => {
    return request
      .get("/users/London")
      .expect(200)
      .then(({ body: { users } }) => {
        expect(users).to.be.an("array");
        expect(users.length).to.equal(4);
        expect(users[0]).to.contain.keys("email", "first_name", "latitude");
      });
  });
});
