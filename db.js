const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    },
    {
      text: "Good Morning!",
      user: "Jane",
      added: new Date()
    },
    {
        text: "Good Evening!",
        user: "John",
        added: new Date()
    },
    {
        text: "Good Night!",
        user: "Doe",
        added: new Date()
    }
  ];  

  const getMessagesFromDB = async () => {
    return messages;
  };

  const addMessage = async (text, user) => messages.push({text, user, added: new Date()})

  module.exports = { getMessagesFromDB, addMessage };