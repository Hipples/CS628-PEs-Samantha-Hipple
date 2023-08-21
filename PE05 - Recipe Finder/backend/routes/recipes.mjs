import express from 'express';
import { ObjectId } from 'mongodb';

import db from '../db/conn.mjs';

const router = express.Router();

// Get all recipes
router.get("/", async (req, res) => {
  try {
    const collection = (await db).collection("recipes");
    const result = await collection.find({}).toArray();
    res.status(200).send(result);  // OK
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).send({ message: "An error occurred while fetching the recipes." });  // Internal Server Error
  }
});

export default router;
