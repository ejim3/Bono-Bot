const commando = require('discord.js-commando');
const bot = new commando.Client();
const Discord = require('discord.js');

bot.on('ready', () => {
    bot.user.setActivity("Sup");
    console.log ("1")
    bot.user.setStatus('online');
    console.log ("2")
  });
  

  
 
bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");


bot.login(process.env.BOT_TOKEN);
