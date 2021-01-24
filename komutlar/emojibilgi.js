const Discord = require('discord.js')

exports.run = (bot, message, args) => {
if(!message.member.hasPermission('MANAGE_EMOJIS')) return message.channel.send('Bu komutu kullanabilmek için `Emojileri Yönet` yetkisine sahip olmalısın.');
let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;
    function Emoji(id) {
      return bot.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach((emoji) => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
      }
    });
    let Embed = new Discord.MessageEmbed()
      .setTitle(`${message.guild.name} Sunucusunun Emojileri:`)
      .setDescription(
        `\n**Hareketli Emojiler   [ ${Animated} ]**:\n${EmojisAnimated}\n\n**\nHareketsiz Emojiler [ ${EmojiCount} ]**:\n${Emojis}\n\n**Sunucudaki toplam emoji sayısı [ ${OverallEmojis} ] **`
      )
      .setColor(0x000000);
    message.channel.send(Embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['emojiinfo', 'emojibilgi'],
    permLevel: 0,
    kategori: 'sunucu'
}

exports.help = {
    name: 'emojiler',
    description: 'Sunucuda bulunan emojileri gösterir.',
    usage: 'emojiler'
}