const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Espri yükleniyor.').then(message => {
      var espriler = ['Seni görünce; ||**gözlerim dolar, nkulaklarım euro.** ALSŞKJDŞALSKDJASŞLDJASKLD||','Kar üzerinde yürüyen adama ne denir. ||**Karabasan.** aşskjdaşklsjdaşlskdjasşlkdj||','Yıkanan Ton’a ne denir? ||**Washington!**  aşskjdaşklsjdaşlskdjasşlkdj||','Gidenin arkasına bakmayın yoksa ||**geleni göremezsiniz.** aşskjdaşklsjdaşlskdjasşlkdj||','+Oğlum canlılara örnek ver. \n-Kedi, köpek. \n+Cansızlara örnek ver. ||**\n-Ölü kedi, ölü köpek.** aşskjdaşklsjdaşlskdjasşlkdj||','+Kanka ben banyoya 3 kişi giriyom. \n-Oha nasıl? ||**\n+Hacı, Şakir ve ben.**aşskjdaşklsjdaşlskdjasşlkdj|| **\n-Siktir Git lan APTAL GERİZEKALİ**!','+Kocanızla ortak özelliğiniz ne? ||**\n-Aynı gün evlendik**.aşskjdaşklsjdaşlskdjasşlkdj||','+Evladım ödevini neden yapmadın? ||**\n-Bilgisayarım uyku modundaydı, uyandırmaya kıyamadım.** aşskjdaşklsjdaşlskdjasşlkdj||','+Bizim arkadaş ortamında paranın lafı bile olmaz. \n-Niye ki? ||**\n+Çünkü hiç birimizin parası yok.** aşskjdaşklsjdaşlskdjasşlkdj||','||**Annemin bahsettiği elalem diye bir örgüt var illuminatiden daha tehlikeli yemin ederim.** aşskjdaşklsjdaşlskdjasşlkdj||','+Acıkan var mı ya? ||**\n-Yok bizde tatlı kan var.** aşskjdaşklsjdaşlskdjasşlkdj||','Yılanlardan korkma, ||**yılmayanlardan kork.** aşskjdaşklsjdaşlskdjasşlkdj||','+Baykuşlar vedalaşırken ne der? ||**\n-Bay bay baykuş.** aşskjdaşklsjdaşlskdjasşlkdj||','Beni Ayda bir sinemaya götürme, ||**Marsta bir sinemaya götür.** aşskjdaşklsjdaşlskdjasşlkdj||','||*Aaa siz çok terlemişsiniz durun size terlik getireyim.**|| aşskjdaşklsjdaşlskdjasşlkdj||','||**Aklımı kaçırdım, 100.000 TL fidye istiyorum.** aşskjdaşklsjdaşlskdjasşlkdj||'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espiri', 'espri-yap', 'yap-espri', 'yapbi-espri', 'ESPRİ', 'ESPİRİ' ],
  permLevel: 0
};

exports.help = {
  name: 'espri',
  description: 'Espri yapar.',
  usage: 'espri'
};