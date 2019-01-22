/**
 * @function getInfo
 * @param {object} msg - the message object.
 * @description Provides some information about the bot.
 */
module.exports = function getInfo(msg) {
    msg.reply.text('Hi! 👋 I can send you cool images! Just write something like: \n /imageof cat. \n\n All images are taken from https://unsplash.com.');
}
