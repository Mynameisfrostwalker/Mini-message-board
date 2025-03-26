const { Router } = require('express');
const { displayForm, addNewMessage } = require('../controllers/newMessageController');

const newMessageRouter = Router();

newMessageRouter.get('/', displayForm);
newMessageRouter.post("/", addNewMessage);

module.exports = newMessageRouter;