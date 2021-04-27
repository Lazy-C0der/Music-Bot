const Discord = require('discord.js');
const embed = new Discord.MessageEmbed();

module.exports.run = async(bot, message, args) => {
    embed.setTitle("It's Melody");
    embed.setColor('#bc13fe');
    embed.setDescription(`**My Prefix: ..\n\n Music Commands**\n
    \`play\` - **play[song name OR song link]**
    \`queue\` - **displays all songs in queue list**
    \`skip\` - **plays next song in queue if there is no song in queue still plays song based on current song**
    \`filter\` - **filter[filter name]**
    \`stop\` - **Disconnects Melody From VC**

    **Filters**

    \`3d\`
    \`bassboost\`
    \`echo\`
    \`karaoke\`
    \`nightcore\`
    \`vaporwave\`

    **invite**


    `);
    embed.setTimestamp();
    embed.setThumbnail("https://darkapi.firebaseapp.com/image/melody.jpg");
    message.channel.send(embed);
}

module.exports.config = {
    name: "command",
    aliases: ['cmd']
}