const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = (client) => {
  setInterval(function () {}, 8000);
  var msgArray = ["quazzer", "quazzer Önderliğinde", "Her Daim!", "prefix:!-"];

  setInterval(() => {
    var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
    client.user.setActivity(`${msgArray[rastgeleOyun]}`, {
      type: "STREAMING",
      url: "https://www.twitch.tv/quazzer9999",
    });
  }, 5000);
  console.log(`quazzer başarıyla giriş yaptı.`);
};
