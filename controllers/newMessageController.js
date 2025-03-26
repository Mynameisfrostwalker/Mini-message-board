const expressAsyncHandler = require('express-async-handler')
const { addMessage } = require("../db");

const displayForm = expressAsyncHandler(async (req, res) => {
    res.render("form", {title: "Add New Message"});
});

const addNewMessage = expressAsyncHandler(async (req, res) => {
    const { user, text } = req.body;
    await addMessage(text, user);

    res.redirect("/");

})

module.exports = { displayForm, addNewMessage };