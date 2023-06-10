const WestraDiscord = require("discord.js");
const WestraClient = new WestraDiscord.Client();
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = (client, message) => {
  const WestraEmbed = new WestraDiscord.MessageEmbed()
    .setColor(0x36393f)
    .setAuthor(`${client.user.username} | Kullanıcı Yardım Menüsü`)
    .setDescription(
      `
 <a:9582dsicordveriyblack:1110581570689044581> **davet** \n-> Botu davet edersiniz.
 <a:9582dsicordveriyblack:1110581570689044581> **$shardbilgi** \n-> Botun shard bilgilerini gösterir.
 <a:9582dsicordveriyblack:1110581570689044581> **pp** \n-> Etiketlediğiniz kişinin avatarını gösterir.
 <a:9582dsicordveriyblack:1110581570689044581> **randompp** \n-> Botun ekli olduğu sunuculardaki her hangi birinin avatarını atar.
 <a:9582dsicordveriyblack:1110581570689044581> **öneri** \n-> Bota öneri belirtirsiniz.
 <a:9582dsicordveriyblack:1110581570689044581> **istatistik** \n-> Botun istatistiğini gösterir.
 <a:9582dsicordveriyblack:1110581570689044581> **sonmesaj** \n-> Yazdığınız son mesajı gösterir.
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
  name: "kullanıcı",
  description: "Bot ile ilgili bilgi verir.",
  usage: "bilgi",
};
