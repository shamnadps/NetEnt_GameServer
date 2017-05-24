export default function(app) {
  const MIN = 0;
  const MAX = 5;
  app.get('/play', (req, res) => {

    let array = [];
    //populating the array with 3 elements
    for (let i = 0; i < 3; i++) {
      array.push(getRandomIntInclusive());
    }

    //get the result of the game.
    const result = getResult(array);

    //getting a random number for determining bonus.
    const random = getRandomIntInclusive();

    //setting bonus as true if the random number is 2
    const bonus = random === 2 ? true : false;

    //sending the response as 3 element array
    res.status(200).json([
      {"values":array},
      {"bonus":bonus},
      {"result":result}
    ]);
  });

  //setting the min and max values for getRandomIntInclusive method
  const min = Math.ceil(MIN);
  const max = Math.floor(MAX);

  //Random number generator within a range of 0 and 5
  var getRandomIntInclusive =  () => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
  Calculating the result of the game
  All Equal - Big Win
  Two Equals - Small Win
  No Equals - No Win
  */
  var getResult = (array) => {
    if (array.length === 3) {
      if (array[0] === array[1] &&
          array[0] === array[2]) {
        return "Big Win"
      } else if (array[0] === array[1] ||
                 array[0] === array[2] ||
                 array[1] === array[2]) {
        return "Small Win";
      } else {
        return "No Win";
      }
    }
  }
}
