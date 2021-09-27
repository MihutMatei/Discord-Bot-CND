module.exports = {
    name: 'react',
    description: "distribuire de rol automata bazata pe reactii",
    async execute(message, args, Discord, client){
        const channel ='891808001026031616';
        const mecanicaTeamRole = message.guild.roles.cache.find(role => role.name === "mecanica");
        const programareTeamRole = message.guild.roles.cache.find(role => role.name === "programare");
        const prTeamRole = message.guild.roles.cache.find(role => role.name === "pr");
        const design3dTeamRole = message.guild.roles.cache.find(role => role.name === "Design3d");

        const mecanicaEmoji = '⚙️';
        const programareEmoji = '💻';
        const prEmoji = '📓';
        const design3dEmoji = '🖨️';
        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('alege-ti filiera!')
        .setDescription('Alege-ti rolurile corespunzator cu ce doresti/faci in echipa! \n\n'
            +`${mecanicaEmoji} pentru mecanica\n`
            +`${programareEmoji} pentru programare\n`
            +`${design3dEmoji} pentru 3D design\n`
            +`${prEmoji} pentru pr` );

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(mecanicaEmoji);
        messageEmbed.react(programareEmoji);
        messageEmbed.react(prEmoji);
        messageEmbed.react(design3dEmoji);

        client.on('messageReactionAdd', async (reaction, user) =>{
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === mecanicaEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(mecanicaTeamRole);
                    }
                    if (reaction.emoji.name === programareEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(programareTeamRole);
                    }
                    if (reaction.emoji.name === prEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(prTeamRole);
                    }
                    if (reaction.emoji.name === design3dEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(design3dTeamRole);
                    }
                    else {
                        return;
                    }
            }
        });
        client.on('messageReactionRemove', async (reaction, user) =>{
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === mecanicaEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(mecanicaTeamRole);
                    }
                    if (reaction.emoji.name === programareEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(programareTeamRole);
                    }
                    if (reaction.emoji.name === prEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(prTeamRole);
                    }
                    if (reaction.emoji.name === design3dEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(design3dTeamRole);
                    }
                    else {
                        return;
                    }
            }
        });
       
    }
}