/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const answer = [];
  for( let i = 1; i <= n; i++ ) {
      const result = ( i % 3 === 0 && i % 5 === 0 ) ? "FizzBuzz" : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i.toString();
      answer.push(result)
  }
  return answer
};

console.log(fizzBuzz(3))  // ["1", "2", "Fizz"]

console.log(fizzBuzz(5))  // ["1", "2", "Fizz", "4", "Buzz"]

console.log(fizzBuzz(15)) // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]