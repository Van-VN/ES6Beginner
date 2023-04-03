function replace(array, from, to, elements) {
  return array.splice(from, to - from, ...elements);
}

let testArray = [1, 2, 100, 100, 6];

replace(testArray, 2, 4, [3, 4, 5]);

console.log(testArray);

let copyReplace = (array, from, to, elements) => {
  array.splice(from, to - from, ...elements);
  return array;
};
console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));

let customerOrder = [];

function recordOrders(time, ...order) {
  return customerOrder.push({ time: time, bird: order });
}

recordOrders(new Date(), "coffee", "yaourt", "pizza");

console.log(customerOrder);
