# Problem

```js
var add = curry(function add(x, y){ return x + y });
var map = curry(function map(f, xs){ return xs.map(f) });

var inc = add(1);
```

When trying to `console.log` a function we’re presented with the guts of some internal curry implementation that tells us nothing.

# Before

```js
console.log(inc)
// function f2() {
//   return f1.apply(null, args.concat(Array.prototype.slice.call(arguments, 0)));
// }
```

# After

```js
console.log(inc)
// map(add(1))
```

See https://medium.com/@drboolean/debugging-functional-7deb4688a08c

# Related

- [inspect-compose](https://github.com/stevemao/inspect-compose)
- [composition-trace](https://github.com/stevemao/composition-trace)
