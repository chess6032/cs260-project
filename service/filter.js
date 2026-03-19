const FOUL_WORDS_PATH = 'service/foul-language.json'
const censor = () => `Kanye had something to say, but it wasn't school appropriate.`

// async function importFoulLanguage() {
//     const fs = require('fs').promises;
//     const rawData = await fs.readFile(FOUL_WORDS_PATH, 'utf8');
//     return JSON.parse(rawData);
// }

let foulWords = []
const fs = require('fs').promises;
fs.readFile(FOUL_WORDS_PATH, 'utf8')
    .then(raw => { foulWords = JSON.parse(raw); });

function filter(quote) {
    const hasFoul = foulWords.some(word => quote.includes(word));
    return hasFoul ? censor() : quote;
}

module.exports = { filter };