module.exports = (number) => {
  let result = ''

  if (number % 3 === 0) result += 'Fizz'
  if (number % 5 === 0) result += 'Buzz'
  if (number === 0 || result === '') result = number

  return result
}
