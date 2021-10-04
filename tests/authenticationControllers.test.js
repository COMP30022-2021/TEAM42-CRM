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

describe("Logging in with a username and password", () => {
  test("should respond with a 200 status code if login is valid", async () => {
    const response = await request.post("/auth/login").send({
      email: "test1@qq.com",
      password: "123",
    });
    expect(response.statusCode).toBe(200);
  });

  test("should be a JSON response", async () => {
    const response = await request.post("/auth/login").send({
      email: "test1@qq.com",
      password: "123",
    });
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });

  test("Should find an existing account in the database if valid", async () => {
    const response = await request.post("/auth/login").send({
      email: "test4@qq.com",
      password: "123",
    });
    expect(response.body.success).toEqual(true);
  });

  test("Should return Error Code 409 if password is incorrect", async () => {
    const response = await request.post("/auth/login").send({
      email: "test4@qq.com",
      password: "WRONG PASSWORD",
    });
    expect(response.statusCode).toBe(409);
  });

  test("Should respond with a status code of 409 if email not registered", async () => {
    const response = await request.post("/auth/login").send({
      email: "missingEmail",
      password: "missingPassword",
    });
    expect(response.statusCode).toBe(409);
  });
});

describe("Register a existing employee", () => {
  test("should respond with a 409 status code since register is done", async () => {
    const response = await request.post("/auth/register").send({
      name: "customer-test1",
      phone: "12345",
      address: "test add",
      businessID: 1,
      email: "mock_for_test",
      gender: 1,
      birthday: "1990-09-11",
      startDate: "1990-01-11",
      isManager: true,
      contactOnly: false,
    });
    expect(response.statusCode).toBe(409);
  });
});

describe("Changed the password of a existing employee", () => {
  test("should respond with a 200 status code if the password is changed", async () => {
    const response = await request.post("/auth/change/password").send({
      employeeID: 11,
      oldPassword: "admin",
      newPassword: "admin",
    });
    expect(response.statusCode).toBe(200);
  });

  test("should respond with a 409 status code if the password is wrong", async () => {
    const response = await request.post("/auth/change/password").send({
      employeeID: 11,
      oldPassword: "Wrong Password",
      newPassword: "admin",
    });
    expect(response.statusCode).toBe(409);
  });

  test("should respond with a 409 status code if employeeID is not existed", async () => {
    const response = await request.post("/auth/change/password").send({
      employeeID: -1,
      oldPassword: "Wrong password",
      newPassword: "admin",
    });
    expect(response.statusCode).toBe(409);
  });
});

describe("Delete an employee", () => {
  test("should respond with a 200 status code if employee is in the system", async () => {
    const response = await request.get("/auth/delete/0").send({});
    expect(response.statusCode).toBe(200);
  });
});
