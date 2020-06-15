const { app } = require("../app");
const request = require("supertest")(app);
const chai = require("chai");
const { expect } = chai;

describe("/users/:city", () => {
  it("GET responses with status: 200 and an array of users listed as living in London", () => {
    return request.get("/users/London").expect(200);
  });
});
