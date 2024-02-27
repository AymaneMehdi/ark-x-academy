const { MongoClient } = require("mongodb");
// const url = "mongodb+srv://m001-student:btk1PAbcy8ihulNa@sandbox.6qaos.mongodb.net/?retryWrites=true&w=majority&appName=Sandbox";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

client
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.log("Error: ", error));

const db = client.db('mydb');
const collection = db.collection('users');

collection
  .insertOne({ name: "amineee", age: "27" })
  .then((user) => console.log("User Created Successfully: ", user))
  .catch((error) => console.log("Error: ", error));

collection
  .findOne({ name: "Arkadian" })
  .then((user) => console.log(user))
  .catch((error) => console.log("Error: ", error));