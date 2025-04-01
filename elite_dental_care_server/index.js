const express = require('express');

const cors = require('cors');

require('dotenv').config()

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const port = process.env.PORT || 5000;

const app = express()



// MIDDLEWARE
app.use(cors())
app.use(express.json())









const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.b7lw2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });



    const usersCollection = client.db('elite_dental_care_DB').collection('users')
    const doctorsCollection = client.db('elite_dental_care_DB').collection('doctors')
    const reviewsCollection = client.db('elite_dental_care_DB').collection('reviews')
    const serviceCollection = client.db('elite_dental_care_DB').collection('service')
    const appointMentCollection = client.db('elite_dental_care_DB').collection('appointment')





    // DOCTORS DATA
    app.get('/doctors', async (req, res) => {
      const result = await doctorsCollection.find().toArray()
      res.send(result)
    })


    app.get('/doctors/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: id }
      const result = await doctorsCollection.findOne(query)
      res.send(result)
    })





    // REVIEWS DATA
    app.get('/reviews', async (req, res) => {
      const result = await reviewsCollection.find().toArray()
      res.send(result)
    })





    // SERVICE DATA
    app.get('/service', async (req, res) => {
      const result = await serviceCollection.find().toArray()
      res.send(result)
    })


    app.get('/service/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: id }
      const result = await serviceCollection.findOne(query)
      res.send(result)
    })







    // APPOINTMENT DATA
    app.post('/appointment', async (req, res) => {
      const data = req.body
      const result = await appointMentCollection.insertOne(data)
      res.send(result)
    })




    // USERS DATA
    app.post('/users', async (req, res) => {
      const user = req.body
      const query = { email: user.email }
      const existingUser = await usersCollection.findOne(query)
      if (existingUser) {
        return res.send({ message: 'user alreadt taken', insertedId: null })
      }
      const result = await usersCollection.insertOne(user)
      res.send(result)
    })



    app.get('/users', async (req, res) => {
      const result = await usersCollection.find().toArray()
      res.send(result)
    })


    // GET USER ROLE
    app.get('/users/role/:email', async (req, res) => {
      const email = req.params.email
      const query = { email: email }
      const result = await usersCollection.findOne(query)
      res.send({ role: result?.role })
    })



    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const result = await usersCollection.deleteOne(query)
      res.send(result)
    })





    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);








app.get('/', (req, res) => {
  res.send('elite dental care')
})


app.listen(port, () => {
  console.log(`ELITE DENTAL CARE IS RUNNING ON PORT : ${port}`);
})