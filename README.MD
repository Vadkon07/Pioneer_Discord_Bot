# Small story about this project...

During 2020-2023 years I was a very active user of Discord. I just liked to communicate with other people and was using him as a main messaging app on all of my devices. My first money I earned in Discord (I was creating logotypes for other people and they were paying for me, and also they were buying roles on my servers), my "immigration" to English language was started from Discord. Maybe in some sense Discord broke my life for a little, because I got a video game addiction, but for now I don't tocuh even Google Dinosaur in Chrome for more than 2 years, so let's forget about it, because he also did a lot of good life-changing things for me, and one of them it's my first lines of code. 

Some years ago I was zero in coding. I even didn't know just names of coding languages, but still wanted to code. I remember that I downloaded something in a kind of bot creator app for my Android phone, and with a very simple coding language (app's own coding language) I was trying to create a good-enough quality bot. I created maybe 2-3 bots, and they were really nice, but I always wanted to do another thing - real Discord bot, on JavaScript.

With this code I just want to say a big Thanks to developers of Discord, because in Discord I spent really a lot of time of my life, and will never forget all these moments which I spent with my best friends. And I think that I got interest in coding only by Discord, because he was first who opened coding to me.

**Thank you, Discord and your developers...**

## Description

I don't have any experience with JavaScript, and at all created this bot just for fun. I think that it will be a good idea to build a first really big OpenSource bot our servers, right? For now it has only basic functions, but even they are very useful for me.

In the beginning I wanted to create a "All rights reserved" bot, but then I understood that it will be better to develope it together with you, my friends. Also I found that I have to keep my laptop turned on and connected to Internet 24/7, so I'm not ready for it because my laptop will eat a lot of electricity and at all I don't have Wi-Fi and have to live only with mobile hotspot, and if I have to go somewhere I will have to keep my laptop + phone with myself, but it's not possible because my laptop doesn't has any battery and works jsut as a PC. I think that for you all it will be easier to run server on your own computers, just because it's easier and faster.

**Before you begin, ensure you have the following installed:**

    Node.js (v16.11.0 or higher)
    npm (comes with Node.js)

**Step 1: Create a Discord Bot Account**

    1. Go to the Discord Developer Portal.
    2. Click on New Application [here](https://discord.com/developers/applications)
    3. Name your application and click Create.
    4. Navigate to the Bot tab and click Add Bot.
    5. Confirm by clicking Yes, do it!.
    6. Copy the Token. This will be used to authenticate your bot. It;s better to write down him somewhere.
    7. Invite your bot on servers using the following invite:

    https://discord.com/oauth2/authorize?&client_id=YOUR_APPLICATION_ID_HERE&scope=bot+applications.commands&permissions=PERMISSIONS (
    Replace `YOUR_APPLICATION_ID_HERE` with the application ID and replace `PERMISSIONS` with the required permissions your bot needs that it can be get at the bottom of a this page:

     https://discord.com/developers/applications/YOUR_APPLICATION_ID_HERE/bot)


**Step 2: Set Up Your Project**

    At first **clone** + **open** a folder with this project, and then:

    Initialize a new Node.js project:

    **npm init -y**

    Install the discord.js library:

    **npm install discord.js**

**Step 3: Run Your Bot**

    In your terminal, run the following command to start your bot:

    **node index.js** (that's like a 'python main.py')

    You should see Bot is online! in your terminal.

    Go to your Discord server and type p!ping in any channel where the bot has access. The bot should respond with Pong! and ping in ms.


## Important

Open file **config.json** and insert inside your token and prefix, it's necessary for setup.

## Issues or Questions

If you have any issues or questions of how to code a specific command, you can join my Discord server [here](https://discord.gg/UeK8U7dD). Of course I'm not very active user of Discord, but maybe we can create a nice server ahaha.

## To-Do list

- [ ] Add more commands as kick, ban/unban, say, mute/unmute etc.
- [ ] Better README
