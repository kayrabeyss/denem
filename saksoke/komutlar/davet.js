const AsreaperDiscord = require("discord.js");
const AsreaperClient = new AsreaperDiscord.Client();
exports.run = (client, message) => {
  const AsreaperEmbed = new AsreaperDiscord.MessageEmbed();
  AsreaperEmbed.setColor(0x36393f);
  AsreaperEmbed.setDescription(
    ` quazzerı davet etmek için [buraya](https://discord.com/api/oauth2/authorize?client_id=1107321984490152026&permissions=8&scope=applications.commands%20bot) tıkla!`
  );
  message.channel.send(AsreaperEmbed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0,
};

exports.help = {
  name: "davet",
  description: "Bot ile ilgili bilgi verir.",
  usage: "bilgi",
};
