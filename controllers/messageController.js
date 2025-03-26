const expressAsyncHandler = require('express-async-handler');
const { getMessageFromDB } = require('../db');
const CustomNotFoundError = require('../errors/CustomNotFoundError');

const getMessages = expressAsyncHandler(async (req, res) => {
    const { messageid } = req.params;
    const message = await getMessageFromDB(messageid);

    if (!message) {
        throw new CustomNotFoundError("Message not found");
    }

    res.render('message', { title: "Message", message });
});

module.exports = getMessages;