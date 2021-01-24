const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://media.discordapp.net/attachments/780135981989888000/780151461295685632/ezgif.com-gif-maker_3.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`\`\`\`CloudUP Diğer Kullanabileceğin Komutlar Aşağıda Yer Almakta.\`\`\`

🐦 \`${client.ayarlar.prefix}avatar\`
**DeVoLoKo BOT Kullanıcının profilinde ki fotoğrafı gösterir**

📖 \`${client.ayarlar.prefix}duyuru\`
**Yazı içeriğini oluşturabilirsin**

🐱 \`${client.ayarlar.prefix}afk\`
**Cihaz başında olmadığınız süre için kullanırsın**

☁️ \`${client.ayarlar.prefix}davet\`
**DeVoLoKo BOT bağlantılarını gönderir**

📋 \`${client.ayarlar.prefix}kurallar\`
**DeVoLoKo BOT hazır tema ile kurallarınızı yerleştirir**

🌟 \`${client.ayarlar.prefix}yavaş-mod\`
**DeVoLoKo BOT üyelerinizin belirlediğiniz sürede bir mesaj yazmasını sağlar**

🔞 \`${client.ayarlar.prefix}nsfw\`
**Cinsel içerikler içeride seni bekliyor**

🎲 \`${client.ayarlar.prefix}oyunlar\`
**Eğlenceye kendini kaptırma**

🔐 \`${client.ayarlar.prefix}kanal-kilit\` **&** \`${client.ayarlar.prefix}kilit-aç\`
**Kanalı kilitlemenize yarar**

❕ \`${client.ayarlar.prefix}çek [@etiket]\` **|** \`${client.ayarlar.prefix}kes [@etiket]\` **|** \`${client.ayarlar.prefix}git [@etiket]\`
**Belirli sesli kanalda ki kullanıcıyı yanına çekmeni sağlar ve kişiyi sesten atmanı sağlar. Seste yanına gitmeni sağlar**

💐 \`${client.ayarlar.prefix}rol-renk\`
**DeVoLoKo BOT Telefon kullananlar için Rol Renk değiştirme**

🗑 \`${client.ayarlar.prefix}sil [100]\`
**DeVoLoKo BOT bulunduğunuz kanaldaki mesajları siler**

🗑 \`${client.ayarlar.prefix}temizle [100]\`
**DeVoLoKo BOT etiketlediğiniz kullanıcının, etiketledğiniz kanaldaki mesajlarını siler**

🦋 \`${client.ayarlar.prefix}reboot\`
**DeVoLoKo BOT yeniden başlatılır**`).setThumbnail('https://media.discordapp.net/attachments/780135981989888000/780151461295685632/ezgif.com-gif-maker_3.gif'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['other'],
  permLevel: 0
}

exports.help = {
  name: 'diğer'
};