const promise = new Promise((resolve) => {
  resolve('true');
})

console.log(promise); // Promise { 'true' }

// true
promise.then(value => {
  console.log(value);
});

const promiseFunc = () => new Promise(resolve => resolve('promiseFunc'));

const value = promiseFunc(); 
console.log(value); // Promise { 'promiseFunc' }
