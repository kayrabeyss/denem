const WestraDiscord = require("discord.js");
const WestraClient = new WestraDiscord.Client();
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = (client, message) => {
  const WestraEmbed = new WestraDiscord.MessageEmbed()
    .setColor(0x36393f)
    .setAuthor(`${client.user.username} | Logo Sistemi Yardım Menüsü`)
    .setDescription(
      `
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> arrow** \n-> Ok şeklinde logo yapar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> gold** \n-> Altın şeklinde logo yapar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> green** \n-> Yeşil şeklinde logo yapar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> grafiti** \n-> Graffiti şeklinde logo yapar.
`
    )
    .setTimestamp();
  message.channel.send(WestraEmbed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["logo"],
  kategori: "Bot",
  permLevel: 0,
};

exports.help = {
  name: "logosistemi",
  description: "Bot ile ilgili bilgi verir.",
  usage: "bilgi",
};
