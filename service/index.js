// service.js
// these are stubs for the service endponts that we'll fill in later.

const express = require('express');
const app = express();

const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const cookieParser = require('cookie-parser');
let apiRouter = express.Router();

const { addUserToDB } = require('./database');

const STATIC_ROOT_PATH = 'public'

// middleware: 
app.use(express.json()); // parse request's JSON body
app.use(cookieParser()); // cookies! (from cookie-parser package I believe)
app.use(express.static(STATIC_ROOT_PATH)); // serves up static front-end content. NOTE: the deploy script moves all your static files to public/
app.use('/api', apiRouter); // to distinguish endpoint APIs to frontend files. (endpoint paths begin w/ '/api')

const AUTH_COOKIE_NAME = 'token'
const AUTH_FIELD_NAME = 'token'


let usersDB = [];
// ^ this is our dummy DB. it would clear whenever we restart our server tho. 
// TODO: replace w/ query shih


// ~~~~~~~~~~~~~~~ HELPER FUNCTIONS ~~~~~~~~~~~~~~~

// PASSWORD HASHING & USER STORAGE (bycryptjs)

async function createUser(email, password) {
  return await addUserToDB(email, password);
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
    secure: false, // TODO: set back to true for prod
    httpOnly: true,
    sameSite: 'strict',
  });
}

function clearAuthCookie(res, user) {
  delete user[AUTH_FIELD_NAME];
  res.clearCookie(AUTH_COOKIE_NAME);
}

// FILTERING OUT KANYE QUOTES

const censor = () => `(Kanye had something to say, but it wasn't school appropriate.)`;

function filter(quote) {
    const hasFoul = foulWords.some(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'i'); // 'i' makes it case insensitive
        return regex.test(quote);
    });
    return hasFoul ? censor() : quote;
}

// ~~~~~~~~~~~~~~~ ENDPOINTS ~~~~~~~~~~~~~~~

// registration
apiRouter.post('/auth/register', async (req, res) => {
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
apiRouter.post('/auth/login', async (req, res) => {
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
apiRouter.delete('/auth/logout', async (req, res) => {
  const token = req.cookies[AUTH_COOKIE_NAME];
  const user = await getUser(AUTH_FIELD_NAME, token);
  if (user) { // check if there exists a user authenticated w/ token
    clearAuthCookie(res, user);
  }

  // we don't care if token doesn't exist tho lol

  res.send({});
});

// ban user
// TODO: uhhh is it wise to expose this as a service endpoint?
apiRouter.put('/banme', async (req, res) => {
  console.log('banme endpoint called');
  const user = await getUser(AUTH_FIELD_NAME, req.cookies[AUTH_COOKIE_NAME]);
  if (user) {
    console.log('banme: user found');
    if (user.banned) {
      res.send({ msg: `lol you're already banned but OK`});
    } else {
      user.banned = true;
      res.send({ msg: `you have been banned. (I hate you.)`});
    }
  } else {
    res.status(401).send( { msg: `Unauthorized. (I don't even know who you are.)`} );
  }
  console.log('banme endpont finished\n');
});

// check if user is banned
apiRouter.get('/isbanned', async (req, res) => {
  console.log('isbanned endpoint called');
  const user = await getUser(AUTH_FIELD_NAME, req.cookies[AUTH_COOKIE_NAME]);
  if (user) {
    let {email, banned} = user;
    console.log(`  user: ${email} (${banned ? 'banned' : 'good'})`);
    // res.contentType('application/json');
    console.log('  is this user banned?', user.banned);
    if (user.banned) {
      res.send({ msg: 'You HAVE pressed the button. (I hate you.)', banned: true });
    } else {
      res.send({ msg: 'You have NOT pressed the button. (I love you.)', banned: false });
    }
  } else {
    res.status(401).send( {msg: `Unauthorized. (I don't even know who you are.)` });
  }
  console.log('isbanned endpoint finished\n');
});

// calls the kanye.rest API while filtering out NSFW responses
apiRouter.get('/quote', async (req, res) => {
  const response = await fetch('https://api.kanye.rest');
  const data = await response.json();
  const kanyeQuote = data.quote;
  const cleanQuote = filter(kanyeQuote);
  console.log(`original: ${kanyeQuote}`);
  res.json({quote: cleanQuote, original: kanyeQuote});
});

// default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// return app's default page if path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', {root: STATIC_ROOT_PATH});
});

const port = process.env.VITE_PROXY_PORT || 4000;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

// WARN: BELOW IS A LIST OF SWEAR WORDS THAT 
// filter() USES TO IDENTIFY INAPPROPRIATE KANYE QUOTES.













// read warning above
















// read warning above


















// read warning above











// read warning above




















// I'm so sorry.
// (I tried endlessly to get it to load from a separate file, but between the
// asynchronization and my inexperience w/ JS, I couldn't get it to work.)

const foulWords = [
    "f#%k",
    "fuck",
    "sex",
    "shit",
    "porn",
    "Trump",
    "woke",
    "damn",
    "hell",
    "ass",
    "cock",
    "dick"
]