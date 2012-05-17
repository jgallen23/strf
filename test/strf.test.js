var strf = require('../');
var assert = require('assert');

suite('strf', function() {
  test('should replace a single item', function() {
    var str = 'Hello {0}';
    assert.equal('Hello Bob', strf(str, 'Bob'));
  });
  test('should replace multiple items', function() {
    var str = 'Hello {0} {1}';
    assert.equal('Hello Bob Barker', strf(str, 'Bob', 'Barker'));
  });
  test('replace named item', function() {
    var str = 'Hello {name}';
    assert.equal('Hello Bob', strf(str, { name: 'Bob' }));
  });
  test('replace multiple named items', function() {
    var str = 'Hello {first} {last}';
    assert.equal('Hello Bob Barker', strf(str, { first: 'Bob', last: 'Barker' }));
  });
  test('missing key', function() {
    var str = 'Hello {0} {1}';
    assert.throws(function() { strf(str, 'Bob'); });
  });
  test('missing key by name', function() {
    var str = 'Hello {first} {last}';
    assert.throws(function() { strf(str, { first: 'Bob' }); });
  });
  test('blank key shouldn\'t throw error', function() {
    var str = 'Hello {first} {last}';
    assert.doesNotThrow(function() { strf(str, { first: 'Bob', last: '' }); });
  });

  test('nested keys', function() {
    var str = 'Hello {name.first}';
    assert.equal('Hello Bob', strf(str, { name: { first: 'Bob', last: 'Barker' } }));
  });

  test('mixed nested keys and non', function() {
    var str = 'Hello {name.first}, my name is {otherName}';
    assert.equal('Hello Bob, my name is Jane', strf(str, { name: { first: 'Bob', last: 'Barker' }, otherName: 'Jane' }));
  });
});
