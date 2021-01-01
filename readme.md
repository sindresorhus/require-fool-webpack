# require-fool-webpack

> Use dynamic `require()` without webpack finding out

Because [webpack is super annoying](https://github.com/webpack/webpack/issues/196). 💩

You need to supply it an absolute path.


## Install

```
$ npm install require-fool-webpack
```


## Usage

### Before

```js
const foo = require(getPath());
```

Warning from webpack:

```
WARNING in ./app/node_modules/conf/index.js
1:33-43 Critical dependency: the request of a dependency is an expression
 @ ./app/node_modules/conf/index.js
 @ ./app/node_modules/electron-store/index.js
 @ ./app/config.js
 @ ./app/renderer/index.js
```

### After

```js
const requireFoolWebpack = require('require-fool-webpack');
const foo = requireFoolWebpack(getPath());
```

No warning! \o/


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
