const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`${client.user.username} Davet Menüsü `)
        .setDescription(`:white_small_square:**Botun Davet Linki İçin** [TIKLA](https://discord.com/oauth2/authorize?client_id=710115789537017926&scope=bot&permissions=2146958847) \n:white_small_square:**Destek Sunucusu İçin** [TIKLA](https://discord.gg/EUgBcFg) \n:white_small_square:**Web Sitemizi Ziyaret etmek İçin** [TIKLA](https://bit.ly/3bXKWNi)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}davet Sistemi Kullandı!`, message.author.avatarURL)
    .setColor(`RANDOM`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};
//Gweep`Creative