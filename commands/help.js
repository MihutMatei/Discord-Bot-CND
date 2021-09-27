module.exports = {
    name: 'help',
    description: "test",
    execute(message, args){
        message.channel.send('```-tema (afiseaza tema sezonului FTC curent)```');
        message.channel.send('```-ping (test*)```');
    }
}