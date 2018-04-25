const Discord = require("discord.js");
const bot = new Discord.Client();
comst YTDL = require("ytdl-core");

const PREFIX = "_";

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playsteam(YTDL(server.queue[0], {filter: "audioonly"}));
    
    server.queue.shift();

    server.dispatcher.on("end", function() {
}

var name;
var usrAuth = 0;

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Config Erorr`);
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
             message.channel.sendEmbed(embed);
           break;
        case "play":
            if (!args[1]) {
                message.channel.sandMessage("Please provide alink");
                return;
            }
           
            if (!message.member.voiceChannel) {
                message.channel.sandMessage("You must to in a voice channel");
                require;

            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue: [] 
            };
            
            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
            });
            break;
            
        case "skip":
            var server = servers[message.guild.id];

            if(server.dispatcher) server.dispatcher.end();
            break;
        case "stop":
            var server = servers[message.guild.id];

            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
            break;

        default:
            message.channel.send("𝐔𝐍𝐊𝐍𝐎𝐖-𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒");
    }

});

bot.login(process.env.token);
