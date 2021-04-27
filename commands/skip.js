module.exports.run = async(bot, message, args) => {
    if (!message.member.voice.channel) {

        message.channel.send('You must be in a voice channel to use this command.');

    } else {
        let queue = await bot.distube.getQueue(message);

        if (queue) {
            bot.distube.skip(message)

            message.channel.send('Playing Next Song');
        } else if (!queue) {
            message.channel.send("No Song In Queue!");
        }
    }
}

module.exports.config = {
    name: "skip",
    aliases: ["s"]
}