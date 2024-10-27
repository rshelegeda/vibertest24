const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;
const express = require('express');

const app = express();
app.use(express.json());

// const botToken = '516ca24ed6e7e310-335bb7cf88a509ee-e8bb9cfd892c1fae'; БЫЛО 

const botToken = "5156d127ab27e769-d42f0c2915ed61cb-ec314a4b009fb46c";

const bot = new ViberBot({
    authToken: botToken,
    name: 'MyViberBot',
    avatar: "https://i.ibb.co/n8HMzfb/reu-8.png"
});



// Обработчик события нового сообщения
bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
    console.log('Message');
    // Отвечаем на каждое сообщение пользователя текстом "Привет!"
    response.send(new TextMessage('Привет!'));
});

// Запускаем Express сервер

// Обработчик входящих запросов на путь /webhook
app.post('/webhook', bot.middleware());

app.post('/sendData', (req, res)=>{
    return res.send('Hello from POST');
})

app.get('/getData', (req, res) => {
    return res.send('Hello from GET');
});

const port = 8080;
app.listen(port, () => {
    console.log(`Бот слушает порт ${port}`);

    // Устанавливаем вебхуки после того, как сервер запущен и прослушивает порт

    const webhookUrl = 'hhttps://bottest2024-6ece1e1468ad.herokuapp.com/';

    // const webhookUrl = 'http://91.206.179.119:8080';
    bot.setWebhook(webhookUrl).catch((error) => {
        console.error('Ошибка установки вебхука:', error);
    });
});

// const ngrok = require('./get_public_url');
// const ViberBot = require('viber-bot').Bot;
// const BotEvents = require('viber-bot').Events;
// const TextMessage = require('viber-bot').Message.Text;
// const KeyboardMessage = require('viber-bot').Message.Keyboard;
// const express = require('express');
// require('dotenv').config();
// const bodyParser = require('body-parser');


// const {phoneNumberButton, keyboard} = require('./keyboards')

// const app = express();
// app.use(express.json());

// const bot = new ViberBot({
//     authToken: process.env.BOT_TOKEN,
//     name: 'РЕУ-8 БОТ',
//     avatar: process.env.BOT_LOGO,
// });

// bot.on(BotEvents.CONVERSATION_STARTED, (response) => {
//     response.send(new KeyboardMessage({"Type": "keyboard",
//     "Buttons": [
//        {
//         "Columns": 6,
//         "Rows": 1,
//         "BgColor": "#2db9b9",
//         "Text": "НАЧАТЬ ДИАЛОГ И ПОДЕЛИТЬСЯ НОМЕРОМ",
//         "ActionType": "share-phone",
//         "ActionBody": "phone",
//     }
//     ]}, [], null, null, 3));
    
// });

// bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
//     const roomname = response.userProfile.id;
//     const username = response.userProfile.name;
//     const profile_pic = response.userProfile.avatar;
//     const country_origin = response.userProfile.country;
//     const language_origin = response.userProfile.language;

//     console.log(roomname, username, profile_pic, country_origin, language_origin);

//     const text = message.text;    

//     if (message.contactPhoneNumber){
//         const sendPhoneNumber = async () => {
//             try {
//                 const messageWithPhoneNumber = new TextMessage('Здравствуйте, ' + username + '. Вас приветствует РЕУ-8. Ваш номер ' + message.contactPhoneNumber, keyboard);
//                 // Ваш асинхронный код здесь
//                 await response.send(messageWithPhoneNumber); // Пример асинхронного вызова
//             } catch (error) {
//                 console.error('Ошибка при отправке сообщения:', error);
//             }
//         };
//         return sendPhoneNumber();        
//     }

//     // console.log(roomname, username, profile_pic, country_origin, language_origin, " ", text);

//     if (text.toLowerCase() === 'реу') {
//         // Если пользователь выбрал "Да"
//         const messageWithKeyboard = new TextMessage('Вы выбрали Информация о РЕУ', keyboard);
//         response.send(messageWithKeyboard);
//     }

//     else if (text.toLowerCase() === 'квартира') {
//         // Если пользователь выбрал "Да"
//         const messageWithKeyboard = new TextMessage('Вы выбрали Информация о квартире', keyboard);
//         response.send(messageWithKeyboard);
//     }

//     else if (text.toLowerCase() === 'оплата') {
//         // Если пользователь выбрал "Да"
//         const messageWithKeyboard = new TextMessage('Вы выбрали Оплату счетов', keyboard);
//         response.send(messageWithKeyboard);
//     }

//     else if (text.toLowerCase() === 'телефон') {


//         const keyboardPhone = {
//             "Type": "keyboard",
//             "Buttons": [phoneNumberButton]
//         };

//         const sendButton = async () => {
//             try {
//                 const messageWithKeyboard = new TextMessage('Нажмите кнопку для передачи номера телефона', keyboardPhone);
//                 // Ваш асинхронный код здесь
//                 await response.send(messageWithKeyboard); // Пример асинхронного вызова
//             } catch (error) {
//                 console.error('Ошибка при отправке сообщения:', error);
//             }
//         };
//         sendButton();

//     }

//     else {
//         bot.getBotProfile().then(response => console.log(`Bot Named: ${response.name}`));
//         const messageWithKeyboard = new TextMessage('Нажмите одну из предложенных кнопок (Если Вы не видите кнопки, нажмите значек Клавиатуры в нижнем правом углу).', keyboard);
//         response.send(messageWithKeyboard);
//     }
// });

// bot.on(BotEvents.MESSAGE_SENT, (message, userProfile) => console.log(message, userProfile));


// const http = require('http');
// const port = process.env.PORT || 8080;

// return ngrok.getPublicUrl().then(publicUrl => {
//     console.log('Set the new webhook to"', publicUrl);
//     http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(publicUrl));
// }).catch(error => {
//     console.log('Can not connect to ngrok server. Is it running?');
//     console.error(error);
// });

// // Hello

