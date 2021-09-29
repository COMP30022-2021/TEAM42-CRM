
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
// Tests To be Confirmed (business id)
// describe("Getting all customers for business_id 1", () => {
//     // test("Returns 200 status code", async () => {
//     //     const response = await request.get("/customers/all")
//     //     expect(response.statusCode).toBe(200)
//     // })
//
// })