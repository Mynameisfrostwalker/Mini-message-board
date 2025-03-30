const expressAsyncHandler = require('express-async-handler');
const { getMessagesFromDB } = require('../db/queries');
const CustomNotFoundError = require('../errors/CustomNotFoundError');

const getMessages = expressAsyncHandler(async (req, res) => {
    const messages = await getMessagesFromDB();

    if (!messages) {
        throw new CustomNotFoundError("No messages");
    }

    res.render('index', { title: "Mini Message Board", messages });
});

module.exports = getMessages;