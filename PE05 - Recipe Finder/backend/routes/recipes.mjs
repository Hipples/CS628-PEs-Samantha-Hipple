import express from 'express';
import { ObjectId } from 'mongodb';

import db from '../db/conn.mjs';

const router = express.Router();

// get all recipes
router.get("/", async (req, res) => {
  try {
    const collection = (await db).collection("recipes");
    const result = await collection.find({}).toArray();
    res.status(200).send(result);  // OK
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).send({ message: "An error occurred while fetching the recipes." });
  } // Internal Server Error
});

// get a single recipe by id
router.get("/:id", async (req, res) => {
  const collection = await db.collection("recipes");
  const query = { _id: new ObjectId(req.params.id) }
  const result = await collection.findOne(query);
});

export default router;
