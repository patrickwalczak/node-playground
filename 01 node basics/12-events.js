/* 

📦 events module in Node.js
The events module is a built-in Node.js module.
It lets you work with the event-driven architecture of Node.js.
The key class is EventEmitter — objects that can emit events and let other parts of the code listen (subscribe) to those events.

.on(event, listener) → attach a listener (subscribe).
.once(event, listener) → listener runs only once.
.emit(event, ...args) → trigger (publish) the event.
.removeListener(event, listener) / .off() → remove listener.
.removeAllListeners(event) → clear all listeners for an event.

✅ Reasons we use it in backend

Handle multiple clients at once
Example: an HTTP server doesn’t wait for one request to finish before starting another.
Instead, it emits an "request" event each time a client connects.
Efficient I/O
Database queries, file system operations, network requests → all can take time.
Node uses events to let you react when they finish, instead of blocking the whole process.
Custom app events
You can design your app around events.
Example: when a user registers, emit "userRegistered" and different parts of your app can listen (send email, log analytics, update stats).
Streams and sockets
Streams (file read/write, network sockets) emit events like "data", "end", "error".
This makes handling large or continuous data efficient.

*/

import { EventEmitter } from 'events';

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
	console.log(`data recieved user ${name} with id:${id}`);
});

customEmitter.on('response', () => {
	console.log('some other logic here');
});

customEmitter.emit('response', 'john', 34);
