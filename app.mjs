import express from 'express'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express()
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send("Hello Express from render.  <a href='/raiden'>raiden</a>")
})
app.get('/raiden', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'raiden.html'))
})
app.get('/api/raiden', (req, res) => {
  const myVar = 'Hello from server!';
  res.json({ myVar });
})

//endpoints...middleware...apis?
//send an html file



app.listen(PORT, () => {
  console.log('Example app Linstening on port ${PORT}')
})