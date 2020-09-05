const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 't-'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('Friday BOT',`
**<a:elms:744791004690776195>   t-yetkili** : Moderasyon Komutlarını Açar.
**<a:elms:744791004690776195>   t-yetkili-2** : İkincil Moderasyon Komutları.
**<a:elms:744791004690776195>   t-kullanıcı** : Kullanıcı Komutları Açar.
**<a:elms:744791004690776195>   t-eğlence** : Eğelence Komutlarını Gösterir.
**<a:elms:744791004690776195>   t-bot** : Bot hakkında Diğer Komutları Gösterir.
**<a:elms:744791004690776195>   t-eklentier** : Diğer Komutları Gösterir.`)
    .addField(
      "» Linkler",
      `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=710115789537017926&scope=bot&permissions=2146958847)` +
        "**\n**" +
        `[Bota Oy ver (Çok Yakında)]()` +
        "**\n**" +
        `[Destek Sunucusu](https://discord.gg/wdC62b5)`+
            "**\n**" +
        `[Web Sitesi](http://fridaybot.glitch.me)`,
      false
    )
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setImage(`https://cdn.discordapp.com/attachments/750056823041556540/750056866679095346/Friday_Wallpaper.jpg`);
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help"], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
};
//Gweep Creative  