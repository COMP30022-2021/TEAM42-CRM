
const supertest = require("supertest")
const app = require('./app.js')
const http = require('http')

describe("POST /auth/login", () => {
  describe("given a username and password", () => {
    let server;
    let request;
    beforeAll((done)=>{
      server = http.createServer(app)
      server.listen(done)
      request = supertest(server)
    })
    afterAll((done)=>{
      server.close(done)
    })
    test("should respond with a 200 status code", async (done) => {
      jest.setTimeout(30000);

      const response = await request.post("/auth/login").send({
        email: "test1@qq.com",
        password: "123"
      })
      expect(response.statusCode).toBe(200)
      done();
    })

    test("should be a JSON response", async (done) => {
      jest.setTimeout(30000);

      const response = await request.post("/auth/login").send({
        email: "test1@qq.com",
        password: "123"
      })
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
      done();
    })

    test("Should find an existing account in the database", async (done) => {
      jest.setTimeout(30000);

      const response = await request.post("/auth/login").send({
        email: "test4@qq.com",
        password: "123"
      })
      expect(response.body.success).toEqual(true)
      done();
    })

    test("Should return Error Code 409 if password is incorrect", async (done) => {
      jest.setTimeout(30000);
      const response = await request.post("/auth/login").send({
        email: "test4@qq.com",
        password: "WRONG PASSWORD"
      }) 
      expect(response.statusCode).toBe(409)
      done();
    })

    test("Warn about attempt to log in with incorrect email", async (done) => {
      jest.setTimeout(30000);
      const response = await request.post("/auth/login").send({
        email: "thisemaildoesnotexist@qq.com",
        password: "123"
      }) 
      expect(response.body.success).toEqual(false)
      done();
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

afterAll(async (done) => { await mysqlPool.end(); done() })
