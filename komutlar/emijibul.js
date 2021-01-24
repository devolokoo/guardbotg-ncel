const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message, args) => {
if(!message.member.hasPermission('MANAGE_EMOJIS')) return message.channel.send('Bu komutu kullanabilmek için `Emojileri Yönet` yetkisine sahip olmalısın.');

let emote = client.emojis.cache.find(emojilist => emojilist.name == args[0])
if(!args[0]) return message.channel.send('**Dostum Böyle Bir Emoji Yoq**')
message.channel.send(`Hey ${message.author}! Çok Şanslısın Böyle Bir Emoji Buldum Buyur: ${emote.url}`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['emojibul', 'emojiara'],
  permLevel: 0
}

exports.help = {
  name: 'emoji-bul'
}