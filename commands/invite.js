const Discord = require('discord.js');
const embed = new Discord.MessageEmbed();

module.exports.run = async(bot, message, args) => {
    embed.setTitle("Invite");
    embed.setURL("https://discord.com/api/oauth2/authorize?client_id=831592201929752576&permissions=8&scope=bot");
    embed.setColor('#bc13fe');
    embed.setDescription('**Click ON Invite To Invite Me In Your Server**');
    embed.setTimestamp();
    embed.setThumbnail("https://darkapi.firebaseapp.com/image/melody.jpg");
    message.channel.send(embed);
}

module.exports.config = {
    name: "invite",
    aliases: ['']
}