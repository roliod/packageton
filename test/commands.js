let assert = require('assert');
let commands = require('../src/config/commands.json');

describe('Commands', function() {
  describe('includes()', function() {
    it('should have the proper command list structure', function() {
      assert.equal(Object.keys(commands).includes('list', 'executor'), true);

      let commandList = commands.list;
      for (key in commandList) {
        let commandListKeys = Object.keys(commandList[key]);
        assert.equal(commandListKeys.includes('description'), true);
      }
    });
  });
});