let assert = require('chai').assert;
let skeletons = require('../src/config/skeletons.json');

describe('Skeletons', function() {
  describe('includes()', function() {
    it('should have the proper skeleton list structure', function() {
      assert.equal(Object.keys(skeletons).includes('list'), true);

      let skeletonList = skeletons.list;
      for (let key in skeletonList) {
        let skeletonListKeys = Object.keys(skeletonList[key]);
        assert.equal(skeletonListKeys.includes('repo'), true);
      }
    });
  });
});