var builtin = require('browserify/lib/builtins')
var json = require('JSONStream')
var mdeps = require('module-deps')
var minimist = require('minimist')
var pack = require('browser-pack-flat')
var path = require('path')

var args = minimist(process.argv.slice(2))
var entries = args._
var md = mdeps({
  modules: builtin
})

md.pipe(json.stringify())
  .pipe(pack({ iife: false, sourceType: 'module' }))
  .pipe(process.stdout)

entries.forEach(entry => {
  md.write(path.resolve(entry))
})
md.end()
