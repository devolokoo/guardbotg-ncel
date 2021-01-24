const Discord = require('discord.js');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '')
.setDescription(`>>> ${client.user} kullanırken lütfen \`@${client.user.username}\` rolünü en yukarıda tutunuz!

**Bot Daveti İçin :**
[Buraya Tıkla](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=805314622)

**QualityJailbreak Sunucumuz İçin:**
[Buraya tıkla](https://discord.gg/Bj8zTgR45T)

**QualityAim Sunucumuz:**
[Buraya Tıkla](https://discord.gg/KH62bxJr8Y),
\`\`\`- JailBreak Sunucumuz: discord.gg/Bj8zTgR45T              - Aim Sunucumuz İçin: discord.gg/KH62bxJr8Y\`\`\``));
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'davet'
};