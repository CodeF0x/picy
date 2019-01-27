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
* [unsplash-js](https://www.npmjs.com/package/unsplash-js) - A wrapper for the Unsplash API
* [node-fetch](https://www.npmjs.com/package/node-fetch) - A polyfill for the browser-native fetch API

# Documentation

Documentation can be found [here](https://codef0x.github.io/picy/index.html).

# Known issues

* None

If you now an issue, you can submit it [here](https://github.com/CodeF0x/picy/issues).

# Other
To get the bot working, you will need to modify node_modules/unsplash-js/lib\unsplash.js the following way:

* `export toJson: exports.toJson = toJson`, on the very last line (right under the declaration of toJson())
* `import module node-fetch: const fetch = require('node-fetch')`, somewhere at the top

### Tracking

The tracking via the UTM parameters in image.js is a requirement by Unsplash to get approval for production limit-rates of their API.