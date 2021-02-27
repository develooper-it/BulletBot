require('dotenv').config()
const ytdl = require('ytdl-core');
const Discord = require('discord.js');
const client = new Discord.Client({
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

        let ballembed = new Discord.MessageEmbed()
        .setColor(0x000000)
        .setDescription(`Ti ci saluto !`)
        .attachFiles(["https://thumbs.gfycat.com/AlarmingImpassionedAsiandamselfly-small.gif"])
        msg.channel.send(ballembed);

    }

})



client.login(process.env.BOT_TOKEN)