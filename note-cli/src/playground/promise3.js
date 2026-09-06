const doSth = async (resolve) => {
  console.log("I'm doing sth");
  resolve(10);
};

const passResolver = (callback) => new Promise((resolve, reject) => callback(resolve, reject));

passResolver(doSth).then(value => {
  console.log(value); // 10
});

const y = await passResolver(doSth);

console.log('y', y); // y 10
