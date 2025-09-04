import express from 'express'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { MongoClient, ServerApiVersion } from 'mongodb';

const app = express()
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, 'public')));
app.use(express.json());

const { MongoClient, ServerApiVersion } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


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
app.get('/api/query', (req, res) => {
  const name = req.query.name;
  res.json({"message":"hi ${name}. How are you?"});
})

app.get('/api/url/:data', (req, res) => {
  console.log("client request", req.params.data);
  //const name = req.query.name;
  //res.json({"message":"hi ${name}. How are you?"});
})

app.get('/api/body', (req, res) => {
  console.log("client request with POST body", req.body.name);
  const name = req.body.name;
  res.json({"message":"hi ${name}. How are you?"});
})

//endpoints...middleware...apis?
//send an html file



app.listen(PORT, () => {
  console.log('Example app Linstening on port ${PORT}')
})