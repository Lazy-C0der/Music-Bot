module.exports.run = async(bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

    let queue = await bot.distube.getQueue(message);

    if (queue) {
        bot.distube.stop(message)

        message.channel.send('Disconnected!')
    } else if (!queue) {
        message.channel.send("Not Playing Any Music, Nothing To Stop");
    };
}

module.exports.config = {
    name: "stop",
    aliases: ["dc"]
}