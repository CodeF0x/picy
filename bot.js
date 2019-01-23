// Modules
const Telebot = require('telebot');
const unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;

// Objects
const bot = new Telebot('your token');
const api = new unsplash({
    applicationId: 'you token',
    secret: 'your token'
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