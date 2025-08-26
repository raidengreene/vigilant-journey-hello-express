import express from 'express'
import path from "path";

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.static(__dirname + "public"))

app.get('/', (req, res) => {
  res.send("Hello Express from render.  <a href='/raiden'>raiden</a>")
})
app.get('/raiden', (req, res) => {
  //res.send("raiden <a href='/'>home</a>")
  res.sendFile('raiden.html');
})
//endpoints...middleware...apis?
//send an html file



app.listen(PORT, () => {
  console.log('Example app Linstening on port ${PORT}')
})