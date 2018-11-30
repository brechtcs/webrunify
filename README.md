# webrunify

Bundle a CommonJS module and its dependencies into a single standard ECMAScript module.

## Usage

The simplest way to use `webrunify` is through the command line. To bundle `index.js` and all its dependencies into an ECMAScript module, simply use these commands:

```sh
npm install -g webrunify
webrunify index.js > bundle.js
```

This example does the same thing using the JavaScript API:

```js
var bs = require('browserify')
var fs = require('fs')
var wr = require('webrunify')

var out = fs.createWriteStream('./bundle.js')
var b = bs('./index.js')
b.plugin(wr)
b.bundle().pipe(out)

```

## License

Apache-2.0
