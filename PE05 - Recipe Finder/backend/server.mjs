import express from 'express';
import cors from 'cors';

import './load_environment.mjs';
//import recipes from './routes/recipes.mjs';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
//app.use("/recipe", recipes);

app.get("/", (req, res) =>{
  res.send("Welcome to the Recipe Finder app!");
});

// start the express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});