import join from './dist.js'
import xtend from './xtend.js'

var path = join('one', 'two', 'three')
console.assert(path === 'one/two/three', 'path join')

var obj = xtend({ one: true }, { two: false })
console.assert(obj.one === true, 'obj first prop')
console.assert(obj.two === false, 'obj second prop')
console.assert(obj.no === undefined, 'obj no prop')
console.log('Tests finished')
