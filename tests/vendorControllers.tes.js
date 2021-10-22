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
//     const response = await request.post("/vendor/create").send({
//       email: "mm@gmail.com",
//     });
//     expect(response.statusCode).toBe(401);
//   });
// });
