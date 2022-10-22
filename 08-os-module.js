// OS Module: the os module we built in module provides
// many useful properties and methods for interacting
// with operating system as well as the server

const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)


const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)