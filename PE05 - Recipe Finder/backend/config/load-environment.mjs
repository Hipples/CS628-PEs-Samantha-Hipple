import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// get URL of current ES module
const __filename = fileURLToPath(import.meta.url);
// convert URL to directory path
const __dirname = path.dirname(__filename);
// resolve absolute path to .env file based on module directory
const envPath = path.resolve(__dirname, '..', '.env');
// load environment variables from .env file into process.env
dotenv.config({ path: envPath });
