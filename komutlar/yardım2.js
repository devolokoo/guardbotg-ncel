const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }
let images = ['https://media.discordapp.net/attachments/780135981989888000/780151461295685632/ezgif.com-gif-maker_3.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Yardım 2 Menüsüne Hoş Geldin Dostum 😇**

**\`${client.ayarlar.prefix}mute-sistem\`
Chat ve Seste mute için güzel sistem

\`${client.ayarlar.prefix}jail-sistem\`
Etiketlediğiniz Üyeyi karantina altına al

❌ \`${client.ayarlar.prefix}ban-sistem\`
Etiketlediğiniz üyeyi sunucunuzdan yasaklarsınız

🌹 \`${client.ayarlar.prefix}toplu-rol-sistem\`
Toplu rol ile hem alıp hem de verebileceğiniz sistem

🌊 \`${client.ayarlar.prefix}sayaç-sistem\`**
**Giriş Çıkış**, **Sayaç** hem de **otomatik rol** aynı anda çalıştır

🛎️ **\`${client.ayarlar.prefix}kısıtlamalar\`**
**Selam, küfür, reklam, büyük harf,** içerikler vardır

❌ \`${client.ayarlar.prefix}koruma\`
• Rol silme koruma, Rol yöneticilik koruma,
• Kanal koruma & Kanal Geri Açma,
• Emoji koruma, Bot Koruma


`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/766704866894544947/773553609098657842/LOGO_2.png').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['y2', 'help2'],
  permLevel: 0
}

exports.help = {
  name: 'yardım2'
};