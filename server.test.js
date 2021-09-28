
const request = require("supertest")
const app = require('./server.js')

describe("POST /users", () => {
  describe("given a username and password", () => {

    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/auth/login").send({
        email: "test1@qq.com",
        password: "123"
      })
      expect(response.statusCode).toBe(200)
    })

    test("should be a JSON response", async () => {
      const response = await request(app).post("/auth/login").send({
        email: "test1@qq.com",
        password: "123"
      })
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    })
    test("Should find an existing account in the database", async () => {
      const response = await request(app).post("/auth/login").send({
        email: "test4@qq.com",
        password: "123"
      }) 
      expect(response.body.success).toEqual(true)
    })
    test("Should return Error Code 409 if password is incorrect", async () => {
      const response = await request(app).post("/auth/login").send({
        email: "test4@qq.com",
        password: "WRONG PASSWORD"
      }) 
      expect(response.statusCode).toBe(409)
    })
    
  })

  // // describe("when the username and password is missing", () => {
  // //   test("should respond with a status code of 400", async () => {
  // //     const bodyData = [
  // //       {username: "username"},
  // //       {password: "password"},
  // //       {}
  // //     ]
  // //     for (const body of bodyData) {
  // //       const response = await request(app).post("/users").send(body)
  // //       expect(response.statusCode).toBe(400)
  // //     }
  // //   })
  // })

})