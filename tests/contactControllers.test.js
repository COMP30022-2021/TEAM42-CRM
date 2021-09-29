
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

describe("Getting all contacts for business_id 1", () => {
    test("Returns 200 status code", async () => {
        const response = await request.get("/contact/1")
        expect(response.statusCode).toBe(200)
    })

})
