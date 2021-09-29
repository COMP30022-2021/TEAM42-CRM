
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

describe("Signing up a Business", () => {
    test("should respond with a 409 status code if business name already registered ", async () => {
        const response = await request.post("/business/signupbusiness").send({
            "name": "unimelb",
            "dateEstablished": "1897-9-20",
            "password": "123",
            "email": "unimelb@qq.com"
        })
        expect(response.statusCode).toBe(409)
    })
})
