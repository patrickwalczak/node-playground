/* 
Things you don’t have in Node.js
DOM APIs
document
window -- no browser, no window
navigator
history
location
Web APIs
localStorage, sessionStorage
alert, prompt, confirm
fetch (before Node 18 — now it exists natively)
WebSocket (only via libraries)
WebRTC (RTCPeerConnection, etc.)
FileReader, Blob, FormData (partial polyfills exist, but not built in)
CSS & rendering
No styles, no layout engine, no getComputedStyle
Events tied to the browser environment
onclick, onresize, etc. (only browser DOM events)


*/

// __dirname  - path to current directory, It’s a global variable in Node.js that gives you the absolute path of the directory where the current file is located.
// __filename - file name, It’s a global variable in Node.js that gives you the absolute path of the current file (including the file name).
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

/* 
File system access → fs module
Operating system info → os module
HTTP server/client → http, https modules
Process info → process global
Buffers for binary data → Buffer
*/

console.log(__dirname); // X:\Programming\Repositories\node-playground\01
console.log(__filename); // X:\Programming\Repositories\node-playground\01\02-globals.js
