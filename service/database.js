const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.username}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const users = db.collection('users');
const auths = db.collection('auths');

const uuid = require('uuid');

// This will asynchronously test the connection
// and exit the process if it fails.
(async function testConnection() {
    try {
        await db.command({ ping: 1 });
        console.log(`Connected to ${config.hostname}`);
    } catch (e) {
        console.log(`Failed to connect to ${config.hostname}: ${e.message}`);
        process.exit(1);
    }
})();

async function addUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: email,
        password: passwordHash,
        banned: false,
    };

    await users.insertOne(user);

    return user;
}

async function getUserByEmail(email) {
    return await users.findOne({ email: email });
}

async function userWithEmailExists(email) {
    return await getUserByEmail(email) ? true : false;
}

async function getAuthsOfUser(email) {
    const cursor = auths.find({ email: email });
    return await cursor.toArray();
}

async function getUserOfAuth(auth) {
    return await auths.findOne({ auth: auth });
}

async function createAuth(email) {
    const auth = uuid.v4();
    await auths.insertOne({ email: email, auth: auth });
    return auth;
}

async function deleteAuth(auth) {
    await auths.deleteOne({ auth: auth });
}

async function banUserWithEmail(email) {
    await users.updateMany({ email: email }, { $set: { banned: true }});
}

module.exports = {
    addUser,
    getUserByEmail,
    userWithEmailExists,
    getAuthsOfUser,
    getUserOfAuth,
    createAuth,
    deleteAuth,
    banUserWithEmail,
}