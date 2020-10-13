var assert = require('assert');

var getenv = require('../lib/getenv');

var tests = {};

tests['getenv.disableErrors() should disable any errors'] = function() {
  getenv.disableErrors();
  assert.strictEqual(getenv.string('url', 'http://localhost'), 'http://localhost');
  assert(getenv.string('url'), undefined);
};

tests['getenv.enableErrors() should enable errors'] = function () {
  getenv.enableErrors();
  assert.throws(function() {
    getenv.string('url');
  });
  assert.strictEqual(getenv.string('url', 'http://localhost'), 'http://localhost');
}

Object.keys(tests).forEach(function(key) {
  console.log('Test: %s', key);
  tests[key]();
});
