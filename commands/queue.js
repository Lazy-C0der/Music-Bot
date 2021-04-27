const Discord = require('discord.js');
const embed = new Discord.MessageEmbed();

module.exports.run = async(bot, message, args) => {
    if (!message.member.voice.channel) {
        message.channel.send('You must be in a voice channel to use this command.');
    } else {
        let queue = bot.distube.getQueue(message);
        if (queue) {
            embed.setTitle('Melody Current Queue')
            embed.setColor('0xa117f2');
            embed.setDescription(
                queue.songs.map((song, id) =>
                    `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
                ).slice(0, 10).join("\n"));
            embed.setTimestamp();
            message.channel.send(embed);
        } else if (!queue) {
            message.channel.send('queue is empty!');
        }
    }



}

module.exports.config = {
    name: "queue",
    aliases: ['q']
}