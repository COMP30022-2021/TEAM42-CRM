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

describe("Getting all contacts for business_id 1", () => {
  test("Returns 200 status code", async () => {
    const response = await request.get("/contact/1");
    expect(response.statusCode).toBe(200);
  });
  test("Returns json file", async () => {
    const response = await request.get("/contact/1");
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });
});

describe("Getting all contacts for business_id 1 sorted by name", () => {
    test("Returns 200 status code", async () => {
      const response = await request.get("/contact/1?sort=name");
      expect(response.statusCode).toBe(200);
    });
    test("Returns json file", async () => {
      const response = await request.get("/contact/1?sort=name");
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });

describe("Try to get contacts for non existent business", () => {
  test("Return empty list", async () => {
    const response = await request.get("/contact/-1");
    expect(response.body.contacts).toStrictEqual([]);
  });
  test("Return empty list", async () => {
    const response = await request.get("/contact/-1");
    expect(response.statusCode).toBe(200);
  });
});
