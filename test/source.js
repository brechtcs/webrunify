var path = require('./path')

module.exports = function join () {
  return path.join.apply(this, arguments)
}
