# HelloBot
*****

A simple Telegram Bot tutorial

Repository for:
* [Write a basic Telegram bot using Google Cloud Functions](https://chatbotslife.com/write-a-basic-telegram-bot-using-google-cloud-functions-51ab026fe016)
* [Crea un bot de Telegram utilizando Google Cloud Functions](https://planetachatbot.com/crea-un-bot-de-telegram-utilizando-google-cloud-functions-62fb59f27877)

## Steps

1. Clone this repository
2. Fill local.js with your tokens (Use local.js.example as guide)
3. Deploy function to Google Cloud
4. Use deployment address to set Telegram's bot webhook
5. Test your bot!

## Deploy function

```bash
# You must be logged in
gcloud functions deploy helloBot --trigger-http
```
