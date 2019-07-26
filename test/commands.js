var assert = require('assert');
var commands = require('../src/config/commands.json');

describe('Commands', function() {
  describe('includes()', function() {
    it('should have the proper command list structure', function() {
      var commandList = commands.list;
      for (key in commandList) {
        var commandListKeys = Object.keys(commandList[key]);
        assert.equal(commandListKeys.includes('shortcut', 'description'), true);
      }
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});