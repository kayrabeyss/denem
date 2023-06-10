const WestraDiscord = require("discord.js");
const WestraClient = new WestraDiscord.Client();
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = (client, message) => {
  const WestraEmbed = new WestraDiscord.MessageEmbed()
    .setColor(0x36393f)
    .setAuthor(`${client.user.username} | Kayıt Sistemi Yardım Menüsü`)
    .setDescription(
      ` **${prefix} <a:9582dsicordveriyblack:1110581570689044581> alınacak-rol @rol** \n-> Kayıt edilen kişiden alınacak rolü ayarlar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> alınacak-rol sıfırla** \n-> Kayıt edilen kişiden alınacak rolü sıfırlar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> kayıt-kanal #kanal** \n-> Kayıtın yapılacağı kanalı belirlersiniz.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> kayıt-kanal sıfırla** \n-> Kayıtın yapılacağı kanalı sıfırlarsınız.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> kayıt-hg #kanal** \n-> Kayıt hoş geldin kanalını ayarlarsınız.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> kayıt-hg sıfırla** \n-> Kayıt hoş geldin kanalını sıfırlarsınız.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> kayıt-yetkili @rol** \n-> Kayıt edebilecek yetkiyi ayarlar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> kayıt-yetkili sıfırla** \n-> Kayıt edebilecek yetkiyi sıfırlar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> erkek-rol @rol** \n-> Kayıt edilince verilecek erkek rolü ayarlar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> erkek-rol sıfırla** \n-> Kayıt edilince verilecek erkek rolünü sıfırlar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> kız-rol @rol** \n-> Kayıt edilince verilecek kız rolü ayarlar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> kız-rol sıfırla** \n-> Kayıt edilince verilecek kız rolünü sıfırlar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> erkek @kullanıcı isim yaş** \n-> Erkekleri kayıt etmeye yarar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> kız @kullanıcı isim yaş** \n-> Kızları kayıt etmeye yarar.
`
    )
    .setTimestamp();
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
  name: "kayıtsistemi",
  description: "Bot ile ilgili bilgi verir.",
  usage: "bilgi",
};
