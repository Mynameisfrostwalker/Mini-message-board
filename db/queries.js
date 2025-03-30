const pool = require("./pool");
const CustomNotFoundError = require('../errors/CustomNotFoundError');

const formatDate = (date) => {
    return date.toISOString().slice(0, 19).replace("T", " ");
}

const getMessagesFromDB = async () => {
    try {
        const { rows } = await pool.query("SELECT * FROM messages")
        return rows;
    } catch(error) {
        console.error(error);
        throw new CustomNotFoundError("Could not get messages from database")
    }
};

const getMessageFromDB = async (id) => {
    try {
        const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
        return rows
    } catch(error) {
        console.error(error);
        throw new CustomNotFoundError("Could not get message from database");
    }
};

const addMessage = async (text, user) => {
    try {
        console.log(user, text, formatDate(new Date()));
        await pool.query(`
            INSERT INTO messages (username, text, added) VALUES
            ($1, $2, $3)
        `, [user, text, formatDate(new Date())])
    } catch(error) {
        console.error(error);
        throw new CustomNotFoundError("Could not add message");
    }
}

module.exports = { getMessagesFromDB, addMessage, getMessageFromDB };