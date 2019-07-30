
// 若該整數能被 3 整除，回傳 Fizz；
// 若該整數能被 5 整除，回傳 Buzz；
// 若該整數能被 3 和 5 同時整除，回傳 FizzBuzz；
// 若都不能整除，回傳該整數。


function fizzBuzz(num) {
  let str = ''
  if (num % 3 === 0) {
    str += 'Fizz'
  }
  if (num % 5 === 0) {
    str += 'Buzz'
  }
  if (str != '') {
    return str
  } else {
    return num
  }
}

