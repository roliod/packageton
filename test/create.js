let fs = require('fs');
let shell = require('shelljs');
let assert = require('chai').assert;

describe('Create Command', function() {
  describe('create()', function() {
    it('should be able to create a skeleton', function() {
      let res = shell.exec('./src/cli.js create php', {async:true});
      res.stdout.on('data', function(data) {
        assert.isTrue(fs.existsSync('php-skeleton'));
        assert.include(data, 'Done');
        shell.rm('-rf', 'php-skeleton');
      })
    });
  });
  describe('create()', function() {
    it('should be able to create a skeleton with a specific folder name', function() {
      let res = shell.exec('./src/cli.js create php -f myfolder', {async:true});
      res.stdout.on('data', function(data) {
        assert.isTrue(fs.existsSync('myfolder'));
        assert.include(data, 'Done');
        shell.rm('-rf', 'myfolder');
      })
    });
  });
});