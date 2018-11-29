import parse from './dist.js'

var tape = require('./node_modules/tape')

tape('run dist.js', t => {
  var out = parse('yep *yep*')

  t.strictEqual(out, '<p>yep <em>yep</em></p>\n')
  t.end()
})
