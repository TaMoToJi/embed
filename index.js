const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = "_";

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

var name;
var usrAuth = 0;

bot.on("ready", function() {

    console.log("Ready");
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
            if(!message.member.roles.some(r=>["OWNER"].includes(r.name)) )
        return message.reply("Sorry, you don't have permissions to use this!")
            message.channel.send("Prefix:>> tst - set a text u type!");
            break;
        case "tst":
            var embed = new Discord.RichEmbed()
            .setColor(`#da89fe`)
            .setTitle(`BotCommands`)
            .setDescription(`Desc`)
             message.channel.sendEmbed(embed);
            // .catch(console.error);
           break;
        default:
            message.channel.send("𝐔𝐍𝐊𝐍𝐎𝐖-𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒");
    }

});

bot.login(process.env.token);
