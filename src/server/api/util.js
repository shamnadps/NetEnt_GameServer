// setting the min and max values for getRandomIntInclusive method
const MIN = 0
const MAX = 5

// setting the min and max values for getRandomIntInclusive method
const min = Math.ceil(MIN)
const max = Math.floor(MAX)

// Random number generator within a range of 0 and 5
export function getRandomIntInclusive () {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
Calculating the result of the game
All Equal - Big Win
Two Equals - Small Win
No Equals - No Win
*/
export function getGameResult (array) {
  if (array.length === 3) {
    if (array[0] === array[1] &&
        array[0] === array[2]) {
      return 'Big Win'
    } else if (array[0] === array[1] ||
               array[0] === array[2] ||
               array[1] === array[2]) {
      return 'Small Win'
    } else {
      return 'No Win'
    }
  }
}

// populating the array with 3 elements
export function populateResultArray () {
  var array = []
  for (let i = 0; i < 3; i++) {
    array.push(this.getRandomIntInclusive())
  }
  return array
}
