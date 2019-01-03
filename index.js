const commando = require('discord.js-commando');
const bot = new commando.Client();
const Discord = require('discord.js');

bot.on('ready', () => {
    bot.user.setActivity("Gotta Run Faster Faster Faster");
    console.log ("1")
    bot.user.setStatus('online');
    console.log ("2")
  });
  

  
 
bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");


bot.login('NDczMzMyNzAyNDI3NDgwMDc0.DkAcFg.CQCe7-yGZZGtJ99gALSUF9zm6Fk');