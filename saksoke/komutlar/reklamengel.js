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
  if (reklam) {
    db.delete(`reklam.${message.guild.id}`);
    message.channel
      .send(
        `<a:9582dsicordveriyblack:1110581570689044581> **Başarılı ile reklam engel kapandı.**`
      )
      .then((l) => {
        l.delete({ timeout: 5000 });
      });
  } else {
    db.set(`reklam.${message.guild.id}.durum`, true);
    message.channel
      .send(
        ` <a:9582dsicordveriyblack:1110581570689044581> **Başarılı ile reklam engel açıldı.**`
      )
      .then((l) => {
        l.delete({ timeout: 5000 });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reklam-engel"],
  permLevel: 0,
};

exports.help = {
  name: "reklamengel",
  description: "quazzer",
  usage: "quazzer",
};
