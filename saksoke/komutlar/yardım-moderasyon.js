const WestraDiscord = require("discord.js");
const WestraClient = new WestraDiscord.Client();
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = (client, message) => {
  const WestraEmbed = new WestraDiscord.MessageEmbed()
    .setColor(0x36393f)
    .setAuthor(`${client.user.username} | Moderasyon Yardım Menüsü`)
    .setDescription(
      `
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> mod-log #kanal** \n-> Mod-log ayarlar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> mod-log sıfırla** \n-> Mod-log sıfırlar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> bansay** \n-> Sunucuda kaç banlanan üye olduğunu gösterir.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> ban @kullanıcı** \n-> Etiketlediğiniz kullanıcıyı banlar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> küfürengel** \n-> Küfür engel açar/kapatır.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> küfürlog #kanal** \n-> Küfür-log ayarlar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> reklamengel** \n-> Reklam engel açar/kapatır.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> reklamlog #kanal** \n-> Reklam-log ayarlar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> sa-as aç** \n-> SA-AS sistemini açar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> sa-as kapat** \n-> SA-AS sistemini kapatır.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> sil** \n-> Yazdığınız miktar kadar mesaj siler.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> say** \n-> Sunucu bilgilerini gösterir.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> oylama** \n-> Oylama yapar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> otorol-ayarla @rol #kanal** \n-> Otorol ayarlar.
**${prefix} <a:9582dsicordveriyblack:1110581570689044581> otorol-sıfırla** \n-> Otorol sıfırlar.
 **${prefix} <a:9582dsicordveriyblack:1110581570689044581> otorol-mesaj-ayarla** \n-> Otorol mesajı ayarlar.
 **${prefix}<a:9582dsicordveriyblack:1110581570689044581> otorol-mesaj-sıfırla** \n-> Otorol mesajı sıfırlar.
`
    )
    .setTimestamp();
  message.channel.send(WestraEmbed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mod"],
  kategori: "Bot",
  permLevel: 0,
};

exports.help = {
  name: "moderasyon",
  description: "Bot ile ilgili bilgi verir.",
  usage: "bilgi",
};
