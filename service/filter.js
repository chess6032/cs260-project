const FOUL_WORDS_PATH = 'service/foul-language.json'
const censor = () => `(Kanye had something to say, but it wasn't school appropriate.)`;

let foulWords = []
const fs = require('fs').promises;
fs.readFile(FOUL_WORDS_PATH, 'utf8')
    .then(raw => { foulWords = JSON.parse(raw); });

function filter(quote) {
    const hasFoul = foulWords.some(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'i'); // 'i' makes it case insensitive
        return regex.test(quote);
    });
    return hasFoul ? censor() : quote;
}

module.exports = { filter };