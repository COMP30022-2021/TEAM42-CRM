const supertest = require("supertest");
const app = require("../app.js");
const mysql = require("../config/mysql");
const redis = require("../config/redis");

let request;

beforeAll((done) => {
    request = supertest(app);
    done();
});

afterAll(async () => {
    await mysql.end();
    await redis.end(true);
});

describe("Getting the number of transactions", () => {
    test("Returns 200 status code ", async () => {
        const response = await request.get("/transaction/getNumberOfTransactions");
        expect(response.statusCode).toBe(200);
    });
    test("Returns JSON file", async () => {
        const response = await request.get("/transaction/getNumberOfTransactions");
        expect(response.headers["content-type"]).toEqual(
            expect.stringContaining("json")
        );
    });
});

describe("Getting the number of visitors", () => {
    test("Returns 200 status code ", async () => {
        const response = await request.get("/transaction/getNumberOfVisitors");
        expect(response.statusCode).toBe(200);
    });
    test("Returns JSON file", async () => {
        const response = await request.get("/transaction/getNumberOfVisitors");
        expect(response.headers["content-type"]).toEqual(
            expect.stringContaining("json")
        );
    });
});

describe("Getting the the total revenue by date ", () => {
    test("Returns 200 status code ", async () => {
        const response = await request.post("/transaction/getTotalRevenueByDate").send({
            "start_date": "2019-1-1",
            "end_date": "2019-10-1"
        });
        expect(response.statusCode).toBe(200);
    });
    test("Returns JSON file", async () => {
        const response = await request.post("/transaction/getTotalRevenueByDate").send({
            "start_date": "2019-1-1",
            "end_date": "2019-10-1"
        });
        expect(response.headers["content-type"]).toEqual(
            expect.stringContaining("json")
        );
    });
});

describe("Getting One year revenue by quarter in Year ", () => {
    test("Returns 200 status code ", async () => {
        const response = await request.get("/transaction/getOneYearRevenueByQuarterInYear2021") ;
        expect(response.statusCode).toBe(200);
    });
    test("Returns JSON file", async () => {
        const response = await request.get("/transaction/getOneYearRevenueByQuarterInYear2021") ;
        expect(response.headers["content-type"]).toEqual(
            expect.stringContaining("json")
        );
    });
});

describe("Getting One Customer Transaction History ", () => {
    test("Returns 200 status code ", async () => {
        const response = await request.get("/transaction/getOneCustomerTransactionHistory7") ;
        expect(response.statusCode).toBe(200);
    });
    test("Returns JSON file", async () => {
        const response = await request.get("/transaction/getOneCustomerTransactionHistory7") ;
        expect(response.headers["content-type"]).toEqual(
            expect.stringContaining("json")
        );
    });
});