# Spindle

Spindle is a unique platform designed for creating messages to the future. Each submission is stored with an identifier and an unlock time, allowing users to set messages that can only be viewed at a specified future date. Built with a minimalist approach, Spindle is developed using modern technologies to enhance user experience and privacy.

## Features

- **Create Posts**: Submit a message with a future unlock date.
- **Search Function**: Retrieve messages using unique identifiers.
- **Privacy and Terms**: Messages are stored indefinitely without deletion options, emphasizing permanence and accountability.

## Tech Stack

- **Frontend**: React with Vite and Tailwind CSS for styling.
- **Backend**: Express.js and MongoDB for message storage.
- **Fonts**: Noto Sans Mono and IBM Plex Mono for a sleek, monospaced aesthetic.

## Installation

1. Clone the repository:

   ````bash
   git clone https://github.com/your-username/spindle.git```

   ````

2. Install Dependencies:

   ```bash
   cd spindle

   cd client
   npm install


   cd server
   npm install
   ```

   Make sure to create a .env file in the server directory.

   ```dotenv
   MONGOURI=YOUR_MONGO_URI
   ```

3. Run the development server:

   ```bash
   cd client
   npm run dev

   cd server
   node server.js
   ```
