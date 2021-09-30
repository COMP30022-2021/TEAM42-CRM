const { response } = require("express");
const supertest = require("supertest");
const app = require("../app.js");
const mysql = require("../config/mysql");

let request;

beforeAll((done) => {
  request = supertest(app);
  done();
});

afterAll(async () => {
  await mysql.end();
});

// describe("Add customer that already exists", () => {
//   test("Returns 200 status code", async () => {
//     const response = await request.post("/customer/create").send({
//       email: "l.hilde@outlook.com",
//     });
//     expect(response.statusCode).toBe(401);
//   });
// });
