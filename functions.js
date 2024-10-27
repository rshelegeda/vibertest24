
function createPersistentKeyboard() {
    const keyboard = {
        "Type": "keyboard",
        "Buttons": [
            {
                "Columns": 3,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "BgLoop": true,
                "ActionType": "reply",
                "ActionBody": "РЕУ",
                "Text": "Информация о РЕУ",
                "TextSize": "large",
                "TextVAlign": "middle",
                "TextHAlign": "center"
            },
            {
                "Columns": 3,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "BgLoop": true,
                "ActionType": "reply",
                "ActionBody": "Квартира",
                "Text": "Информация о квартире",
                "TextSize": "large",
                "TextVAlign": "middle",
                "TextHAlign": "center"
            },
            {
                "Columns": 3,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "BgLoop": true,
                "ActionType": "reply",
                "ActionBody": "Оплата",
                "Text": "Оплата счетов",
                "TextSize": "large",
                "TextVAlign": "middle",
                "TextHAlign": "center"
            }
        ]
    };

    return keyboard;
}

module.exports = {
    createPersistentKeyboard : createPersistentKeyboard
};