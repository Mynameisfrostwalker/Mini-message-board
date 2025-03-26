const formatDate = (date) => {
    return date.toISOString().replace('T', ' ').replace('Z', '');
}

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: formatDate(new Date())
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: formatDate(new Date())
    },
    {
      text: "Good Morning!",
      user: "Jane",
      added: formatDate(new Date())
    },
    {
        text: "Good Evening!",
        user: "John",
        added: formatDate(new Date())
    },
    {
        text: "Good Night!",
        user: "Doe",
        added: formatDate(new Date())
    }
  ];  

  const getMessagesFromDB = async () => {
    return messages;
  };

  const getMessageFromDB = async (index) => messages[index];

  const addMessage = async (text, user) => messages.push({text, user, added: formatDate(new Date())})

  module.exports = { getMessagesFromDB, addMessage, getMessageFromDB };