const Discord = require("discord.js");
const data = require("quick.db");

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if (message.author.id !== message.guild.owner.user.id)
    return message.reply(
      " <a:839882697463693322:1117064465737863199> Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!"
    );
  const sistem = await data.fetch(`spam.${message.guild.id}`);
  if (!sistem)
    return message.channel
      .send(
        nn.setDescription(
          ` <a:839882697463693322:1117064465737863199> Spam koruma zaten aktif değil.`
        )
      )
      .then((a) => a.delete({ timeout: 10000 }));

  data.delete(`spam.${message.guild.id}`);
  return message.channel
    .send(
      nn
        .setTitle(
          `<a:9582dsicordveriyblack:1110581570689044581> İşlem başarılı!`
        )
        .setColor(0x36393f)
        .setDescription(
          ` <a:9582dsicordveriyblack:1110581570689044581> Spam koruma başarıyla kapatıldı.`
        )
    )
    .then((a) => a.delete({ timeout: 10000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [
    "spamkapat",
    "spam-koruma-kapat",
    "spam-korumakapat",
    "spamkoruma-kapat",
  ],
  permLevel: 0,
};

exports.help = {
  name: "spam-kapat",
};
