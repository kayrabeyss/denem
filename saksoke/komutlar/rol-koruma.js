const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  if (message.author.id !== message.guild.owner.user.id)
    return message.reply(
      "<a:839882697463693322:1117064465737863199> Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!"
    );
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "c?";
  if (kontrol == "agayokaga") {
    let kanal = message.mentions.channels.first();
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor(0x36393f)
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(
            `<a:839882697463693322:1117064465737863199> Lütfen bir log kanalı etiketleyiniz!`
        );
      message.channel.send(embed);
      return;
    }
    db.set(`rolk_${message.guild.id}`, kanal.id);
    const embed = new Discord.MessageEmbed()
      .setColor(0x36393f)
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(
        `<a:9582dsicordveriyblack:1110581570689044581> Rol koruma log kanalı; ${kanal} olarak ayarlandı!`
      );
    message.channel.send(embed);
    return;
  } else {
    let kanal = message.mentions.channels.first();
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor(0x36393f)
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(
          `<a:839882697463693322:1117064465737863199> Lütfen bir log kanalı etiketleyiniz!`
        );
      message.channel.send(embed);
      return;
    }
    db.set(`rolk_${message.guild.id}`, kanal.id);
    const embed = new Discord.MessageEmbed()
      .setColor(0x36393f)
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(
        `<a:9582dsicordveriyblack:1110581570689044581> Rol koruma log kanalı; ${kanal} olarak ayarlandı!`
      );
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["role-protection"],
  permLevel: 3,
};

exports.help = {
  name: "rol-koruma",
  description: "rol-koruma",
  usage: "rol-koruma",
};
