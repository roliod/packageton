let shell = require('shelljs');
let assert = require('chai').assert;

describe('Create Command', function() {
  describe('create()', function() {
    it('should be able to create a skeleton', function() {
      let res = shell.exec('./src/cli.js create php', {async:true});
      res.stdout.on('data', function(data) {
        assert.include(data, 'Done');
        shell.rm('-rf', 'php-skeleton');
      })
    });
  });
});