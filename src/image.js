const sendError = require('./send-error.js');

/**
 * @function sendImage
 * @param {object} msg - the message object
 * @param {array} props - user input
 * @param {object} api - the unsplash object
 * @param {function} toJson - the function to parse json response
 * @description Sends an image to the user.
 */
module.exports = function sendImage(msg, props, api, toJson) {
    api.search.photos(props.match[1], 1)
        .then(toJson)
        .then(json => {
            if (json.total === 0) {
                sendError(msg, props);
                return;
            }
            const images = [];
            json.results.forEach(pic => {
                images.push(pic);
            });
            const random = Math.floor(Math.random() * images.length);
            msg.reply.photo(images[random].urls.regular, {parseMode: 'Markdown', caption: `Photo by [${images[random].user.name}](${images[random].user.links.html}?utm_source=picy&utm_medium=referral), found on [Unsplash](${images[random].urls.regular}?utm_source=picy&utm_medium=referral).`});
        })
        .catch(err => msg.reply.text('Sorry, something bad happened. 😰 If you want to report this, please message @CodeF0x.'));
}