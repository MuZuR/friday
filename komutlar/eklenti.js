const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 't-'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('Friday BOT',`
**<a:shpyepe:720578782418960384>    t-botlist-yardım** : BotList Komutlarını Açar.
**<a:shpyepe:720578782418960384>    t-botlist-kur** : Bot list sunucusu kurar.
**<a:shpyepe:720578782418960384>    t-kayıt-sistemi(Yakında).
*<a:shpyepe:720578782418960384>     t-davet-sistemi(Yakında).`)
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
  aliases: ["eklentiler","eklneti"], 
  permLevel: 0
};
exports.help = {
  name: 'eklentiler'
};
//Gweep Creative  