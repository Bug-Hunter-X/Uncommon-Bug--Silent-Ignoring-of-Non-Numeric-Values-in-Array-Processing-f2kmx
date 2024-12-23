function getNumbers(arr) {
  const numbers = [];
  const nonNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      numbers.push(arr[i]);
    } else {
      nonNumbers.push(arr[i]);
    }
  }
  if(nonNumbers.length > 0){
    console.warn("Non-numeric values encountered:", nonNumbers);
  }
  return numbers;
}

const arr = [1, 2, 'a', 4, 'b', 6];
const numbers = getNumbers(arr);
console.log(numbers); // Output: [1, 2, 4, 6]
//Output: Non-numeric values encountered: [ 'a', 'b'] 