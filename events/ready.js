const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
   client.user.setStatus('LEGEND PROJECT İNVİTE BOT ') 
   client.user.setActivity(`${prefix}yardım |  | ${client.guilds.cache.size} Sunucu`);
   console.log(`[ LEGEND PROJECT İNVİTE BOT HAZIR ] - [ SUNUCULAR - ${client.guilds.cache.size} ] - [ KULLANICILAR - ${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()} ]`)
     

};