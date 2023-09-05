import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000; // Choose your desired port number

// Middleware to set Cache-Control header for all routes
app.use((req, res, next) => {
  // Set cache control headers to disable caching
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  
  // Optionally, you can set other headers like 'Pragma' to further control caching
  // res.setHeader('Pragma', 'no-cache');
  
  next();
});

// Define a route for static assets (e.g., CSS, JS, images)
app.use('/static', express.static(__dirname + '/public', {
  maxAge: '365d', // Set the cache duration (e.g., 365 days)
}));

// Define other routes and middleware as needed

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});