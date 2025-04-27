// Function to handle sending a message
function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();

  if (message !== '') {
    const chatMessages = document.querySelector('.chat-messages');

    // Create user message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'user');
    messageElement.textContent = message;

    chatMessages.appendChild(messageElement);
    messageInput.value = '';

    // Scroll to the bottom of chat after sending
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Call bot reply after slight delay
    setTimeout(botReply, 2000); // 2 seconds delay
  }
}

// Function to send Bot's reply
function botReply() {
  const chatMessages = document.querySelector('.chat-messages');

  const botMessages = [
    "Hello! How can I assist you today? 🤖",
    "Thanks for reaching out! ✨",
    "Please wait while we connect you to the team... ⏳",
    "Can you tell me more details? 📋",
    "Happy to help you! 👍"
  ];

  const randomIndex = Math.floor(Math.random() * botMessages.length);
  const botMessage = botMessages[randomIndex];

  const messageElement = document.createElement('div');
  messageElement.classList.add('message'); // No 'user' class means it's from bot
  messageElement.textContent = botMessage;

  chatMessages.appendChild(messageElement);

  // Scroll to bottom after bot reply
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add event listeners
document.getElementById('send-button').addEventListener('click', sendMessage);

document.getElementById('message-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});
