const http = require('http');
const axios = require('axios');

const localconf =  require('./local.js');

exports.helloBot = (req, res) => {
  function sendMessage(options) {
    const token = localconf.telegramToken;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    axios.post(url, {
      chat_id: options.chatId,
      text: options.greetings
    })
    .then(function (response) {
      console.log(response);
      res.send({ status: 'OK'});
    })
    .catch(function (error) {
      console.log(error);
      res.sendStatus(500);
    });
  }

  const callToken = req.path;

  if ( callToken !== localconf.webhookToken ) {
    const message = req.body.message;
    const options = {
      greetings: `Hello ${message.from.first_name} ${message.from.last_name}!`,
      chatId: message.chat.id
    };

    sendMessage(options);
  } else {
    res.sendStatus(403);
  }
};
