// [case1] input: 3, expected output: Fizz
// [case2] input: 5, expected output: Buzz
// [case3] input: 15, expected output: FizzBuzz
// [case4] input: 7, expected output: 7

var should = chai.should()
describe('Unit Testing: FizzBuzz function', function () {
  // [case1] input: 3, expected output: Fizz
  it('Input: 3, expected return "Fizz', function () {
    let result = fizzBuzz(3)
    let results = 'Fizz'
    result.should.be.equal(results)
  })
  // [case2] input: 5, expected output: Buzz
  it('Input: 5, expected return "Buzz"', function () {
    let result = fizzBuzz(5)
    result.should.be.equal('Buzz')
  })
  // [case3] input: 15, expected output: FizzBuzz
  it('Input: 15, expected return "FizzBuzz"', function () {
    let result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })
  // [case4] input: 7, expected output: 7
  it('Input: 7, expected return 7', function () {
    let result = fizzBuzz(7)
    result.should.be.equal(7)
  })
})