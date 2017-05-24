export default function(app) {
  const MIN = 0;
  const MAX = 5;
  app.get('/play', (req, res) => {

    let array = [];
    //populating the array with 3 elements
    for (let i = 0; i < 3; i++) {
      array.push(getRandomIntInclusive());
    }

    //sending the response as 3 element array
    res.status(200).json([
      "result",array
    ]);
  });

  //calculating the random number between 0 and 5
  const min = Math.ceil(MIN);
  const max = Math.floor(MAX);
  var getRandomIntInclusive =  () => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
