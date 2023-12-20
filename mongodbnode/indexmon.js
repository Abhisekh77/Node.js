const { MongoClient } = require("mongodb");
//or
// const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://avishekkhanal750:1234567890@cluster0.a7qeldu.mongodb.net/";
const database = "pracecom";
const client = new MongoClient(url);
//let server is mongodb and client is node js for this example code
const databaseName = "pracecom";

async function getData() {
  let result = await client.connect();
  db = result.db(databaseName);
  collection = db.collection("pracecom");
  let data = await collection.find({}).toArray();
  //to find only khanal
  let data12 = await collection.find({ name: "khanal" }).toArray();
  console.log(data);
  console.log(data12);
}

getData();

// const { MongoClient } = require("mongodb");

// // Replace the uri string with your connection string.
// const uri = "mongodb://localhost:27017/pracecom";

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();

//     const database = client.db("sample_mflix");
//     const movies = database.collection("movies");

//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: "Back to the Future" };
//     const movie = await movies.findOne(query);

//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
