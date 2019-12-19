const request = require("supertest")
const server = require("../api/server")
const Users = require("../users/users-model")
const db = require("../database/dbConfig")



describe('server', function() {
    describe('Post', function() {
        it('500 should return since not inserting things', function (){
            return request(server)
            .post('/api/auth/register')
            .then(res => {
                expect(res.status).toBe(500)
            })
        })
    })

    describe('Post', function() {
        it('404 should return since wrong request', function (){
            return request(server)
            .get('/api/auth/register')
            .then(res => {
                expect(res.status).toBe(404)
            })
        })
    })

    // describe('Post', function() {
    //     it('404 should return since wrong request', function (){
    //         return request(server)
    //         .post('/api/auth/register')
           
    //         .then(res => {
    //             expect(res.status).toBe(404)
    //         })
    //     })
    // })
})

// testing adding dat to database

describe("user modal", function() {
    beforeEach(async () => {
        await db("users").truncate();
    });

    describe("insert()", function() {
        it("should add the user to the database", async function() {
          
          await Users.insert({ name: "dav" , password: "dav"});
          const users = await db("users");
          expect(users).toHaveLength(5);
        });
      });
    });
