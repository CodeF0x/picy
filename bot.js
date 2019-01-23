// Modules
const Telebot = require('telebot');
const unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const filesystem = require('fs');

// Objects
const bot = new Telebot(filesystem.readFileSync('other/bot-token.txt', 'utf8'));
const api = new unsplash({
    applicationId: filesystem.readFileSync('other/unsplash-app-id.txt', 'utf8'),
    secret: filesystem.readFileSync('other/unsplash-secret.txt', 'utf8')
});

// Methods
const getInfo = require('./src/info.js');
const start = require('./src/start.js');
const sendImage = require('./src/image.js');

// Listeners
bot.on('/help', msg => getInfo(msg));
bot.on('/start', msg => start(msg));
bot.on(/^\/imageof (.+)$/, (msg, props) => sendImage(msg, props, api, toJson));


bot.start();