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
                console.log(pic.urls);
            });
            msg.reply.photo(images[Math.floor(Math.random() * images.length)]);
        });
}