let assert = require('assert');
let commands = require('../src/config/commands.json');

describe('Commands', function() {
  describe('includes()', function() {
    it('should have the proper command list structure', function() {
      let commandList = commands.list;
      for (key in commandList) {
        let commandListKeys = Object.keys(commandList[key]);
        assert.equal(commandListKeys.includes('shortcut', 'description'), true);
      }
    });
  });
});