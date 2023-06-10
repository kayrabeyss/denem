const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      ` <a:839882697463693322:1117064465737863199> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`
    );
  const rol = db.fetch(`otoRL_${message.guild.id}`);
  if (!rol)
    return message.reply(
      ` <a:9582dsicordveriyblack:1110581570689044581> Otorol sistemi zaten kapalı.`
    );

  message.channel.send(
    ` <a:9582dsicordveriyblack:1110581570689044581> Otorol sistemi başarıyla sıfırlandı.`
  );

  db.delete(`otoRL_${message.guild.id}`);
  db.delete(`otoRK_${message.guild.id}`);
  db.delete(`otoRM_${message.guild.id}`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["otorol-sıfırla"],
};

exports.help = {
  name: "otorol-kapat",
  description: "Türkiyenin Saatini Gösterir",
  usage: "gç",
};
