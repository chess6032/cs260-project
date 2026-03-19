// service.js
// these are stubs for the service endponts that we'll fill in later.

const express = require('express');
const app = express();

// middleware: parse request's JSON body
app.use(express.json());

// registration
app.post('/api/auth', async (req, res) => {
  res.send(req.body);
});

// login
app.put('/api/auth', async (req, res) => {
  res.send({ email: 'marta@id.com' });
});

// logout
app.delete('/api/auth', async (req, res) => {
  res.send({});
});

// getMe
app.get('/api/user', async (req, res) => {
  res.send({ email: 'marta@id.com' });
});

const port = 3000;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});