// Path Module: It allows use to interact with file paths easily
const path = require('path')

// return the platform specific separator
console.log(path.sep)
// the join method joins a sequence of path segments using 
// the platform specific separator as the limiter and second
// thing it does it returns a normalized resulting path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)
// get the basename of the path, it means it returns the last
// portion  of the path
const base = path.basename(filePath)
console.log(base)
// It returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)