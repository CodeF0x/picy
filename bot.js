// Request module
const request = require('request');

// Telegrab module
const Telebot = require('telebot');

// Bot
const bot = new Telebot("");

// DOMParser
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


// /start command
bot.on('/start', (msg) => msg.reply.text('Hello! For informations about usage, creator, etc., please use the command /help!'));

// /help command
bot.on('/help', (msg) => msg.reply.text('Usage:\n /imageof <your_word> sends you an random image.\nExample:\n/imageof dog - You\'ll get an random image of a dog.\n\nAbout:\nVersion: 0.9\nCreator: @CodeFox\nGitHub: https://github.com/CodeF0x/*\n\nMiscellaneous:\nThe images are very tiny, working on a fix.'));
// /imageof command
bot.on(/^\/imageof (.+)$/, (msg, props) => { 
    var finalSource;
    request("https://www.bing.com/search?q=" + props.match[1], function(error, response) {
        var html = new JSDOM(response.body);
        var images = html.window.document.getElementsByTagName('img');
        var sources = [];
        for (var i = 0; i < images.length; i++) {
            if (images[i].src.includes('http')) {
                sources.push(images[i].src);
            }
        }
        sendPhoto(msg, sources[Math.floor(Math.random() * sources.length)]);
    });
});

function sendPhoto(msg, url) {
    msg.reply.photo(url);
}
bot.start();