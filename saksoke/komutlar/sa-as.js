const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      `<a:839882697463693322:1117064465737863199> Bu komutu kullanabilmek için \`MANAGE_MESSAGES\` yetkisine sahip olmalısın!`
    );
  if (args[0] === "aç") {
    db.set(`saas_${message.guild.id}`, true);
    message.channel.send(
      "<a:9582dsicordveriyblack:1110581570689044581> Başarılı bir şekilde SA-AS sistemi `açıldı!`"
    );
    db.set(`saas_${message.guild.id}`, "acik");
    return;
  }
  if (args[0] === "kapat") {
    db.delete(`saas_${message.guild.id}`);
    message.channel.send(
      "<a:9582dsicordveriyblack:1110581570689044581> Başarılı bir şekilde SA-AS sistemi `kapatıldı!`"
    );
    db.set(`saas_${message.guild.id}}`, "kapali");
    return;
  }
  message.channel.send(
    "<a:839882697463693322:1117064465737863199> Lüten `aç` ya da `kapat` yazın!"
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "sa-as",
  description: "reklam-engel",
  usage: "reklam-engel",
};
