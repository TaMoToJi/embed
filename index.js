const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = "_";

var name;
var usrAuth = 0;

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Spectator`);
});

bot.on("ready", function() {

    console.log("Ready");
});

bot.on("guildMemberAdd", function(member) {
    member.guild.channel.find("name", "general").sandMessage(member.toString() * "Welcome To GodRules Server");

    member.addRole(member.guild.roles.find("name", "MEMBER"));
});

bot.on("message", function(message) {

    console.log(message.content);

    if ( message.author.equals(bot.user)) 
        return;

    //  If the message doesn't begin with ** (Our prefix); do nothing 
    if( !message.content.startsWith(PREFIX))
        return;

    var argv = message.content.substr(PREFIX.length).split(" ");
    console.log("argv: "+argv+", argv[1]: "+argv[1]+"");

    // "+VAR_NAME+" Allows you to print a variable
    switch(argv[0].toLowerCase()) {
        case "help":
            var embed = new Discord.RichEmbed()
            .setColor(`#da89fe`)
            .setTitle(`Bot Command`)
            .setDescription(`avatar - seach user avatar`)
            .setThumbnail(message.author.avatarURL)
             message.channel.sendEmbed(embed);
            break;
        case "avatar":
            var embed = new Discord.RichEmbed()
            .setColor(`#da89fe`)
            .setTitle(`Avatar`)
            .setImage(message.author.avatarURL)
            .setFooter(`Power By TaMoToJi`)
             message.channel.sendEmbed(embed);
           break;
        default:
            message.channel.send("unknow command , please do _help for help");
    }

});

bot.login(process.env.token);
