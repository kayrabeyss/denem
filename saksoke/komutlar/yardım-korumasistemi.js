const WestraDiscord = require("discord.js");
const WestraClient = new WestraDiscord.Client();
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;
let gif = `https://media.discordapp.net/attachments/748509258362126377/1097178208845189231/70.gif`;

exports.run = (client, message) => {
  const WestraEmbed = new WestraDiscord.MessageEmbed()
    .setColor(0x36393f)
    .setAuthor(`${client.user.username} | Koruma Sistemi Yardım Menüsü`)
    .setDescription(
      `
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> ban-koruma #kanal** \n-> Ban koruma sistemini açar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> ban-koruma-sıfırla** \n-> Ban koruma sistemini sıfırlar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> kanal-koruma #kanal** \n-> Kanal koruma sistemini açar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> kanal-koruma-sıfırla** \n-> Kanal koruma sistemini sıfırlar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> rol-koruma #kanal** \n-> Rol koruma sistemini açar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> rol-koruma-sıfırla** \n-> Rol koruma sistemini sıfırlar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> spam-koruma** \n-> Spam koruma sistemini açar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> spam-koruma-kapat** \n-> Spam koruma sistemini kapatır.`
    )
    .setFooter(`quazzer`)
    .setTimestamp()
    .setImage(gif);
  message.channel.send(WestraEmbed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0,
};

exports.help = {
  name: "korumasistemi",
  description: "Bot ile ilgili bilgi verir.",
  usage: "bilgi",
};
