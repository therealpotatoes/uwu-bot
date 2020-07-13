const Discord = require('discord.js')
const bot = new Discord.Client
const config = require('./config.json')

bot.login(config.token)

bot.once('ready', () => {
	bot.user.setActivity(`lily uwu herself`, { type: 'WATCHING' })
});
console.log('Ready!');