
const request = require("supertest")
const server = require("../api/server")


describe('server', function() {
    describe('del', function() {
        it('404 should return since wrong path', function (){
            return request(server)
            .delete('/api/auth/register')
            .then(res => {
                expect(res.status).toBe(404)
            })
        })
    })


    describe('del', function() {
        it('500 should return since not inserting things', function (){
            return request(server)
            .delete('/api/users/1')
            .then(res => {
                expect(res.status).toBe(500)
            })
        })
    })
})