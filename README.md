## Project Overview

MERN Chat Backend is a Node.js and Express-based real-time communication server built using Socket.IO. It provides bidirectional communication between connected clients, supports multiple chat rooms, typing indicators, and broadcasts system events such as users joining or leaving rooms.

This backend was developed as part of **Week 12 – Sprint 12: Real-Time Systems & UI Isolation**.

---

# Live Backend

https://mern-chat-backend-p9b6.onrender.com

---

# Frontend Repository

https://github.com/Sriniketh-Vangipuram/mern-chat-frontend

---

# Live Frontend

https://mern-chat-frontend-ruddy.vercel.app/
---

# Technologies Used

* Node.js
* Express.js
* Socket.IO
* CORS
* dotenv
* Nodemon

---

# Features

* Real-time WebSocket communication
* Persistent Socket.IO connections
* Multiple chat rooms
* Username support
* Typing indicators
* Join notifications
* Leave notifications
* Room-specific messaging
* Express server
* CORS configuration for frontend deployment
* Environment variable support
* Production deployment on Render

---

# Project Structure

```text
mern-chat-backend/
│
├── src/
│   ├── socket/
│   │   └── socket.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/Sriniketh-Vangipuram/mern-chat-backend.git
```

Move into the project

```bash
cd mern-chat-backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000
```

Start the development server

```bash
npm run dev
```

---

# Production

Start the server

```bash
npm start
```

---

# Socket.IO Event Flow

## Client Connection

When a user opens the application, a persistent Socket.IO connection is established with the server.

---

## Join Room

Client emits:

join-room


Server:

* Stores username
* Joins the requested room
* Broadcasts a "joined room" system message

---

## Send Message

Client emits:

send-message

Server:

* Receives message
* Broadcasts message only to users in the selected room

---

## Typing Indicator

Client emits:

typing

Server broadcasts:

user-typing

When typing stops:

stop-typing

Server broadcasts:

user-stop-typing
```

---

## Disconnect

When a client disconnects, the server broadcasts a leave notification to the current room.

---

# API

## Root Route

GET /

Response

Socket server connected and Running.
```

---

# Deployment

Backend deployed on:

**Render**

Frontend deployed on:

**Vercel**

---

# Learning Outcomes

This project helped me understand:

* WebSockets
* Socket.IO
* Event-driven architecture
* Bidirectional communication
* Room-based messaging
* Broadcasting events
* Typing indicators
* Express server architecture
* CORS configuration
* Production deployment on Render
* Client-server communication

---

# Future Improvements

* MongoDB message persistence
* User authentication
* JWT authorization
* Online user list
* Private messaging
* Read receipts
* Emoji support
* Image sharing
* Voice messages
* Group management
* Chat history
* Notifications

---

# Author

**Sriniketh Vangipuram**

Developed as part of the Prodesk IT Internship – Week 12 Sprint 12.
