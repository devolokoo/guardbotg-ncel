const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.delete();
message.channel.createWebhook(message.author.username, {avatar: message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/779721685288484904/785593688666538024/quality_kurallar3.png'}).then(async web => {
const hook = new Discord.WebhookClient(web.id, web.token);
const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/779721685288484904/785593688666538024/quality_kurallar3.png');
hook.send(`📢 \`${message.guild.name}\` **Sunucu Kuralları**

\`¤\` **Reklam** Sunucu **İçi** **YASAKTIR!!!** **(Yetkililere bildirmelisiniz.)**
\`¤\` **Ses** & **Chat** odalarında **Küfür**, **Troll**, **Rahatsız** etmek & **Bass** **YASAKTIR!!!**
\`¤\` Kişisel sorunlarınızı **sunucuya** taşımak, Düzeni **bozmak**, Çıkan **tartışmayı** uzatmak **YASAKTIR!!!**
\`¤\` **Din**, **dil**, **ırk**, Cinsiyetçilik ayrımı **YASAKTIR!!!**
\`¤\` **Cinsel içerikli**, görseller paylaşmak YASAKTIR!!!
\`¤\` **Spam**, **flood** ve **caps** YASAKTIR!!!
\`¤\` **Toxic**, Herhangi birine toxic söz söylemek YASAKTIR!!! (Örnek: ez, easy , noob, KUDUR, çöp, ağla vb.
\`¤\` **Saygı**, Ne adminlere ne de başka kullanıcılara saygısızlık yapmak **YASAKTIR!!!**

\`¤\` **Her kural yazılı şekilde belirtilmez. Doğruyu yanlışı ayırt edebilmelisiniz.**

> \`Sunucuya Kayıt Olan Tüm Üyeler İçin Kurallar Okunmuş sayılacaktır, TEŞEKKÜRLER.\`

`, attachment).then(() => hook.delete())
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kurallar'
};