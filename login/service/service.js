// service.js
// these are stubs for the service endponts that we'll fill in later.

const express = require('express');
const app = express();

// ~~~~~~~~~~~~~~~ HELPER FUNCTIONS & STUFF ~~~~~~~~~~~~~~~


// PASSWORD HASHING & USER STORAGE (bycryptjs)
// TODO: replace w/ query shih

const bcrypt = require('bcryptjs');

const users = [];
// ^ this is our dummy DB. it would clear whenever we restart our server tho. 

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

// GENERATING TOKENS (uuid)

const uuid = require('uuid');

// GENERATING & DELETING COOKIES (cookie-parser)

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Create a token for the user and send a cookie containing the token
function setAuthCookie(res, user) {
  user.token = uuid.v4();

  res.cookie('token', user.token, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

function clearAuthCookie(res, user) {
  delete user.token;
  res.clearCookie('token');
}

// ~~~~~~~~~~~~~~~ ENDPOINTS ~~~~~~~~~~~~~~~

// middleware: 
app.use(express.json()); // parse request's JSON body
app.use(cookieParser()); // cookies! (from cookie-parser package I believe)

// registration
app.post('/api/auth', async (req, res) => {
  if (await getUser('email', req.body.email)) {
    // FAIL: user email already exists
    res.status(409).send({ msg: 'Existing user' });
  } else {
    // SUCCESS:
    const user = await createUser(req.body.email, req.body.password);

    setAuthCookie(res, user);

    res.send({ email: user.email });
  }
});

// login
app.put('/api/auth', async (req, res) => {
  const user = await getUser('email', req.body.email); // get user by email
  if (user && (await bcrypt.compare(req.body.password, user.password))) { // check that user w/ email exists & that password was correct
    // SUCCESS:
    setAuthCookie(res, user);

    res.send({ email: user.email });
  } else {
    // FAILURE: email doesn't exist, or password incorrect.
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// logout
app.delete('/api/auth', async (req, res) => {
  const token = req.cookies['token'];
  const user = await getUser('token', token);
  if (user) { // check if there exists a user authenticated w/ token
    clearAuthCookie(res, user);
  }

  // we don't care if token doesn't exist tho lol

  res.send({});
});

// getMe
app.get('/api/user/me', async (req, res) => {
  const token = req.cookies['token'];
  const user = await getUser('token', token);
  if (user) { // check if there exists a user authenticated w/ token
    // SUCCESS:
    res.send({ email: user.email });
  } else {
    // FAILURE: no user w/ token exists
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

const port = 3000;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});