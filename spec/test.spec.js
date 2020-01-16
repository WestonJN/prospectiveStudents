let visitor = require('../src/node.js')

describe('function save()', () => {
    let alice = new Visitor('Alice Smith', 12, '12/03/2019', '13:26', 'yey!', 'Weston')
    it('exists', () => {
        expect(alice.save()).toBeDefined();
    });
  
});