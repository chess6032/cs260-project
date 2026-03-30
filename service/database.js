const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.username}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const users = db.collection('users');

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

async function addUserToDB(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: email,
        password: passwordHash,
        banned: false,
    };

    await users.insertOne(user);

    return user;
}

module.exports = {
    addUserToDB
}