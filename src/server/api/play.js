export default function(app) {
  app.get('/play', (req, res) => {
    res.status(200).json([
      "Hello","Play"
    ]);
  });
}
