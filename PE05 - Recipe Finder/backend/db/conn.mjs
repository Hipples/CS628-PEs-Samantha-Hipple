import { MongoClient } from "mongodb";

const connectionString = process.env.MONGODB_URI || "";
const client = new MongoClient(connectionString);

let db;
try {
  await client.connect();
  db = client.db("recipe-app");
} catch (error) {
  console.error('Failed to connect to database:', error);
}

export default db;