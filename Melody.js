const Discord = require('discord.js');
const bot = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const embed = new Discord.MessageEmbed();
const config = require('./settings.json');
const { loadCommands } = require('./utils/loadCommands');
const DisTube = require('distube');

bot.on('message', msg => {
    let link = 'http';
    if (msg.content.startsWith(link)) {
        embed.setTitle('**Links Not Allowed**');
        embed.setColor(0xff0000);
        embed.setDescription("**Dude Links Not Allowed Here\n\n I Hope You Unterstand And Don't Want to be Banned**");
        msg.channel.send(embed);
    }
});

bot.distube = new DisTube(bot, { searchSongs: false, emitNewSongOnly: true });
bot.distube
    .on("playSong", (message, queue, song) => {
        embed.setTitle('Playing');
        embed.setColor('0xa117f2');
        embed.setTimestamp();
        embed.setFooter(`Requested By: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }));
        embed.setDescription(`\`${song.name}\` - \`${song.formattedDuration}\``);
        message.channel.send(embed);
    })
    .on("addSong", (message, queue, song) => {
        embed.setTitle('Added');
        embed.setTimestamp();
        embed.setColor('0xa117f2');
        embed.setFooter(`Added By: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }));
        embed.setDescription(`${song.name} - \`${song.formattedDuration}\``);
        message.channel.send(embed);
    })
    .on("playList", (message, queue, playlist, song) => {
        embed.setTitle('Playlist');
        embed.setColor('0xa117f2');
        embed.setTimestamp();
        embed.setFooter(`Requested By: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }));
        embed.setDescription(`\`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`);
        message.channel.send(embed);
    })



require('./utils/loadEvents')(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

loadCommands(bot);

bot.login(config.token);