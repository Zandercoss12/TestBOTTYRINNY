// Discord code requires this command!
const Discord = require('discord.js');
// Sets bot thing as client
const client = new Discord.Client();
// The config.json is what tells the bot.js what the prefix is... which is '~'.
const config = require("./config.json");

// This is how you set the game for the bot.
client.on('ready', () => {
  client.user.setPresence({game: {name: "~help for help", type: 0}});
  console.log('I am ready!');
  
  // Sets stuff for the commands
client.on("message", async message => {
  // Makes it so the bot doesn't glitch as easily.
  if(message.author.bot) return;
  // Looks for the prefix.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Adds args variable. Makes it so the command starts with '~'
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  // adds command variable.
  const command = args.shift().toLowerCase();
// PUT COMMANDS UNDER THIS
// FORMAT:
// if(command === "<command-name>") {
// command code   
// }
  
// This doesn't work anymore --> client.user.setGame('Type ~help for help')

 if(command === "tacos") {
   message.channel.sendMessage('TACOS ARE THE BEST');
 }

  // Don't do "~ping", just do "ping". The "command" already adds the '~' in front of the text.
  if(command === "ping") {
    message.channel.sendMessage("Pong!");
}
  
});
  // DO NOT PUT ANY OTHER COMMANDS UNDER THIS, THE COMMANDS WON'T WORK UNDER THIS MESSAGE

// Don't worry about this stuff yet under this
setInterval(() => {
 http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

const port = process.env.PORT || 5000;

client.login(process.env.BOT_TOKEN);

  
