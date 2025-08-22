/*

📦 os module in Node.js
The os module is a built-in (core) module in Node.js.
It provides information about the operating system where your Node.js app is running.
No need to install anything → just import or require it.

*/

import os from 'os';

console.log('Platform:', os.platform()); // e.g. 'win32', 'linux', 'darwin'
console.log('CPU architecture:', os.arch()); // e.g. 'x64'
console.log('Free memory:', os.freemem()); // in bytes
console.log('Total memory:', os.totalmem()); // in bytes
console.log('Uptime (seconds):', os.uptime()); // Returns the system uptime in seconds (how long the machine has been running since the last reboot).
console.log('User info:', os.userInfo());

/*
os.userInfo()

{
  uid: -1,
  gid: -1,
  username: 'Patrick',
  homedir: 'C:\\Users\\Patrick',
  shell: null
}
*/

/*

os.platform() → OS platform ('darwin', 'win32', 'linux')

os.arch() → CPU architecture ('x64', 'arm', etc.)

os.cpus() → info about CPU cores

os.totalmem() → total system memory in bytes

os.freemem() → free system memory in bytes

os.uptime() → system uptime in seconds

os.hostname() → host name of the machine

os.type() → OS name ('Linux', 'Windows_NT', 'Darwin')

os.userInfo() → info about the current user

*/

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
};
