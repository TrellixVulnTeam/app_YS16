const path = require('path')

/*
The path module provides a lot of very useful functionality to access and interact with the
file system.

This module provides path.sep which provides the path segment separator (\), and path.delimiter
which provides the path delimiter (;).
*/


//path.basename()
const pathBase = () => {
  require('path').basename('/test/something')
  require('path').basename('/test/something.txt') //something.txt
  require('path').basename('/test/something.txt', '.txt') //something
}


//path.dirname(), Return the directory part of a path:
const pathDir = () => {
  require('path').dirname('/test/something') // /test
  require('path').dirname('/test/something/file.txt') // /test/something
}


//path.extname(), Return the extension part of a path
const extnames = () => {
  require('path').extname('/test/something') // ''
  require('path').extname('/test/something/file.txt') // '.txt'

}

/*
path.format()
Returns a path string from an object, This is the opposite of path.parse
*/

const pathFormat = () => {
  require('path').format({ dir: 'C:\\Users\\joe', base: 'test.txt' })
}


//path.isAbsolute(), Returns true if it's an absolute path
const absolutes = () => {
  require('path').isAbsolute('/test/something') // true
  require('path').isAbsolute('./test/something') // false
}


//path.join(), Joins two or more parts of a path.
const joins = () => {
  const name = 'joe'
  require('path').join('/', 'users', name, 'notes.txt') //'/users/joe/notes.txt'

}

module.exports = {
  pathBase,
  pathDir,
  extnames,
  pathFormat,
  absolutes,
  joins
}



