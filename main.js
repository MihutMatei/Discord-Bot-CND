const Discord = require('discord.js');

//const { Client, Intents} = require('discord.js');
//const client = new Discord.Client({ intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS , Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS , Intents.FLAGS.GUILD_INTEGRATIONS , Intents.FLAGS.GUILD_WEBHOOKS , Intents.FLAGS.GUILD_MESSAGES ,Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES,Intents.FLAGS.GUILD_MESSAGE_TYPING,Intents.FLAGS.DIRECT_MESSAGES,Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,Intents.FLAGS.DIRECT_MESSAGE_TYPING] }, {partials: ["MESSAGE","CHANNEL","REACTION" ]});

const client =new Discord.Client({partials: ["MESSAGE","REACTION","CHANNEL"]})

const fs = require('fs');

client.commands = new Discord.Collection();

const commabdFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

for(const file of commabdFiles)
{
    const command =require(`./commands/${file}`)

    client.commands.set(command.name, command);
}
const prefix = "-";

client.once('ready', () =>{
    console.log('bot-robotica is online!');
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = gulidMember.guild.roles.cache.find(role => role.name === 'membru');

    guildMember.roles.add(welcomeRole)
    guildMember.guild.channels.cache.get('860943776246923347').send(`Bine ai venit in echipa de robotica <@${guildmember.user.id}>`)
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if(command === 'ping')
        {
            client.commands.get('ping').execute(message, args);
        }
    else if(command ==='tema')
        {
            client.commands.get('tema').execute(message, args);
        }
    else if(command ==='help')
        {
            client.commands.get('help').execute(message, args);
        }
    else if(command === 'react')
        {
            client.commands.get('react').execute(message, args, Discord, client);
        }
     });














var port = process.env.PORT || 8080;

client.login('ODkxNzIwNjI1OTY0NjA1NDUx.YVCdjA.fzVk0BlthyZCeFyHDhPG2phOpXQ');
