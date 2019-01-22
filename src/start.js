/**
 * @function start
 * @param {object} msg - the message object
 * @description Called when user chats with the bot the first time.
 */
module.exports = function start(msg) {
    msg.reply.text('Hi! 👋 For more info, please use /help.');
}