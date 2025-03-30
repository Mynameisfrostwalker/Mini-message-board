const expressAsyncHandler = require('express-async-handler');
const { getMessageFromDB } = require('../db/queries');
const CustomNotFoundError = require('../errors/CustomNotFoundError');

const getMessages = expressAsyncHandler(async (req, res) => {
    const { messageid } = req.params;
    const rawData = await getMessageFromDB(messageid);
    const message = rawData[0];

    if (!message) {
        throw new CustomNotFoundError("No message");
    }

    res.render('message', { title: "Message", message });
});

module.exports = getMessages;