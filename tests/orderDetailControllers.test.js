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

describe("Get Product Q Revenue in a Year", () => {
  test("Returns 200 status code ", async () => {
    const response = await request.post("/order/getProductQuarterlyRevenueInYear").send({
      "product_id": 1,
      "currentYear": 2019
    });
    expect(response.statusCode).toBe(200);
  });
  test("Returns JSON file", async () => {
    const response = await request.post("/order/getProductQuarterlyRevenueInYear").send({
      "product_id": 1,
      "currentYear": 2019
    });
    expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
    );
  });
});

describe("Get All sold products", () => {
  test("Returns 200 status code ", async () => {
    const response = await request.post("/order/getAllSoldProducts").send({
      "sortOrder": "DESC",
      "limit": 3
    });
    expect(response.statusCode).toBe(200);
  });
  test("Returns JSON file", async () => {
    const response = await request.post("/order/getAllSoldProducts").send({
      "sortOrder": "DESC",
      "limit": 3
    });
    expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
    );
  });
});
