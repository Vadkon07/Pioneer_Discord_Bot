# Project Story

Between 2020 and 2023, Discord became a significant part of my life. It was more than just a messaging app; it was where I first earned money through creating logotypes and selling roles on my servers. It marked the beginning of my journey into the English language and, more importantly, my initial foray into coding.

Initially, I knew nothing about coding— not even the names of programming languages. My journey began with a bot creator app on my Android phone. Though the coding language was simplistic, I managed to create a few basic bots. My ambition was to develop a more sophisticated Discord bot using JavaScript.

This project is my way of expressing gratitude to the Discord developers. Discord has profoundly impacted my life, introducing me to coding and providing countless memorable moments with friends.

**Thank you, Discord and your developers...**

## Description

I started this bot as a fun project with no prior experience in JavaScript. The aim is to develop an OpenSource bot for our servers. Currently, it includes basic functions, but even these have proven quite useful to me.

Initially, I intended to create a bot solely for personal use, but I realized it would be better to develop it collaboratively with you, my friends. Due to practical constraints—such as needing to keep my laptop running 24/7, dealing with high electricity consumption, and managing a mobile hotspot—it's more feasible for you to run the server on your own systems.

**Before You Begin, Ensure You Have:**
- Node.js (v16.11.0 or higher)
- npm (comes with Node.js)

**Step 1: Create a Discord Bot Account**
1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Click on `New Application`.
3. Name your application and click `Create`.
4. Navigate to the `Bot` tab and click `Add Bot`.
5. Confirm by clicking `"Yes, do it!"`.
6. Copy the Token. You'll need this to authenticate your bot, so keep it secure.
7. Invite your bot to servers using the following URL:
```console
https://discord.com/oauth2/authorize?&client_id=YOUR_APPLICATION_ID_HERE&scope=bot+applications.commands&permissions=PERMISSIONS
```
Replace `YOUR_APPLICATION_ID_HERE` with your application's ID and `PERMISSIONS` with the necessary permissions for your bot, which you can find at the bottom of this page:
```
https://discord.com/developers/applications/YOUR_APPLICATION_ID_HERE/bot
```

**Step 2: Set Up Your Project**
1. Clone and open the folder containing this project.
2. Initialize a new Node.js project:
```console
npm init -y
```
3. Install the `discord.js` library:
```console
npm install discord.js
```

**Step 3: Run Your Bot**
1. In your terminal, run:
```bash
node index.js # (that's like a 'python main.py')
```
You should see `"Bot is online!"` in your terminal.

2. Go to your Discord server and type `p!ping` in any channel where the bot has access. The bot should respond with "Pong!" and display the ping in milliseconds.


## Important

Open file `config.json` and insert inside your token and prefix, it's necessary for setup.

## Issues or Questions

If you encounter any issues or have questions about coding specific commands, join my Discord server [here](https://discord.gg/UeK8U7dD). While I'm not always active, we might still create a vibrant community together!

## To-Do list

- [ ] Add more commands (e.g., kick, ban/unban, say, mute/unmute, etc.)
- [X] Improve the README
