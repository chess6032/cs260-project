// service.js
// these are stubs for the service endponts that we'll fill in later.

const express = require('express');
const app = express();

// ~~~~~~~~~~~~~~~ HELPER FUNCTIONS & STUFF ~~~~~~~~~~~~~~~

const bcrypt = require('bcryptjs');

const users = [];

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
  };

  users.push(user);

  return user;
}

function getUser(field, value) {
  if (value) {
    return users.find((user) => user[field] === value);
  }
  return null;
}

// ~~~~~~~~~~~~~~~ ENDPOINTS ~~~~~~~~~~~~~~~

// middleware: parse request's JSON body
app.use(express.json());

// registration
app.post('/api/auth', async (req, res) => {
  if (await getUser('email', req.body.email)) { // check if user exists
    // FAIL: email already exists
    res.status(409).send({ msg: 'Existing user' });
  } else {
    // SUCCESS: new user
    const user = await createUser(req.body.email, req.body.password);
    res.send({ email: user.email });
  }
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