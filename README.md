# bpdts-project

An API which calls an external API to return people who are listed as either living in a given city, or whose current co-ordinates are within X miles of that city.

Currently this API only returns data for London. If/when the external API includes more cities, this API can easily be updated to accommodate those.

## Dependencies

- Express
- Axios
- Geolib
- Nodemon

## Dev Dependencies

- Chai
- Mocha
- Nock
- Supertest

The API can be viewed on https://bpdts-test.herokuapp.com/

## Getting Started
Follow these instructions to run the application locally.

## Step 1 - Clone the repo

Clone this repo;

```bash
git clone https://github.com/clo2202/bpdts-project
```

## Step 2 - Getting started with your project

Navigate to the root of the repo and ensure you have downloaded all of the dependencies using the following command;

```bash
npm install

# This will download all the dependencies required to work with this project.
```

Familiarise yourself with the npm scripts that have been provided.

## Running the tests

To run the tests simply enter the following command;

```bash
npm run test

# Testing has been built using Mocha, Chai & Nock. They are to check the endpoints are retrieving 
# the correct data, in the expected format. For example . . .

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
)};

```

```bash
npm run test-utils

# This will run tests just for the util functions used within the application.
```

## Deployment

```bash
npm run start

# This will connect you to localhost:9090
```

## Endpoints 

```postman 
GET /
```

**Responds with**
* JSON describing the available endpoints.

```postman
GET /users/:city
```

**Responds with**
* an array of user objects who are listed as living in a given city, each of which contain the following properties;
    * ```id```
    * ```first-name```
    * ```last_name```
    * ```email```
    * ```ip_address```
    * ```latitude```
    * ```longitude```


```postman
GET /users/:city?miles=x
```

**Responds with**
* an array of user objects who are either listed as living in a given city, or who are located within X miles of the city. Each object contains the same properties as above.  

## Authors

- **Chloe Williams** - [clo2202](https://github.com/clo2202)
