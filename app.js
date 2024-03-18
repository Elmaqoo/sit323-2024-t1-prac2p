// Import the express library
const express = require('express');

// Initialize the express application
const app = express();

// Define the port number
const port = 3000;

// Serve a simple HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the web server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
