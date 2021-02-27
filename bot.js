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

    const welcomeChannel = msg.guild.channels.cache.find(channel => channel.name === 'the channel name here, make sure the ')
    welcomeChannel.send('Input your message here, if you want an embed then do a "let msgEmbed = new Discord.messageEmbed  /  and input the title and all the embed stuff, customize the message as much as you want!"')


    // Optional Part (you can modify those extra things if you'd like!) :D
    let msgEmbed = new Discord.MessageEmbed()
    .setTitle (`This is a title for a test`)
    // welcomeChannel.send(msgEmbed) | (that's commented so you know to use it only if you want an embed and also don't delete the other "welcomeChannel.send" just change it in there and say "welcomeChannel.send(msgEmbed)" and define the msgEmbed variable as a let and define it above the "welcomeChannel.send" so the bot will check and see that it's defined so errors won't happen!
    if (msg.client) return; // checks if it's a bot that joined so the channel won't be spammed with "*Discord Bot* has joined the server" and stuff like that, so check that.
    const newbieRole = msg.roles.cache.find(role => role.name === 'Role Name here') // that was to define the role to give newbies (you can name the variable however you want that doesn't matter!)
    msg.roles.add(newbieRole.id) // this will add the role to that member!
    // All the things that are under the "Optional Part" are 100 % Optional! No Requirement to use those, just use it if you want and they won't affect the welcome message at all!
    }
})



client.login(process.env.BOT_TOKEN)