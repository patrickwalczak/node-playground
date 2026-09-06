const users = [
    {
        id: 1,
        name: 'Patrick'
    }
];

const orders = [
        { id: 101, productId: 10, userId: 1 },
        { id: 102, productId: 20, userId: 2 },
        { id: 103, productId: 30, userId: 1 }
    ];

const products = [
    { id: 10, name: 'Keyboard', price: 300 },
    { id: 20, name: 'Mouse', price: 150 },
    { id: 30, name: 'Monitor', price: 1200 }
];

const wait = (time, callback) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback())
    }, time)
  })
}

const findUserById = (userId) => users.find((user) => user.id === userId);
const findOrdersByUserId = (userId) => orders.filter((order) => order.userId === userId);
const findProductById = (productId) => products.find((product) => product.id === productId);

async function getProductById(productId) {
  try {
    if (!productId) throw new Error("Product id is required");

    const cb = () => findProductById(productId); 

    const product = await wait(1000, cb);

    if (!product) throw new Error("Product doesn't exist");

    return product;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getOrdersByUserId(userId) {
  try {
    if (!userId) throw new Error("User id is required");

    const cb = () => findOrdersByUserId(userId); 

    const orders = await wait(1000, cb);

    if (!orders || orders?.length === 0) throw new Error("Orders doesn't exist");

    return orders;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getUserById(id) {
  try {
    if (!id) throw new Error("User id is required");
    const cb = () => findUserById(id); 

    const user = await wait(1000, cb);

    if (!user) throw new Error("User doesn't exist");

    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getData(id) {
  try {
    const user = await getUserById(id);
    const orders = await getOrdersByUserId(user.id);
    const productPromises = orders.map(order => getProductById(order.productId))
    const products = await Promise.all(productPromises);
    console.log(user);
    console.log(orders);
    console.log(products);
  } catch (err) {
    console.log(err);
  } finally {
    console.log('the end');
  }
}

getData(1);