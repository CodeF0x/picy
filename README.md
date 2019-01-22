# FAQ

* What does this bot do?
> The bot sends you a random image of a word you provide.

* How can I interact with the bot?
> Simply start chatting with [@Random_Image_Bot](https://t.me/Random_Image_Bot).

* What commands are available?
> * _/help_ - Provides basic information about the bot.
> * _/start_ - The inital command you send when starting chatting.
> * _/imageof {your-word}_ - Sends you a random image of {your-word}.

* Is the bot limited to Telegram?
> Yes, the bot is available for Telegram only.

# Used Node.js modules

* [telebot](https://www.npmjs.com/package/telebot) - Used to interact with the Telegram API
* [request](https://www.npmjs.com/package/request) - A simplified HTTP client, used the grab the search engines "result"-page

# Known issues

* None

# Other
You need to modify node_modules\unsplash-js\lib\unsplash.js the following way: 

* export toJson: exports.toJson = toJson;
* import module node-fetch: const fetch = require('node-fetch');