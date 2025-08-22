/* 
📦 What is a module?

A module in Node.js is just a file that contains code (variables, functions, classes, etc.) that you can reuse elsewhere.
By default, everything inside a module is private.
If you want to use it in another file, you need to export it and then import/require it.
*/

/* 

📦 CommonJS (CJS)

CommonJS is the module system that Node.js originally adopted (before ES Modules were added).

It defines how JavaScript code should be structured into modules and how those modules are imported/exported.

🔑 Key features of CommonJS

Synchronous loading – modules are loaded line by line, as the code runs.

require() – function used to import modules.

module.exports / exports – used to export values from a module.

File = module – every file is its own module with its own scope (no globals leaking).

*/

/*

In Node.js, a module is just a file — same as in a frontend app.

In a React project, each .js or .ts file you import is a module.
In Node.js, it’s the same: every .js file is treated as a separate module.

🔑 The difference

Browser/client:
 - Modules are focused on UI logic (React components, utilities, etc.).
 - They run in a sandboxed environment (no file system, no OS access).

Node/server:
 - Modules are focused on backend logic (servers, APIs, databases, file system).
 - They can use Node’s core modules (fs, http, path, os, etc.).
*/

/*

Perfect 👍 Let me give you a list of **interview-style or practice questions** based on what we just covered (globals, `__dirname`, `__filename`, CommonJS vs ESM, modules in Node.js).

---

### 🔹 General Node.js Globals

1. What is the `global` object in Node.js? How is it different from `window` in the browser?
2. Can you name three built-in globals in Node.js?
3. Why is using custom global variables in Node.js generally discouraged?

---

### 🔹 `__dirname` and `__filename`

4. What does `__dirname` return in Node.js? Give an example.
5. How is `__filename` different from `__dirname`?
6. Are `__dirname` and `__filename` available in ES modules? How can you recreate them if not?

---

### 🔹 Modules

7. What is a module in Node.js?
8. How do you export and import functions in CommonJS? Show a code example.
9. How do you export and import functions in ES Modules? Show a code example.
10. What are some core/built-in modules in Node.js?

---

### 🔹 CommonJS vs ES Modules

11. What is CommonJS, and why was it used in Node.js?
12. What’s the difference between `module.exports` and `exports` in CommonJS?
13. How do `require()` and `import` differ in terms of execution?
14. Why is ES Modules now the preferred system in modern Node.js?
15. Can CommonJS and ES Modules interoperate in Node.js? If yes, how?

---

### 🔹 Client vs Server Environment

16. Which browser-specific APIs are not available in Node.js? (give examples)
17. What APIs do you get in Node.js that are not available in the browser?
18. Explain the difference between global variables in the browser and in Node.js.
19. If you try to run `document.querySelector('body')` in Node.js, what happens and why?
20. Why does Node.js not provide DOM APIs by default?

*/

/*

CommonJS (CJS) → the old/original Node.js module system

module.exports / exports

require()

synchronous loading

ES Modules (ESM) → the modern, standardized system

export / export default

import

asynchronous, works in both browsers and Node.js

*/

const { someFunction, anotherFunc } = require('./module');
const { peter, john } = require('./04-names');
const data = require('./05-alt-module');
require('./06-pure');
