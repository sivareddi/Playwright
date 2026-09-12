function sumAll(...numbers) {
  // 'numbers' is an actual array containing all passed arguments
  //return numbers.reduce((acc, current) => acc + current, 0);
  return numbers.reduce((sum, i) => sum + i, 0);
}

console.log(sumAll(5, 2, -3, 4)); // 14