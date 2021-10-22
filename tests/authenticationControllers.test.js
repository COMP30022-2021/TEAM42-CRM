const supertest = require("supertest");
const app = require("../app.js");
const mysql = require("../config/mysql");
const redis = require("../config/redis")
let request;

beforeAll((done) => {
  request = supertest(app);
  done();
});

afterAll(async () => {
  await mysql.end();
  await redis.end(true);
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

  test("should respond with a 409 status code if employeeID is not in the system", async () => {
    const response = await request.post("/auth/change/password").send({
      employeeID: -1,
      oldPassword: "Wrong password",
      newPassword: "admin",
    });
    expect(response.statusCode).toBe(409);
  });
});

describe("Register many employees twice, and then delete", () => {
  let addedResponseManager;
  test("Adding Manager should respond with a 200 status code", async () => {
    const response = await request.post("/auth/register").send({
      "name": "TESTMANAGER",
      "phone":"12345",
      "address":"test add",
      "businessID":455,
      "email": "TESTMANAGER@qq.com",
      "gender":1,
      "birthday": "1990-09-11",
      "startDate": "1990-01-11",
      "isManager":true,
      "contactOnly":true
    });
    addedResponseManager = response;
    expect(response.statusCode).toBe(200);
  });

  test("Adding Manager again should give 409 error code", async () => {
    const response = await request.post("/auth/register").send({
      "name": "TESTMANAGER",
      "phone":"12345",
      "address":"test add",
      "businessID":455,
      "email": "TESTMANAGER@qq.com",
      "gender":1,
      "birthday": "1990-09-11",
      "startDate": "1990-01-11",
      "isManager":true,
      "contactOnly":true
    });
    expect(response.statusCode).toBe(409);
  });

  test("Deleting Manager gives statusCode 200", async () => {
    let addedIDManager = addedResponseManager.body.employee.employeeID;
    const response = await request.get("/auth/delete/" + addedIDManager );
    console.log("Just deleted " + addedIDManager);
    expect(response.statusCode).toBe(200);
  });


  let addedResponseEmployeeContact;
  test("Adding employee without account should respond with a 200 status code", async () => {
    const response = await request.post("/auth/register").send({
      "name": "TESTEMPLOYEECONTACT",
      "phone":"12345",
      "address":"test add",
      "businessID":455,
      "email": "TESTEMPLOYEECONTACT@qq.com",
      "gender":1,
      "birthday": "1990-09-11",
      "startDate": "1990-01-11",
      "isManager":false,
      "contactOnly":true
    });
    addedResponseEmployeeContact = response;
    expect(response.statusCode).toBe(200);
  });

  test("Deleting Employee gives statusCode 200", async () => {
    let addedEmployeeContactID = addedResponseEmployeeContact.body.employee.employeeID;
    const response = await request.get("/auth/delete/" + addedEmployeeContactID );
    console.log("Just deleted " + addedEmployeeContactID);
    expect(response.statusCode).toBe(200);
  });

  let addedResponseEmployeeAccount;
  test("Adding employee with account should respond with a 200 status code", async () => {
    const response = await request.post("/auth/register").send({
      "name": "TESTEMPLOYEEACCT",
      "phone":"12345",
      "address":"test add",
      "businessID":455,
      "email": "TESTEMPLOYEEACCT@qq.com",
      "gender":1,
      "birthday": "1990-09-11",
      "startDate": "1990-01-11",
      "isManager":false,
      "contactOnly":false
    });
    addedResponseEmployeeAccount = response;
    expect(response.statusCode).toBe(200);
  });



  test("Deleting Employee gives statusCode 200", async () => {
    let addedEmployeeAccountID = addedResponseEmployeeAccount.body.employee.employeeID;
    const response = await request.get("/auth/delete/" + addedEmployeeAccountID );
    console.log("Just deleted " + addedEmployeeAccountID);
    expect(response.statusCode).toBe(200);
  });

});


describe("Getting Number of Employees for Business 1", () => {
  test("should give status code 200 ", async () => {
    const response = await request.get("/auth/getNumberOfEmployees1");
    expect(response.statusCode).toBe(200);
  });
});

describe("Getting Number of Employees for Business 1", () => {
  test("should give status code 200 ", async () => {
    const response = await request.get("/auth/getNumberOfEmployees1");
    expect(response.statusCode).toBe(200);
  });
});

// describe("Getting Number of Employees for Business 1", () => {
//   test("should give status code 200 ", async () => {
//     const response = await request.get("/auth/getNumberOfEmployees1");
//     expect(response.statusCode).toBe(200);
//   });
// });


describe("Getting All Employees for Business 1", () => {
  test("should give status code 200 ", async () => {
    const response = await request.get("/auth/findAll1");
    expect(response.statusCode).toBe(200);
  });
});

