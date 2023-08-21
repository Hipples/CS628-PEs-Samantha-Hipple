import { MongoClient } from "mongodb";

const connectionString = process.env.MONGODB_URI || "";
const client = new MongoClient(connectionString);

const connectToDB = async () => {
  try {
    const conn = await client.connect();
    return conn.db("recipe-app");
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const db = connectToDB();

export default db;