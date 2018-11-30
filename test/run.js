import join from './dist.js'

var tape = require('./node_modules/tape')

tape('run dist.js', t => {
  var out = join('one', 'two', 'three')

  t.strictEqual(out, 'one/two/three')
  t.end()
})
