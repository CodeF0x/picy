// Request module
const request = require('request');

// Telebot module
const Telebot = require('telebot');

// Bot
const bot = new Telebot("YOUR TELEGRAM API TOKEN");

// DOMParser
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


// /start command
bot.on('/start', (msg) => msg.reply.text('Hello! For informations about usage, creator, etc., please use the command /help!'));

// /help command
bot.on('/help', (msg) => msg.reply.text('Usage:\n /imageof <your_word> sends you an random image.\nExample:\n/imageof dog - You\'ll get an random image of a dog.\n\nAbout:\nVersion: 1.0\nCreator: @CodeFox\nGitHub: https://github.com/CodeF0x/image-search-telegram-bot\nAll images are taken from https://unsplash.com\n\nMiscellaneous:\nThe images are very tiny, sorry for that.'));

// /imageof command
bot.on(/^\/imageof (.+)$/, (msg, props) => {
    request(`https://unsplash.com/search/photos/${props.match[1]}`, function (error, response) { // Get the search results of bing
        var html = new JSDOM(response.body); // Parse the response 
        var images = html.window.document.getElementsByClassName('_2zEKz'); // Get all images - in this case by class name, otherwise we would get profile pictures too
        var sources = []; // Array to pick random url from
        for (var i = 0; i < images.length; i++) { // Loop through all images and push only valid url to the array
            if (images[i].src.includes('https')) {
                sources.push(images[i].src);
            }
        }
        // Check if the array containing the url has any values
        if (typeof sources[0] !== "undefined") {
            sendPhoto(msg, sources[Math.floor(Math.random() * sources.length)]); // Random url as parmeter
        } else {
            sendError(msg, props);
        }
    });
});

// Actual function to send the photo
const sendPhoto = (msg, url) => {
    msg.reply.photo(url); // Send the photo
}

// Function to send an error message
const sendError = (msg, props) => {
    msg.reply.text(`⚠️ Sorry, I couldn't find any image for "${props.match[1]}". ⚠️`);
}
bot.start();
