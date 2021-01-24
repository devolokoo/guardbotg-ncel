const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }
let images = ['https://media.discordapp.net/attachments/780135981989888000/780151461295685632/ezgif.com-gif-maker_3.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001')
.setDescription(`**DeVoLoKo Yardım Menüsüne Hoş Geldin Dostum :innocent:

🐝 \`${client.ayarlar.prefix}kayıt-içerik\`

> Kayıt, Kutulu \`&\` Kutusuz, Diğer, Tag rol,
> Koruma, Say, Aktiflik, Mesaj tag

🔥 \`${client.ayarlar.prefix}nsfw\` Menüsünde neler var?

> Nsfw Kanal Oluşturulmadan Çalışmamaktadır!!!
> anal, 4k, ass, pgif, hentai, pussy, thigh

🦋 \`${client.ayarlar.prefix}yardım2\` Menüsünde neler var?

> Mute, Karantina, Ban, Toplu rol, Sayaç
> Otorol, Kısıtlamalar

🐝 \`${client.ayarlar.prefix}diğer\` Menüsünde neler var?

> Oyunlar, Kullanıcı Avatar Bakma, Çek, Sil, Kanal-Kilit, kurallar,
> Daha Bir Çok Komut Bulunmakta

🔥 \`${client.ayarlar.prefix}yardım3\` Menüsünde neler var?

> Yasak tag, Oto isim, Komut mesaj, Fake hesap, 
> Sunucu tema, Kanal arındır \`&\` Rol arındır



`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/766704866894544947/773553609098657842/LOGO_2.png').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['y', 'help'],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};