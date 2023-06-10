const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
exports.run = (client, message, args, member) => {
  const yardım = new Discord.MessageEmbed()
    .setAuthor(`quazzer Yardım Menüsü`, client.user.avatarURL())
    .setColor("0x36393F")
    .setThumbnail(client.user.avatarURL())
    .setDescription(
      `• **Hey!** <@${
        message.author.id
      }> **beni kullandığın için teşekkür ederim!**\n •  **Prefixim:** **!-**\n • Dilim: **TR** <a:trkiyem:1101900479346245744>\n • Üyelik durumu: ${
        db.has(`üyelikk_${message.author.id}`, "üyelik")
          ? `**Gold üye!**`
          : `**Normal üye!**`
      }`
    )
    .addField(
      " • Kategoriler:",
      `> <a:9582dsicordveriyblack:1110581570689044581> [!-kullanıcı](https://amber-pyrite-polo.glitch.me/komutlar.html): **Kullanıcı yardım menüsünü gösterir.**\n > <a:5470redverifiedcheck:1110582718045098054> [!-moderasyon](https://amber-pyrite-polo.glitch.me/komutlar.html): **Moderasyon yardım menüsünü gösterir.**\n > <a:6832disocrdverifywhite:1110596661840978060> [!-kayıtsistemi](https://amber-pyrite-polo.glitch.me/komutlar.html): ** Kayıt sistemi yardım menüsünü gösterir.**\n > <a:3891discordverifypastelblue:1110582686399086706> [!-korumasistemi](https://amber-pyrite-polo.glitch.me/komutlar.html): ** Koruma sistemi menüsünü gösterir.**\n > <a:7312peachverify:1110596678442037288> [!-logosistemi](https://amber-pyrite-polo.glitch.me/komutlar.html): ** Logo sistemi yardım menüsünü gösterir.**\n > <a:8111discordverifypurple:1110596689150099556> [!-çekilişsistemi](https://amber-pyrite-polo.glitch.me/komutlar.html): ** Çekiliş sistemi yardım menüsünü gösterir.**`
    )
    .addField(" • quazzer:", "**makinalaşmak istiyorum** hurhuruhuuuhhuurur")

    .addField(
      " • Linkler:",
      "• [Davet Et](https://discord.com/api/oauth2/authorize?client_id=1107321984490152026&permissions=8&scope=applications.commands%20bot) • [Destek Sunucusu](https://discord.gg/bhZFPuBS) • [Web Site](https://amber-pyrite-polo.glitch.me) •"
    )
    .setImage("")
    .setFooter("quazzer", message.author.avatarURL())
    .setTimestamp();
  message.channel.send(yardım);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y", "help", "h"],
  permLevel: 0,
};

exports.help = {
  name: "yardım",
  description: "quazzer",
  usage: "quazzer",
};
