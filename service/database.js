const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.username}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const users = db.collection('users');
const auths = db.collection('auths');

const uuid = require('uuid');
const bcrypt = require('bcryptjs');

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

    try {
        await users.insertOne(user);
    } catch (e) {
        console.log(`Failed to add user (${email}): ${e.message}`);
        return undefined;
    }

    return user;
}

async function getUserByEmail(email) {
    try {
        return await users.findOne({ email: email });
    } catch (e) {
        console.log(`Failed to query for user (${email}):\n${e.message}`);
        return undefined;
    }
}

async function getAuthsOfUser(email) {
    let cursor = undefined;
    try {
        cursor = auths.find({ email: email });
    } catch (e) {
        console.log(`Failed to query auth for user (${email}):\n${e.message}`);
        return undefined;
    }
    return await cursor.toArray();
}

async function getUserOfAuth(auth) {
    try {
        return await auths.findOne({ auth: auth });
    } catch (e) {
        console.log(`Failed to query user of auth (${auth}):\n${e.message}`);
        return undefined;
    }
}

async function createAuth(email) {
    const auth = uuid.v4();
    try {
        await auths.insertOne({ email: email, auth: auth, timestamp: new Date.toISOString() });
    } catch (e) {
        console.log(`Failed to create auth for user (${email}):\n${e.message}`);
        return undefined;
    }
    return auth;
}

async function deleteAuth(auth) {
    try {
        return await auths.deleteOne({ auth: auth });
    } catch (e) {
        console.log(`Failed to delete auth (${auth}):\n${e.message}`);
        return undefined;
    }
}

async function banUserWithEmail(email) {
    try {
        return await users.updateOne({ email: email }, { $set: { banned: true }});
    } catch (e) {
        console.log(`Failed to ban user (${email}):\n${e.message}`);
        return undefined;
    }
}

module.exports = {
    addUser,
    getUserByEmail,
    getAuthsOfUser,
    getUserOfAuth,
    createAuth,
    deleteAuth,
    banUserWithEmail,
}