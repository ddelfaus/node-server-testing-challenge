const request = require("supertest")

const server = require("./server.js")


describe("server.js", function() {
    describe("environment", function() {
        it("environment should be testing" , function() {
            expect(process.env.DB_ENV).toBe("testing")
        })
    })
})