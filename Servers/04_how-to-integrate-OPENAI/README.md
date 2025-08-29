# OpenAI Chat API with Express

A simple **Node.js** backend using **Express** to create a chat API powered by **OpenAI's GPT-4o-mini** model. This project allows you to send user messages and get AI-generated responses in JSON format.

---

## Features

- 🚀 Lightweight Express server
- 💬 Chat API powered by OpenAI GPT-4o-mini
- 🌐 CORS enabled for frontend integration
- 🔒 Environment variables for API key management
- ✅ Easy to extend for any chat-based application

---

## Installation

1. **Clone the repository**

```bash
git https://github.com/ansh271/Servers.git
cd 04_how-to-integrate-OPENAI
node index.js
```

OPENAI_API_KEY=your_openai_api_key_here
PORT=5000


POST http://localhost:5000/api/chat
Content-Type: application/json

{
  "userInput": "Hello, how are you?"
}

