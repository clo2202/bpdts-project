const { app } = require("../app");
const request = require("supertest")(app);
const chai = require("chai");
const { expect } = chai;
const nock = require("nock");
const { usersByCity, allUsers } = require("../test-data");

const baseUrl = "https://bpdts-test-app.herokuapp.com";

describe("GET users ", () => {
  describe("/users/:city", () => {
    it("Responds with an array of users listed as living in a given city", () => {
      nock(baseUrl)
        .get("/city/London/users")
        .reply(200, [...usersByCity])
        .get("/users")
        .reply(200, [...allUsers]);

      return request
        .get("/users/London")
        .expect(200)
        .then(({ body: { users } }) => {
          expect(users).to.be.an("array");
          expect(users.length).to.equal(4);
          expect(users[0]).to.contain.keys("email", "first_name", "latitude");
        });
    });
    it("ERROR - responds with status: 404 when no records are found for a city", () => {
      return request
        .get("/users/Birmingham")
        .expect(404)
        .then(({ body: { message } }) => {
          expect(message).to.equal("No records found, please check your input");
        });
    });
    it("ERROR - responds with status: 404 when invalid city is used", () => {
      return request
        .get("/users/1")
        .expect(404)
        .then(({ body: { message } }) => {
          expect(message).to.equal("No records found, please check your input");
        });
    });
  });
  describe("/users/:city?miles=X", () => {
    it("Responds with an array of users who are listed as living in given city & whose coordinates are within X miles of the city", () => {
      nock(baseUrl)
        .get("/city/London/users")
        .reply(200, [...usersByCity])
        .get("/users")
        .reply(200, [...allUsers]);

      return request
        .get("/users/London?miles=50")
        .expect(200)
        .then(({ body: { users } }) => {
          expect(users.length).to.equal(6);
          expect(users[0].first_name).to.equal("Mechelle");
        });
    });
  });
});
