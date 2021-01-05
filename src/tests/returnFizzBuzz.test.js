const returnFizzBuzz = require('../utils/returnFizzBuzz')

describe('Return Fizz Buzz function', () => {
  it('should return 0 if were passed 0 as value', () => {
    expect( returnFizzBuzz(0) ).toEqual(0)
  })

  it('should return 1 if were passed 1 as value', () => {
    expect( returnFizzBuzz(1) ).toEqual(1)
  })

  it('should return "Fizz" if were passed 3 as value', () => {
    expect( returnFizzBuzz(3) ).toEqual('Fizz')
  })

  it('should return "Fizz" if were passed 6 as value', () => {
    expect( returnFizzBuzz(9) ).toEqual('Fizz')
  })

  it('should return "Buzz" if were passed 5 as value', () => {
    expect( returnFizzBuzz(5) ).toEqual('Buzz')
  })

  it('should return "Buzz" if were passed 50 as value', () => {
    expect( returnFizzBuzz(50) ).toEqual('Buzz')
  })

  it('should return "FizzBuzz" if were passed 15 as value', () => {
    expect( returnFizzBuzz(15) ).toEqual('FizzBuzz')
  })

  it('should return "FizzBuzz" if were passed 30 as value', () => {
    expect( returnFizzBuzz(30) ).toEqual('FizzBuzz')
  })
})
