const curry = require('./');

var add = curry(function add(x, y){ return x + y });
var map = curry(function map(f, xs){ return xs.map(f) });
var head = function(xs){ return xs[0] };

test('inc', () => {
  var inc = add(1);

  expect(inc.toString()).toBe('add(1)');
});

test('incAll', () => {
  var incAll = map(add(1));

  expect(incAll.toString()).toBe('map(add(1))');
});
