import express from 'express';
import cors from 'cors';

import './load_environment.mjs';
import recipes from './routes/recipes.mjs';

const PORT = process.env.PORT || 3000;
const app = express();

// use the cors middleware to enable cross-origin resource sharing for all routes
app.use(cors());
// use the express.json middleware to parse incoming JSON payloads
app.use(express.json());
// use the recipes router for any requests to the "/recipe" endpoint
app.use("/recipe", recipes);

// the root path sends a welcome message as the response
app.get("/", (req, res) =>{
  res.send("Welcome to the Recipe Finder API!");
});

// start the sxpress server on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
