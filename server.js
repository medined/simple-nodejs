'use strict';

const express = require('express');

// Constants
const PORT = 10254;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/healthz', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log("Running on http://${HOST}:${PORT}");
