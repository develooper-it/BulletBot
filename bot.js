require('dotenv').config()
const ytdl = require('ytdl-core');
const { Client, MessageEmbed } = require('discord.js');
const client = new Client({
    partials:["MESSAGE"]
})

client.on('ready', () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    
})


client.on('message', async msg =>{
    if(msg.content == 'ping'){
        msg.react('🤔')
        .then(console.log)
        .catch(console.error);
    }
    
})



client.login(process.env.BOT_TOKEN)