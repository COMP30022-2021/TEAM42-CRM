
const supertest = require("supertest")
const app = require('../app.js')
const mysql = require('../config/mysql');
const redis = require("../config/redis");


let request;

beforeAll((done)=>{
    request = supertest(app)
    done()
})

afterAll(async () => {
    await mysql.end();
    await redis.end(true);
});

// describe("Signing up a Business twice and then deleting ", () => {
//     test("should respond with a 200 status code when creating new business ", async () => {
//         const response = await request.post("/business/signupbusiness").send({
//             "name": "TESTBUSINESS",
//             "dateEstablished": "1897-9-20",
//             "password": "123",
//             "email": "TESTBUSINESS@qq.com"
//         })
//         expect(response.statusCode).toBe(200);
//     })
//     test("should respond with a 409 status code if business name already registered ", async () => {
//         const response = await request.post("/business/signupbusiness").send({
//             "name": "TESTBUSINESS",
//             "dateEstablished": "1897-9-20",
//             "password": "123",
//             "email": "TESTBUSINESS@qq.com"
//         })
//         expect(response.statusCode).toBe(409);
//     })

describe("Adding a business twice and then deleting", () => {
    let addedResponse;
    test("Adding should respond with a 200 status code", async () => {
        const response = await request.post("/business/signupbusiness").send({
            "name": "TESTINGBUSINESS",
            "dateEstablished": "1897-9-20",
            "password": "123",
            "email": "TESTINGBUSINESS@qq.com"
        });
        addedResponse = response;
        expect(response.statusCode).toBe(200);
    });

    test("Adding should respond with a 200 status code", async () => {
        const response = await request.post("/business/signupbusiness").send({
            "name": "TESTINGBUSINESS",
            "dateEstablished": "1897-9-20",
            "password": "123",
            "email": "TESTINGBUSINESS@qq.com"
        });
        expect(response.statusCode).toBe(409);
    });

    test("Deletion gives statusCode 200", async () => {
        let addedID = addedResponse.body.business.businessID;
        const response = await request.get("/business/delete/" + addedID );
        console.log("Just deleted " + addedID);
        expect(response.statusCode).toBe(200);
    });
});