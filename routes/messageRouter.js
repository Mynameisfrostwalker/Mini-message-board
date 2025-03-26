const { Router } = require('express');
const getMessage = require('../controllers/messageController');

const messageRouter = Router();

messageRouter.get('/:messageid', getMessage);

module.exports = messageRouter;