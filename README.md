# spindle

spindle is a unique platform designed for creating messages to the future.
similar to the idea of a time capsule, messages are set to be unlocked at a certain date and cannot be accessed until that date.
nothing that can identify the creator of a message is logged.

## features

- **create posts**: submit a message with a future unlock date.
- **search function**: retrieve messages using unique identifiers.
- **privacy and terms**: messages are stored indefinitely without deletion options, emphasizing permanence and accountability.

## tech stack

- **frontend**: react with vite and tailwind css for styling.
- **backend**: express.js and mongodb for message storage.
- **fonts**: noto sans mono and ibm plex mono for a sleek, monospaced aesthetic.

## installation

1. clone the repository:

   ````bash
   git clone https://github.com/your-username/spindle.git```

   ````

2. install dependencies:

   ```bash
   cd spindle

   cd client
   npm install

   cd server
   npm install
   ```

   make sure to create a .env file in the server directory.

   ```dotenv
   mongouri=your_mongo_uri
   ```

3. run the development server:

   ```bash
   cd client
   npm run dev

   cd server
   node server.js
   ```
