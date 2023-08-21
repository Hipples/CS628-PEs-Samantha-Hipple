import express from 'express';
import cors from 'cors';

import './config/load-environment.mjs';
import recipes from './routes/recipes.mjs';

const PORT = process.env.PORT || 3001;
const app = express();

// cors middleware to enable cross-origin resource sharing for all routes
app.use(cors());
// express.json middleware to parse incoming JSON payloads
app.use(express.json());
// recipes router for any requests to the "/recipe" endpoint
app.use("/recipe", recipes);

// the root path sends a welcome message as the response
app.get("/", (req, res) =>{
  res.send("Welcome to the Recipe Finder API!");
});

// start the express server on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
