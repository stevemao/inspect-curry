function fToString(f) {
  return f.name ? f.name : f.toString();
}

function curry(fx) {
  var arity = fx.length;

  function f1() {
    var args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= arity) return fx.apply(null, args);

    function f2() {
      return f1.apply(null, args.concat(Array.prototype.slice.call(arguments, 0)));
    }

    f2.toString = function() {
      return fToString(fx)+'('+args.join(', ')+')';
    }
    return f2;
  };

  f1.toString = function() { return fToString(fx); }
  return f1;
}

module.exports = curry;
