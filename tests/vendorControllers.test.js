
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
// Tests To be Confirmed
// describe("Adding vendor", () => {
//     // test("Returns 401 status code if vendor already exists", async () => {
//     //     const response = await request.post("/vendor/create").send({INSERT JSON HERE)
//     //     )
//     //     expect(response.statusCode).toBe(401)
//     // })
//
// })
