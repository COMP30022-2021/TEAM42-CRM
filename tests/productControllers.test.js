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
//
// describe("Adding a new Product", () => {
//   test("Returns 200 status code ", async () => {
//     const response = await request.post("/product/create").send({
//       "product_id": 105,
//       "name": "pizza",
//       "unit_price": 0.99
//     });
//     expect(response.statusCode).toBe(200);
//   });
//   test("Returns JSON file", async () => {
//     const response = await request.post("/product/create").send({
//       "product_id": 100,
//       "name": "coke",
//       "unit_price": 0.99
//     });
//     expect(response.headers["content-type"]).toEqual(
//         expect.stringContaining("json")
//     );
//   });
// });
describe("Get All sold products", () => {
  test("Returns 200 status code ", async () => {
    const response = await request.get("/product/findAll");
    expect(response.statusCode).toBe(200);
  });
  test("Returns JSON file", async () => {
    const response = await request.get("/product/findAll")
    expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
    );
  });
});
