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
    let kanal = await db.fetch(`rolk_${message.guild.id}`);
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor(0x36393f)
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(
          `<a:839882697463693322:1117064465737863199> Rol koruma sistemi zaten ayarlanmamış!`
        );
      message.channel.send(embed);
      return;
    }
    db.delete(`rolk_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor(0x36393f)
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(
        `<a:9582dsicordveriyblack:1110581570689044581>> Rol koruma sistemi sıfırlandı!`
      );
    message.channel.send(embed);
    return;
  } else {
    let kanal = await db.fetch(`rolk_${message.guild.id}`);
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor(0x36393f)
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(
          `<a:839882697463693322:1117064465737863199> Rol koruma sistemi zaten ayarlanmamış!`
        );
      message.channel.send(embed);
      return;
    }
    db.delete(`rolk_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor(0x36393f)
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(
        `<a:9582dsicordveriyblack:1110581570689044581> Rol koruma sistemi sıfırlandı!`
      );
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["role-protection-reset"],
  permLevel: 3,
};

exports.help = {
  name: "rol-koruma-sıfırla",
  description: "rol-koruma-sıfırla",
  usage: "rol-koruma-sıfırla",
};
