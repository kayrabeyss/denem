const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete();
  let question = args.join(" ");
  let user = message.author.username;
  if (!question)
    return message.channel
      .send(
        new Discord.MessageEmbed()
          .setColor("BLUE")
          .setDescription(
            ` <a:839882697463693322:1117064465737863199> Yazı yazman gerek.`
          )
      )
      .then((m) => m.delete(5000));
  message.channel
    .send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        .setFooter("", client.user.displayAvatarURL())
        .addField(`**Oylama:**`, `**${question}**`)
    )
    .then(function (message) {
      message.react("<a:9582dsicordveriyblack:1110581570689044581>");
      message.react("<a:839882697463693322:1117064465737863199>");
    });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["anket"],
  permLevel: 2,
};
exports.help = {
  name: "oylama",
  description: "Oylama yapmanızı sağlar.",
  usage: "oylama <oylamaismi>",
};
