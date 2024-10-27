const ViberBot = require("viber-bot").Bot,
  BotEvents = require("viber-bot").Events,
  TextMessage = require("viber-bot").Message.Text,
  KeyboardMessage = require('viber-bot').Message.Keyboard;
  express = require("express");

require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());

if (!process.env.BOT_TOKEN) {
  console.log("Could not find bot account token key.");
  return;
}
if (!process.env.EXPOSE_URL) {
  console.log("Could not find exposing url");
  return;
}
const {phoneNumberButton, keyboard} = require('./keyboards');

const bot = new ViberBot({
  authToken: process.env.BOT_TOKEN,
  name: "РЕУ-8 БОТ",
  avatar: process.env.BOT_LOGO,
});

// bot.on(BotEvents.SUBSCRIBED, (response) => {
//   response.send(
//     new TextMessage(
//       `Hi there ${response.userProfile.name}. I am ${bot.name}! Feel free to ask me anything.`
//     )
//   );
// });

bot.on(BotEvents.CONVERSATION_STARTED, (response) => {
    response.send(new KeyboardMessage({"Type": "keyboard",
    "Buttons": [
       {
        "Columns": 6,
        "Rows": 1,
        "BgColor": "#2db9b9",
        "Text": "НАЧАТЬ ДИАЛОГ И ПОДЕЛИТЬСЯ НОМЕРОМ",
        "ActionType": "share-phone",
        "ActionBody": "phone",
    }
    ]}, [], null, null, 3));
    
});



bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
  response.send(new TextMessage(`Message received.`));
});

app.get("/", (req, res) => {
  res.send("Using global content security policy!");
});

app.post("/sendData", (req, res) => {
  return res.send("Hello from POST");
});

app.get("/getData", (req, res) => {
  return res.send("Hello from GET");
});

const port = process.env.PORT || 3000;

app.use("/viber/webhook", bot.middleware());

app.listen(port, () => {
  console.log(`Application running on port: ${port}`);
  bot.setWebhook(`${process.env.EXPOSE_URL}/viber/webhook`).catch((error) => {
    console.log("Can not set webhook on following server. Is it running?");
    console.error(error);
    process.exit(1);
  });
});

// const ViberBot = require("viber-bot").Bot;
// const BotEvents = require("viber-bot").Events;
// const TextMessage = require("viber-bot").Message.Text;
// const express = require("express");

// const app = express();
// app.use(express.json());

// // const botToken = '516ca24ed6e7e310-335bb7cf88a509ee-e8bb9cfd892c1fae'; БЫЛО

// const botToken = "5156d127ab27e769-d42f0c2915ed61cb-ec314a4b009fb46c";

// const bot = new ViberBot({
//   authToken: botToken,
//   name: "MyViberBot",
//   avatar: "https://i.ibb.co/mSvxL6j/reu-8.png",
// });

// // Обработчик события нового сообщения
// bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
//   console.log("Message");
//   // Отвечаем на каждое сообщение пользователя текстом "Привет!"
//   response.send(new TextMessage("Привет!"));
// });

// // Запускаем Express сервер

// // Обработчик входящих запросов на путь /webhook
// app.post("/webhook", bot.middleware());

// app.post("/sendData", (req, res) => {
//   return res.send("Hello from POST");
// });

// app.get("/getData", (req, res) => {
//   return res.send("Hello from GET");
// });

// const port = 8080;
// app.listen(port, () => {
//   console.log(`Бот слушает порт ${port}`);

//   // Устанавливаем вебхуки после того, как сервер запущен и прослушивает порт

//   const webhookUrl = "hhttps://bottest2024-6ece1e1468ad.herokuapp.com";

//   // bot.middleware()).listen(port, () => bot.setWebhook(publicUrl)

//   // const webhookUrl = 'http://91.206.179.119:8080';
//   bot.setWebhook(webhookUrl).catch((error) => {
//     console.error("Ошибка установки вебхука:", error);
//   });
// });
