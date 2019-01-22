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
            console.log(json);
        });
}