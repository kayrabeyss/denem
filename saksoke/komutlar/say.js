const westradiscord = require("discord.js");

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bilgi", "sunucubilgi", "sunucu-bilgi", "sb"],
  permLevel: 0,
  kategori: "bot",
};

exports.help = {
  name: "say",
  description: "quazzer",
  usage: "quazzer",
};
exports.run = async (client, message, args) => {
  const seskanallari = message.guild.channels.cache.filter(
    (c) => c.type === "voice"
  );
  let westracc = 0;
  let westrabroo = message.guild.members.cache.filter(
    (m) => !m.user.bot && m.user.presence.status !== "offline"
  ).size;
  let metinkanallari = message.guild.channels.cache.filter(
    (m) => m.type == "text"
  ).size;
  for (const [id, voiceChannel] of seskanallari)
    westracc += voiceChannel.members.size;
  const westraembed = new westradiscord.MessageEmbed()
    .setColor("0x36393F")
    .setTitle("quazzer - Say")
    .setFooter("quazzer")
    .setTimestamp().setDescription(`
<a:9582dsicordveriyblack:1110581570689044581> Toplam üye sayısı: **${
    message.guild.memberCount
  }**
<a:5470redverifiedcheck:1110582718045098054> Toplam çevrimiçi üye sayısı: **${westrabroo}**
<a:6832disocrdverifywhite:1110596661840978060> Toplam metin kanalı sayısı: **${metinkanallari}**
<a:3891discordverifypastelblue:1110582686399086706> Toplam ses kanalı sayısı: **${
    seskanallari.size
  }**
<a:7312peachverify:1110596678442037288> Toplam çevrimiçi durumda olan üye sayısı: **${
    message.guild.members.cache.filter((o) => o.presence.status === "online")
      .size
  }**
<a:8111discordverifypurple:1110596689150099556> Toplam boşta durumda olan üye sayısı: **${
    message.guild.members.cache.filter((i) => i.presence.status === "idle").size
  }**
<a:7485_verifiedorange:1110596682120433807> Toplam rahatsız etme durumda olan üye sayısı: **${
    message.guild.members.cache.filter((i) => i.presence.status === "dnd").size
  }**
`);
  message.channel.send(westraembed);
};
