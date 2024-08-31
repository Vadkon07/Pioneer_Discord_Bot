const Discord = require("discord.js");
const fs = require('fs');
const { EmbedBuilder } = require('discord.js');

const config = JSON.parse(fs.readFileSync('config.json', 'utf-8'));

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log('Ready!');
});

// Help menu embed
const helpEmbed = new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle('Help Menu')
    .setDescription('List of available commands')
    .addFields(
        { name: 'p!ping', value: 'Check the bot\'s ping.' },
        { name: 'p!help', value: 'Display the help menu.' },
        { name: 'p!serverinfo', value: 'Get information about the server.' },
        { name: 'p!userinfo', value: 'Get information about your user.' }
    )
    .setFooter({ text: 'Bot created by Vadkon' });

// Listen for messages
client.on('messageCreate', message => {
    if (message.content === 'p!ping') {
        message.channel.send('Ping!').then(sent => {
            const ping = sent.createdTimestamp - message.createdTimestamp;
            sent.edit(`Ping is ${ping}ms. Using **Acer Aspire 5250** as a server`);
        });
    } else if (message.content === 'p!help') {
        message.channel.send({ embeds: [helpEmbed] });
    } else if (message.content === 'p!serverinfo') {
        const { name, memberCount, createdAt } = message.guild;
        const serverinfoEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Server Info')
            .setDescription('Details about the server')
            .addFields(
                { name: 'Server name', value: name },
                { name: 'Total members', value: memberCount.toString() },
                { name: 'Created on', value: createdAt.toDateString() }
            )
            .setFooter({ text: 'Just look at a good weather today!' });
        message.channel.send({ embeds: [serverinfoEmbed] });
    } else if (message.content === 'p!userinfo') {
        const { username, id, createdAt } = message.author;
        const userinfoEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('User Info')
            .setDescription('Details about the user')
            .addFields(
                { name: 'Your username', value: username },
                { name: 'Your ID', value: id },
                { name: 'Account created on', value: createdAt.toDateString() }
            )
            .setFooter({ text: 'Just look at a good weather today!' });
        message.channel.send({ embeds: [userinfoEmbed] });
    }
});

client.login(config.token);

