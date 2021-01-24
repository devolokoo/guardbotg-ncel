const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const rabel = require('../gweep/rabel.json');
var prefix = rabel.prefix;

module.exports = async client => {

    client.user.setActivity(``, { type: "PLAYING" });
  client.user.setStatus("online");
  console.log("Aktif!")
};

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [
        "Created by. DeVoLoKo",
        "q!yardım",
        "💪 7/24 Aktif!",  
        "💡 q!davet | Botumuzu ekleyin",
        "👨 Yüzlerce Kullanıcı!",
        "🌍 Onlarca Sunucuda Hizmet!",
        "q!yardım 🔥 + q!davet 🔥 + q!jail-sistem"
    ];
    setInterval(function() {
        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
        client.user.setGame(oyun[random], "https://rapp");
        }, 2 * 2500);
}