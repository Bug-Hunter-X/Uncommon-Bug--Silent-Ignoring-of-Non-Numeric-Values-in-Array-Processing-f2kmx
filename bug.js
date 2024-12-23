function getNumbers(arr) {
  const numbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      numbers.push(arr[i]);
    }
  }
  return numbers;
}

const arr = [1, 2, 'a', 4, 'b', 6];
const numbers = getNumbers(arr);
console.log(numbers); // Output: [1, 2, 4, 6]