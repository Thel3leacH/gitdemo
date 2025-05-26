//------------------------------- Iterators Review ---------------------------------//

const Arr = ['Lion', 'Orange', 'Violet', 'Epic'];
const arr = [1, 3, 4, 5, 6, 8, 10];

// Define callback
const callBack = Arr.forEach((word) => console.log(' + ' + word));
// check return value of function
console.log('This is ' + callBack);

// Chain two iteration methods on the same array.
const chainNum = arr
.filter(num => num > 5) // Return element > 5 //
.map(num => num * num); // Return the same element multiply by element //
console.log(chainNum);

// Combine single value of Arr //
const newArrs = Arr.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue[0]
}, "Everlasting ")
// Result use optional arguments form .reduce
console.log(newArrs);