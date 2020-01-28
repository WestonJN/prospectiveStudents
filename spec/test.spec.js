let visitor = require('../src/visitor_details')
const fs = require('fs');

describe('function save()', function() {
    let alice = new visitor.Visitor('Alice Cooper', 12, '12/03/2019', '13:26', 'yey!', 'Weston')
    //tests if the save function is defined
    it('exists', async function() { 
        expect(alice.save()).toBeDefined()
    });
    //tests if the file is created
    it('creates named files', async function() {
        aliceFile = require('../visitor_alice_cooper.json')
        expect(aliceFile).toBeDefined()
    });
    //it reads the file
    it("should read the contents of the file", () => {
        fs.readFile('visitor_alice_cooper.json', 'UTF8', (err, data) => {
            if (err) { throw err }
            else {
                let Data = data
                expect(Data).toEqual(JSON.stringify(alice, null, 2))
            }
        });
    });
}); 