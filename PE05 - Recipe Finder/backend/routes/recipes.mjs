import express from 'express';
import { ObjectId } from 'mongodb';

import db from '../db/conn.mjs';

const router = express.Router();

// get all recipes
router.get("/", async (req, res) => {
  try {
    const collection = await db.collection("recipes");
    const result = await collection.find({}).toArray();
    res.status(200).send(result);  // OK
  } catch (error) {
    console.error(error);  // log the error for debugging purposes
    res.status(500).send({ message: "An error occurred while fetching the recipes." });  // Internal Server Error
  } 
});

// get a single recipe by id
router.get("/:id", async (req, res) => {
  try {
    const collection = await db.collection("recipes");
    const query = { _id: new ObjectId(req.params.id) }
    const result = await collection.findOne(query);
    if (!result) res.status(404).send({ message: "Recipe not found" });  // Not Found
    else res.status(200).send(result); 
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "An error occurred while fetching the recipe." });
  }
});

// add a new recipe
router.post("/", async (req, res) => {
  try {
    const { name, ingredients, instructions } = req.body;
    const newRecipe = { name, ingredients, instructions }
    const collection = await db.collection("recipes");
    const result = await collection.insertOne(newRecipe);
    res.status(201).send(result);  // Created
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "An error occurred while posting the recipe" });
  }
});

// update a recipe by id
router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) }
    const fields = ["name", "ingredients", "instructions"];
    const updates = { $set: {} }
    fields.forEach(field => { 
      if (req.body[field] !== undefined) {
        updates.$set[field] = req.body[field];
      }
    });
    const collection = await db.collection("recipes");
    const result = await collection.updateOne(query, updates);
    if (result.matchedCount === 0) {
      return res.status(404).send({ message: "Recipe not found" });
    }
    res.status(200).send(result);  // OK
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "An error occurred while updating the recipe" });
  }
});

// delete a recipe by id
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) }
    const collection = await db.collection("recipes");
    const result = await collection.deleteOne(query);
    if (result.deletedCount === 0) {
      return res.status(404).send({ message: "Recipe not found" });  // Not Found
    }
    res.status(204).end()  // No Content
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "An error occurred while deleting the recipe" });
  }
});

export default router;
