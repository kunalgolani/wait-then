# wait-then
Utility function that returns a promise that resolves after x ms

Can be used as a yieldable with [co](https://github.com/tj/co) or in [koa](koajs.com).

Basic example:

```javascript
var wait = require('wait-then');

wait(2000).then(function() {
    console.log('This is logged after 2 seconds');
});
```

Example with `co`:

```javascript
var wait = require('wait-then'),
    co = require('co');

co(function *() {
    yield wait(1000);
    console.log('This is logged after 1 second');
});
```

The generator function passed into `co`  can be yielded in a middleware in `koa`.

Note: This relies on the existence of a [global `Promise` object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) as defined in the ECMAScript 6 (Harmony) proposal.