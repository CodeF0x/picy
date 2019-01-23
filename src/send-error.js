/**
 * @function sendError
 * @param {object} msg - the message text
 * @param {array} props - user input
 * @description Error handling when no image is found.
 *
 */
module.exports = function sendError(msg, props) {
    msg.reply.text(`Sorry, I couldn't find any image for "${props.match[1]}". ❌ Please try something different.`);
}
