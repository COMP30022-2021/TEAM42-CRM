const { response } = require("express");
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



// describe("Add customer that already exists", () => {
//   test("Returns 200 status code", async () => {
//     const response = await request.post("/customer/create").send({
//       email: "l.hilde@outlook.com",
//     });
//     expect(response.statusCode).toBe(401);
//   });
// });

describe("Adding a customer and then deleting", () => {
  let addedResponse;
  test("Adding should respond with a 200 status code", async () => {
    const response = await request.post("/customer/create").send({
      "name": "TESTCUSTOMER1",
      "firstVisit": "1897-9-20",
      "birthday": "1897-9-20",
      "phone":"12345",
      "address":"test add",
      "businessID":455,
      "gender":1,
      "email": "TESTCUSTOMER@qq.com"
    });
    addedResponse = response;
    let addedID = addedResponse.body.customer.customerID;
    console.log(addedID);
    expect(response.statusCode).toBe(200);
  });
  test("Deletion gives statusCode 200", async () => {
    let addedID = addedResponse.body.customer.customerID;
    const response = await request.get("/customer/delete/" + addedID );
    console.log("Just deleted " + addedID);
    expect(response.statusCode).toBe(200);
  });
});

describe("Getting All Employees for Business 1", () => {
  test("should give status code 200 ", async () => {
    const response = await request.get("/customer/findAll1");
    expect(response.statusCode).toBe(200);
  });
});


