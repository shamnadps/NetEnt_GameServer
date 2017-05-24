export default function(app) {
  let PORT = 1337;
  app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
  });
}
