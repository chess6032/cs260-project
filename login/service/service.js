// service.js
// these are stubs for the service endponts that we'll fill in later.

const express = require('express');
const app = express();

const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const cookieParser = require('cookie-parser');

const AUTH_COOKIE_NAME = 'token'
const AUTH_FIELD_NAME = 'token'

let usersDB = [];
// ^ this is our dummy DB. it would clear whenever we restart our server tho. 
// TODO: replace w/ query shih

let apiRouter = express.Router();

// ~~~~~~~~~~~~~~~ HELPER FUNCTIONS ~~~~~~~~~~~~~~~

// PASSWORD HASHING & USER STORAGE (bycryptjs)

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    banned: false,
  };

  usersDB.push(user);

  return user;
}

function getUser(field, value) {
  if (value) {
    return usersDB.find((user) => user[field] === value);
  }
  return null;
}

// GENERATING & DELETING COOKIES (cookie-parser)

// Create a token for the user and send a cookie containing the token
function setAuthCookie(res, user) {
  user[AUTH_FIELD_NAME] = uuid.v4();
  
  res.cookie(AUTH_COOKIE_NAME, user[AUTH_FIELD_NAME], {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

function clearAuthCookie(res, user) {
  delete user[AUTH_FIELD_NAME];
  res.clearCookie(AUTH_COOKIE_NAME);
}

// DEALING W/ BANNING THE USER & STUFF

async function banUser(user) {
  if (!user) {
    console.error("banUser: ermmmm... you gave me a false-y user??");
  }
  if (user.banned) {
    console.error("banUser: ermmmm... I got a user that was already banned???");
  }
  user.banned = true;
}

// TODO: does it even make sense for my project to use middleware for ts?
const verifyNotBanned = async (req, res, next) => {
  const user = await getUser(AUTH_FIELD_NAME, req.cookies[AUTH_COOKIE_NAME]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: `Unauthorized (YOU PRESSED THE BUTTON, FOOL!)` });
  }
}



// ~~~~~~~~~~~~~~~ ENDPOINTS ~~~~~~~~~~~~~~~

// middleware: 
app.use(express.json()); // parse request's JSON body
app.use(cookieParser()); // cookies! (from cookie-parser package I believe)
app.use('/api', apiRouter); // to distinguish endpoint APIs to frontend files. (endpoint paths begin w/ '/api')

// registration
app.post('/api/register', async (req, res) => {
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
app.post('/api/login', async (req, res) => {
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
app.delete('/api/logout', async (req, res) => {
  const token = req.cookies[AUTH_COOKIE_NAME];
  const user = await getUser(AUTH_COOKIE_NAME, token);
  if (user) { // check if there exists a user authenticated w/ token
    clearAuthCookie(res, user);
  }

  // we don't care if token doesn't exist tho lol

  res.send({});
});

// ban user
// TODO: uhhh is it wise to expose this as a service endpoint?
app.put('/api/ban', async (req, res) => {
  const user = await getUser(AUTH_FIELD_NAME, req.cookies[AUTH_COOKIE_NAME]);
  if (!user) {
    res.status(401).send( { msg: `Unauthorized. (I don't even know who you are.)`});
  } else if (user.banned) {
    res.status(401).send({ msg: 'Unauthorized. (Only the wise may declare who is foolish.)' });
  } else {
    banUser(user);
  }
});

// TODO: I don't think I need ts getMe endpoint
// // getMe
// app.get('/api/user/me', async (req, res) => {
//   const token = req.cookies['token''];
//   const user = await getUser('token', token);
//   if (user) { // check if there exists a user authenticated w/ token
//     // SUCCESS:
//     res.send({ email: user.email });
//   } else {
//     // FAILURE: no user w/ token exists
//     res.status(401).send({ msg: 'Unauthorized' });
//   }
// });

// const port = 3000;
// app.listen(port, function () {
//   console.log(`Listening on port ${port}`);
// });