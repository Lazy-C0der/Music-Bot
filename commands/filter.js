module.exports.run = async(message, bot, args) => {
    if (!message.member.voice.channel) {
        message.channel.send("You Need To Join Voice Channel");
        console.log("here is error");
    } else {
        console.log("working from file");
        if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(message)) {
            let filter = bot.distube.setFilter(message);
            message.channel.send("Current queue filter: " + (filter || "Off"));
        }

    }

}


module.exports.config = {
    name: "filter",
    aliases: ['f']
}