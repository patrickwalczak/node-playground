/*

📂 path module in Node.js

The path module is a built-in (core) module in Node.js.
It provides utilities for working with file and directory paths.
Helps you handle paths in a cross-platform way (Windows uses \, Linux/macOS use /).

*/

import path from 'path';

/* 
console.log(path);

{
  resolve: [Function: resolve],
  normalize: [Function: normalize],
  isAbsolute: [Function: isAbsolute],
  join: [Function: join],
  relative: [Function: relative],
  toNamespacedPath: [Function: toNamespacedPath],
  dirname: [Function: dirname],
  basename: [Function: basename],
  extname: [Function: extname],
  format: [Function: bound _format],
  parse: [Function: parse],
  matchesGlob: [Function: matchesGlob],
  sep: '\\',
  delimiter: ';',
  win32: [Circular *1],
  posix: <ref *2> {
    resolve: [Function: resolve],
    normalize: [Function: normalize],
    isAbsolute: [Function: isAbsolute],
    join: [Function: join],
    relative: [Function: relative],
    toNamespacedPath: [Function: toNamespacedPath],
    dirname: [Function: dirname],
    basename: [Function: basename],
    extname: [Function: extname],
    format: [Function: bound _format],
    parse: [Function: parse],
    matchesGlob: [Function: matchesGlob],
    sep: '/',
    delimiter: ':',
    win32: [Circular *1],
    posix: [Circular *2],
    _makeLong: [Function: toNamespacedPath]
  },
  _makeLong: [Function: toNamespacedPath]
}
*/

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt'); // \content\subfolder\test.txt
console.log(filePath);

const base = path.basename(filePath); // test.txt
console.log(base);

// path.join(...paths) → joins path segments with the correct separator.

// path.resolve(...paths) → returns an absolute path.

// path.basename(filePath) → returns the file name.

// path.extname(filePath) → returns the file extension.

/*
// path.parse(filePath) → returns an object with root, dir, base, ext, and name.
{
  root: '/',
  dir: '/users/patrick/docs',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/
