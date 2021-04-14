// built in os module
const os = require('os');
// info about current user 
const user = os.userInfo();
// console.log(user)


// method returns the system uptime in seconds 
console.log(`The System uptime is ${os.uptime()} seconds`);

const currentOS = { // provides information about the current operating system s
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
    // provides system information 
}

console.log(currentOS)