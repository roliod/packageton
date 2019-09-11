let assert = require('chai').assert;
let validator = require('../src/validator.js');
let skeletons = require('../src/config/skeletons.json');

describe('Validator', function() {
  describe('skeletons()', function() {
    it('should be able to validate if the structure exists', function() {
      let skeletonList = skeletons.list;
      for (let key in skeletonList) {
        assert.equal(true, validator.skeleton(key));
      }

      assert.throws(
          () => validator.skeleton('invalid-skeleton'), 
          Error, 
          "We currently do not have support for `invalid-skeleton` skeleton"
        );
    });
  });
});