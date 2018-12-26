var bs = require('browserify')
var fs = require('fs')
var minimist = require('minimist')
var path = require('path')
var wr = require('./')

var args = minimist(process.argv.slice(2))
var entries = args._.map(entry => {
  var file = path.resolve(entry)

  if (!fs.existsSync(file)) {
    file = require.resolve(entry)
  }
  return file
})

var b = bs(entries)
b.plugin(wr)
b.bundle().pipe(process.stdout)
