  module.exports = bot => {
      console.log('Melody is online!')
      bot.user.setActivity("Prefix '..'", {
          type: "WATCHING"
      })

  }