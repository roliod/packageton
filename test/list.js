let shell = require('shelljs');
let assert = require('chai').assert;

describe('List Command', function() {
  describe('list()', function() {
    it('should be able to list all the available skeletons', function() {
      let response = shell.exec('./src/cli.js list');

      assert.include(response, 'Available skeletons:');
    });
  });
});