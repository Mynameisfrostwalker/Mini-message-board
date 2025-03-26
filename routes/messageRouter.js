const { Router } = require('express');
const getMessage = require('../controllers/messageController');
const express = require("express");

const messageRouter = Router();

const assetPath = "public";
messageRouter.use(express.static(assetPath));
messageRouter.get('/:messageid', getMessage);

module.exports = messageRouter;