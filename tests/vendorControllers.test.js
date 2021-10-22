const supertest = require("supertest");
const app = require("../app.js");
const mysql = require("../config/mysql");
const redis = require("../config/redis");

let request;

beforeAll((done) => {
  request = supertest(app);
  done();
});

afterAll(async () => {
  await mysql.end();
  await redis.end(true);
});


describe("Adding a vendor and then deleting", () => {
  let addedResponse;
  test("Adding should respond with a 200 status code", async () => {
    const response = await request.post("/vendor/create").send({
      "name": "VENDORTEST",
      "phone":"12345",
      "address":"test add",
      "businessID":455,
      "email": "VENDORTEST@qq.com",
      "gender":1,
      "rate": "test rate",
      "tags": "test tags"
    });
    addedResponse = response;
    expect(response.statusCode).toBe(200);
  });

  test("Deletion gives statusCode 200", async () => {
    let addedID = addedResponse.body.vendor.vendorID;
    const response = await request.get("/vendor/delete/" + addedID );
    console.log("Just deleted " + addedID);
    expect(response.statusCode).toBe(200);
  });
});

describe("Getting All Vendors for Business 1", () => {
  test("should give status code 200 ", async () => {
    const response = await request.get("/vendor/findAll1");
    expect(response.statusCode).toBe(200);
  });
});