// Request module
const request = require('request');

// Telegrab module
const Telebot = require('telebot');

// Bot
const bot = new Telebot("YOUR_API_TOKEN");

// DOMParser
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


// /start command
bot.on('/start', (msg) => msg.reply.text('Hello! For informations about usage, creator, etc., please use the command /help!'));

// /help command
bot.on('/help', (msg) => msg.reply.text('Usage:\n /imageof <your_word> sends you an random image.\nExample:\n/imageof dog - You\'ll get an random image of a dog.\n\nAbout:\nVersion: 0.9\nCreator: @CodeFox\nGitHub: https://github.com/CodeF0x/*\n\nMiscellaneous:\nThe images are very tiny, working on a fix.'));

// /imageof command
bot.on(/^\/imageof (.+)$/, (msg, props) => { 
    request("https://www.bing.com/search?q=" + props.match[1], function(error, response) { // Get the search results of bing
        var html = new JSDOM(response.body); // Parse the response 
        var images = html.window.document.getElementsByTagName('img'); // Get all images
        var sources = []; // Array to pick random url from
        for (var i = 0; i < images.length; i++) { // Loop through all images and push only valid url to the array
            if (images[i].src.includes('http')) {
                sources.push(images[i].src);
            }
        }
        sendPhoto(msg, sources[Math.floor(Math.random() * sources.length)]); // Random url as parmeter
    });
});

function sendPhoto(msg, url) {
    msg.reply.photo(url); // Send the photo
}
bot.start();