let visitor = require('../src/node')
// let load = require('../src/load_details')
describe('function save()', function() {
    let alice = new visitor.Visitor('Alice Cooper', 12, '12/03/2019', '13:26', 'yey!', 'Weston')
    //tests if the save function is defined
    it('exists', async function() {
        expect(alice.save()).toBeDefined()
    })
    //tests if the file is created
    it('creates named files', async function() {
        aliceFile = require('../src/node')
        expect(aliceFile).toBeDefined()
    })
})