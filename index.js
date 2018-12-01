var babelify = require('babelify')
var pack = require('browser-pack-flat/plugin')

module.exports = function apply (b, opts) {
  opts = opts || {}
  opts = Object.assign(opts, {
    iife: false,
    sourceType: 'module'
  })

  pack(b, opts)

  b.transform(babelify, {
    only: b._options.entries,
    plugins: [ ['transform-commonjs', { exportsOnly: true }] ]
  })
  b.on('reset', rmSyntax)
  rmSyntax()

  function rmSyntax () {
    var syntax = b.pipeline.get('syntax')
    syntax.splice(0, syntax.length)
  }
}
