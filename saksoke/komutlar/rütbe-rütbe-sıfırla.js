const Discord = require("discord.js");
const Database = require("../Helpers/Database");

exports.run = async (client, message, args) => {
  if (
    !message.member.hasPermission("ADMINISTRATOR") &&
    !message.member.hasPermission("MANAGE_GUILD")
  )
    return message.reply(
      " <a:839882697463693322:1117064465737863199> Yetkin Yok!"
    );
  const db = new Database("./Servers/" + message.guild.id, "Rewards");
  const db2 = new Database("./Servers/" + message.guild.id, "Invites");
  db.set("rewards");
  message.channel.send("Rütbeler Sıfırlandı");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};
exports.help = {
  name: "rütbe-sıfırla",
  description: "Logo Yaparsınız",
  usage: "m-logo <yazı>",
};
