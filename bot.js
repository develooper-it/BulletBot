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
    if(msg.content == 'buonanotte'){
        msg.channel.send("Ti ci saluto !", {
            file: "https://thumbs.gfycat.com/AlarmingImpassionedAsiandamselfly-small.gif" // Or replace with FileOptions object
        });
    }
})



client.login(process.env.BOT_TOKEN)