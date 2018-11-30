var bs = require('browserify')
var minimist = require('minimist')
var path = require('path')
var wr = require('./')

var args = minimist(process.argv.slice(2))
var entries = args._.map(entry => path.resolve(entry))

var b = bs(entries)
b.plugin(wr)
b.bundle().pipe(process.stdout)
