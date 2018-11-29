var marked = require('marked')

export default function parse () {
  return marked.apply(this, arguments)
}
