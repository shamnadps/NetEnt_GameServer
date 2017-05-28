// Listening to localhost at port 1337
export default function (app) {
  let PORT = 1337
  app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
  })
}
