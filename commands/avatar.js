const Discord = require('discord.js');
const embed = new Discord.MessageEmbed();

module.exports.run = async(bot, message, args) => {

    if (!message.mentions.users.first()) {
        embed.setTitle("Here's Your Avatar");
        embed.setColor('0xa117f2');
        embed.setFooter(`Executed By ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }));
        embed.setTimestamp();
        embed.setImage(message.author.displayAvatarURL({ dynamic: true }));
        message.channel.send(embed);
    } else {
        let user = message.mentions.users.first();
        embed.setTitle(`Here is ${user.username}'s Avatar`);
        embed.setColor('0xa117f2');
        embed.setFooter(`Executed By ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }));
        embed.setTimestamp();
        embed.setImage(user.displayAvatarURL({ dynamic: true }));
        message.channel.send(embed);
    }
}

module.exports.config = {
    name: "avatar",
    aliases: ['av']
}