
const supertest = require("supertest")
const app = require('../app.js')
const mysql = require('../config/mysql');


let request;

beforeAll((done)=>{
    request = supertest(app)
    done()
})

afterAll(async ()=>{
    await mysql.end()
})

describe("Logging in with a username and password", () => {
    test("should respond with a 200 status code if login is valid", async () => {
        const response = await request.post("/auth/login").send({
            email: "test1@qq.com",
            password: "123"
        })
        expect(response.statusCode).toBe(200)
    })

    test("should be a JSON response", async () => {
        const response = await request.post("/auth/login").send({
            email: "test1@qq.com",
            password: "123"
        })
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    })

    test("Should find an existing account in the database if valid", async () => {
        const response = await request.post("/auth/login").send({
            email: "test4@qq.com",
            password: "123"
        })
        expect(response.body.success).toEqual(true)
    })

    test("Should return Error Code 409 if password is incorrect", async () => {
        const response = await request.post("/auth/login").send({
            email: "test4@qq.com",
            password: "WRONG PASSWORD"
        })
        expect(response.statusCode).toBe(409)
    })

    test("Should respond with a status code of 409 if email not registered", async () => {
        const response = await request.post("/auth/login").send({
            email: "missingEmail",
            password: "missingPassword"
        })
        expect(response.statusCode).toBe(409)
    })
})

