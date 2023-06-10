exports.run = (client, message) => {
  let db = require("quick.db");
  let Discord = require("discord.js");
  let reklam = db.fetch(`reklam.${message.guild.id}.durum`);
  const member3 = new Discord.MessageEmbed()
    .setColor(0x36393f)
    .setDescription(
      ` <a:839882697463693322:1117064465737863199> **HATA**  - Bu sunucuda yetkili değilsin.`
    );
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.channel.send(member3);
  const member = new Discord.MessageEmbed()
    .setColor(0x36393f)
    .setDescription(
      ` <a:839882697463693322:1117064465737863199> **HATA**  - Bir kanal etiketle.`
    );
  if (reklam) {
    let kanal = message.mentions.channels.first();
    if (!kanal) return message.channel.send(member);
    db.set(`reklam.${message.guild.id}.kanal`, kanal.id);
    message.channel
      .send(` **Başarılı ile reklam log kanalı ayarlandı.** `)
      .then((l) => {
        l.delete({ timeout: 5000 });
      });
  } else {
    message.channel
      .send(
        ` <a:839882697463693322:1117064465737863199> **Reklam engel açık değil.**`
      )
      .then((l) => {
        l.delete({ timeout: 5000 });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reklam-log"],
  permLevel: 0,
};

exports.help = {
  name: "reklamlog",
  description: "quazzer",
  usage: "quazzer",
};
