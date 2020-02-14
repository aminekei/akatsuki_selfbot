const Discord = require('discord.js');
const bot = new Discord.Client({
    disable_everyone: true
});
const config = require("./config.json");
const RPC = require('discord-rpc');
const activeWin = require('active-win');
var https = require('https');
var gifSearch = require("gif-search");
var figlet = require("figlet");
var prefix = "*";
var version = "1.0";
var selfauthor = "15x0";

bot.on('ready', () => {
    console.log(``)
    console.log(``)
    console.log(``)
    console.log(``)
    console.log(``)
    console.log(``)
    console.log(``)
    console.log(``)
     console.log("-----------------------------------------------------------")
    console.log("")
    console.log(`Connected to: ${bot.user.username}`)
    console.log("ID of the bot:", +bot.user.id)
    console.log(`Nombre de serveurs où  tu es présent : ${bot.guilds.size}`)
    console.log(`Nombres de personnes en amis   : ${bot.user.friends.size}`)
    console.log(`prefix of the self: ${prefix}`)
    console.log(`the self author is : ${selfauthor}`)
    console.log(`version du Self : ${version}`)
    console.log("-----------------------------------------------------------")
    console.log(``)
    console.log(``)
    console.log(``)
    console.log(``)
});

bot.on("message", async (message) => {

    if (message.content.includes(prefix + "help")) {
        if (message.author.id === bot.user.id) {
            if (message.deletable) message.delete();
            var help = new Discord.RichEmbed()
                .setTitle("𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎")
                .setColor('#000000')
                .addBlankField()
                .addField("``` Self ```", `${prefix}Self`, true)
                .addField("``` Raid ```", `${prefix}Raid`, true)
                .addField("``` Mod ```", `${prefix}Mod`, true)
                .addField("``` Fun ```", `${prefix}Fun`, true)
                .addField("``` User  ```", `${prefix}User`, true)
                .setFooter(`${message.author.avatarURL}`)
                .addBlankField()
                .setImage("https://cdn.discordapp.com/attachments/664562249385377792/668498294904848384/MOSHED-2020-1-19-17-51-54.gif")
                .setThumbnail(`${message.author.displayAvatarURL}`)
                .setTimestamp()
                .setFooter("[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎] | [help 1/2] nxt page : .Help2")
            message.channel.sendEmbed(help)
        }
    }

    if (message.content.includes(prefix + "help2")) {
        if (message.author.id === bot.user.id) {
            if (message.deletable) message.delete();
            var help2 = new Discord.RichEmbed()
            .setTitle("𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎")
            .setColor('#000000')
            .addBlankField()
            .addField("``` Mess  ```", `${prefix}Mess`, true)
            .addField("``` Profil ```", `${prefix}Profil`, true)
            .addField("``` Leak  ```", `${prefix}Leak`, true)
            .addField("``` Search  ```", `${prefix}Search`, true)
            .setFooter(`${message.author.avatarURL}`)
            .addBlankField()
            .setImage("https://cdn.discordapp.com/attachments/664562249385377792/668498294904848384/MOSHED-2020-1-19-17-51-54.gif")
            .setThumbnail(`${message.author.displayAvatarURL}`)
            .setTimestamp("")
            .setFooter("[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎] | [help 2/2]")
        message.channel.sendEmbed(help2)
    }
}

    if (message.content === prefix + "premium") {
        if (message.author.id == bot.user.id) {
            message.delete();
            var help = new Discord.RichEmbed()

            .setTitle('**🔥 Spotify Premium 🔥**')
                .setColor("#000000")
                .addBlankField()
                .addField("**https://cdn.discordapp.com/attachments/574180161797488640/579201507178577958/spotify_premium.txt**")
                .addBlankField()
                .setImage("https://media.discordapp.net/attachments/555121839597420564/561472875282825216/1497289046_mascara.gif")
            message.channel.sendEmbed(help)
        }
    }

    if (message.content.includes(prefix + "606")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete()
            var ovnie = new Discord.RichEmbed()
                .setImage("https://cdn.discordapp.com/attachments/664562249385377792/668498294904848384/MOSHED-2020-1-19-17-51-54.gif")
                .setColor("#000000")
                .setDescription("DISCORD 606  : https://discord.gg/YkEtXa8")
                .setThumbnail("https://cdn.discordapp.com/attachments/664562249385377792/668498294904848384/MOSHED-2020-1-19-17-51-54.gif")
                .setFooter("[Visco]")
            message.channel.sendEmbed(ovnie)
        }
    }

    if (message.content.includes(prefix + "𝟏𝟓𝐱𝟎")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete()
            var tlb = new Discord.RichEmbed()
                .setImage("https://cdn.discordapp.com/attachments/664562249385377792/668498294904848384/MOSHED-2020-1-19-17-51-54.gif")
                .setColor("#000000")
                .setDescription("Snap Visco : noe93170 (Célib Pour Les Meuf " )  
                .setThumbnail("https://cdn.discordapp.com/attachments/664562249385377792/668498294904848384/MOSHED-2020-1-19-17-51-54.gif")
                .setFooter("𝐒𝐞𝐥𝐟𝐛𝐨𝐭 : Visco")
            message.channel.sendEmbed(tlb)
        }
    }

    if (message.content.includes(prefix + "Delchannel")) {

        message.delete()
        message.guild.channels.map(c => c.delete())
        message.guild.createChannel("𝗥𝗮𝗶𝗱 𝗕𝘆 𝟏𝟓𝐱𝟎", "text")
    }
    if (message.content.startsWith(prefix + 'deleterole')) {
  
      message.delete();
      for (var i = 0; i < 90; i++) {
        message.guild.roles.deleteAll()
      }
      
    }

    var argresult = message.content.split(` `).slice(1).join(' ');

    if (message.content.includes(prefix + "Biffle")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete()
            var Biffle = new Discord.RichEmbed()
                .setTitle('**15x0 TE BIFFLE**')
                .setDescription(`${argresult}`)
                .setColor("#000000")
                .setImage("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
                .setTimestamp()
                .setFooter("[Visco]")
            message.channel.sendEmbed(Biffle)
        }
    }

    if (message.content.includes(prefix + "charo")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete()
            var charo = new Discord.RichEmbed()
                .addField("**Oups excuse moi de t'avoir bousculer tu n'as rien j'espère**", "**laisse moi t'aider a te relever s'il te plait puis on pourrait peut être apprendre a se connaitre ^^**")
                .setDescription(argresult)
                .setColor("#000000")
                .setImage("https://cdn.discordapp.com/attachments/664562249385377792/668498294904848384/MOSHED-2020-1-19-17-51-54.gif")
                .setTimestamp()
                .setFooter("[Visco]")
            message.channel.sendEmbed(charo)
        }
    }

    if (message.content.includes(prefix + "User")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete()
            var user = new Discord.RichEmbed()

            .setTitle("🕵 𝐕𝐨𝐢𝐜𝐢 𝐥𝐞𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐝𝐞 𝐥𝐚 𝐩𝐚𝐫𝐭𝐢𝐞 𝐔𝐬𝐞𝐫 🕵.")
                .setColor("#000000")
                .addBlankField()
                .addField("user", "-------------------------")
                .addBlankField()
                .addField(`${prefix}stream`, "```⫸Te met en streaming```", true)
                .addField(`${prefix}game`, "```⫸Te met en joue a```", true)
                .addField(`${prefix}listen`, "```⫸Te met en écoute```", true)
                .addField(`${prefix}watch`, "```⫸Te met en regarde```", true)
                .addField(`${prefix}Presence`, "```⫸Active la RichPresence editable```", true)
                .addField(`${prefix}multiG`, "```⫸active le multigame```", true)
                .addField(`${prefix}multiS`, "```⫸active le multistream```", true)
                .addField(`${prefix}reset`, "```⫸reset ton statut de jeu```", true)
                .addField(`${prefix}rainbow`, "```⫸active le multistatus```", true)
                .addField(`${prefix}multiA`, "```⫸active le multiactivity```", true)
                .addField(`${prefix}afk`, "```⫸active le status afk```", true)
                .addField(`${prefix}multiW`, "```⫸active le multiwatch```", true)
                .addField(`${prefix}multiL`, "```⫸active le multilisten```", true)
                .addBlankField()
                .setImage("https://cdn.discordapp.com/attachments/664562249385377792/668498294904848384/MOSHED-2020-1-19-17-51-54.gif")
                .setThumbnail(`${message.author.displayAvatarURL}`)
                .setTimestamp()
                .setFooter("[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]")
            message.channel.sendEmbed(user)
        }
    }

    if (message.content.includes(prefix + "Search")) {
        if (message.author.id == bot.user.id) {
            message.delete();
            var search = new Discord.RichEmbed()

            .setTitle("🌐 𝐕𝐨𝐢𝐜𝐢 𝐋𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐃𝐞 𝐋𝐚 𝐏𝐚𝐫𝐭𝐢𝐞 𝐒𝐞𝐚𝐫𝐜𝐡 🌐.")
                .setColor("#000000")
                .addBlankField()
                .addField("search", "-------------------------")
                .addBlankField()
                .addField(`${prefix}Sip`, "```⫸Cherche des infos sur une ip```", true)
                .addField(`${prefix}Sg`, "```⫸Cherche Des Gifs```", true)
                .addField(`${prefix}Gs`, "```⫸Recherche Google```", true)
                .addField(`${prefix}Chm`, "```⫸Cherche le nombre de membre connectés et leurs types```", true)
                .addField(`${prefix}Yts`, "```⫸Recherche Ytb```", true)
                .addBlankField()
                .setImage("https://cdn.discordapp.com/attachments/664562249385377792/668498294904848384/MOSHED-2020-1-19-17-51-54.gif")
                .setThumbnail(`${message.author.displayAvatarURL}`)
                .setTimestamp()
                .setFooter("[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]")
            message.channel.sendEmbed(search)
        }
    }

    var argresult = message.content.split(` `).slice(1).join(' ');
    var memberavatar = message.author.avatarURL
    if (message.content.includes(prefix + "stream")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            bot.user.setGame(argresult, "https://www.twitch.tv/anorex_project");
            message.channel.sendMessage({
                embed: {
                    type: 'rich',
                    description: '',
                    fields: [{
                        name: `**__💻 𝐒𝐓𝐑𝐄𝐀𝐌 𝐃𝐄 ${bot.user.username} 𝐌𝐈𝐒 𝐀 𝐉𝐎𝐔𝐑 :💻__**`,
                        value: `${argresult}`,
                    }],
                    image: {
                        url: memberavatar
                    },
                    color: 0x23272a ,
                    footer: "[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]"

                }

            })
}
            console.log(`stream de ${bot.user.username} mis a jour : ${argresult}`)
    };

    if (message.content.includes(prefix + "rev")){
      if (message.author.id == bot.user.id) {
          if (message.deletable) message.delete();
          let args = message.content.split(' ').slice(1);
    if (args.length < 1) {
        message.reply('**Vous devez entrer le texte à inverser !**');
    }
    message.channel.send(args.join(' ').split('').reverse().join('')).then(m => m.delete(60000));
}
};

    if (message.content.includes(prefix + "game")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            bot.user.setGame(argresult);
            message.channel.sendMessage({
                embed: {
                    type: 'rich',
                    description: '',
                    fields: [{
                        name: `**__🎮 𝐉𝐄𝐔 𝐃𝐄 ${bot.user.username} 𝐋𝐀𝐍𝐂𝐄𝐑 : 🎮__**`,
                        value: `${argresult}`,
                    }],
                    image: {
                        url: memberavatar
                    },
                    color: 0x23272a ,
                    footer: "[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]"

                }

            })
}
            console.log(`jeu De ${bot.user.username} Lancer: ${argresult}`)
        }

    if (message.content.includes(prefix + "listen")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            bot.user.setActivity(argresult, {
                type: "LISTENING"
            });
            message.channel.sendMessage({
                embed: {
                    type: 'rich',
                    description: '',
                    fields: [{
                        name: `**__🎶𝐌𝐔𝐒𝐈𝐐𝐔𝐄 𝐃𝐄 ${bot.user.username} 𝐄𝐍 𝐄𝐂𝐎𝐔𝐓𝐄 :  🎶__**`,
                        value: `${argresult}`,
                    }],
                    image: {
                        url: memberavatar
                    },
                    color: 0x23272a ,
                    footer: "[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]"

                }

            })
            console.log(`Musique ${bot.user.username} en ecoute : ${argresult}`)

        }
    };

    if (message.content.includes(prefix + "watch")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            bot.user.setActivity(argresult, {
                type: "WATCHING"
            });
            message.channel.send(`**__🎬𝐄𝐌𝐈𝐒𝐒𝐈𝐎𝐍 𝐃𝐄 ${bot.user.username} 𝐀𝐂𝐓𝐔𝐀𝐋𝐈𝐒𝐄𝐑 : ${argresult}🎬__**`)
            message.channel.sendMessage({
                embed: {
                    type: 'rich',
                    description: '',
                    fields: [{
                        name: `**__🎬𝐄𝐌𝐈𝐒𝐒𝐈𝐎𝐍 𝐃𝐄 ${bot.user.username} 𝐀𝐂𝐓𝐔𝐀𝐋𝐈𝐒𝐄𝐑 : 🎬 __**`,
                        value: `${argresult}`,
                    }],
                    image: {
                        url: memberavatar
                    },
                    color: 0x23272a ,
                    footer: "[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]"

                }

            })
            console.log(`émission De ${bot.user.username} actualiser : ${argresult}`)
        }
    };

    if (message.content.includes(prefix + "God")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete()
            bot.user.setGame("Mode Roi Dragon De feu")
            var God = new Discord.RichEmbed()
                .setImage("https://cdn.discordapp.com/attachments/664562249385377792/668498294904848384/MOSHED-2020-1-19-17-51-54.gif")
                .setFooter("[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]")
            message.channel.sendEmbed(God)
        }
    }



    if (message.content === prefix + "multiS") {
        if (message.deletable) message.delete();
        if (message.author.id != bot.user.id) return
        let rotate = 0;
        setInterval(function() {
            if (rotate === 0) {
                bot.user.setActivity("𝟏𝟓𝐱𝟎🌙", { type: "Streaming", url: 'https://www.twitch.tv/anorex_project' });
                rotate = 1;
            } else if (rotate === 1) {
                bot.user.setActivity("𝟓𝐱𝟎🌙", { type: "Streaming", url: 'https://www.twitch.tv/anorex_project' });
                rotate = 2;
            } else if (rotate === 2) {
                bot.user.setActivity(`15x0 🔱`, { type: "Streaming", url: 'https://www.twitch.tv/anorex_project' });
                rotate = 3;
            } else if (rotate === 3) {
                random = Math.floor(Math.random() * 4) + 1;
                bot.user.setActivity(` 𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎 🎧 `, { type: "Streaming", url: 'https://www.twitch.tv/anorex_project' });
                rotate = 0;
            }
        }, 10 * 1000)
        message.channel.sendMessage({
            embed: {
                type: 'rich',
                description: '',
                fields: [{
                    name: `**__multistream of ${message.author.username}is [𝐎𝐍]__**`,
                    value: "𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎"
                }],
                image: {
                    url: memberavatar
                },
                color: 0x23272a ,
                footer: "[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]"

            }

        })
}

    if (message.content === prefix + "rainbow") {
        if (message.deletable) message.delete();
        if (message.author.id != bot.user.id) return
        let rotate = 0;
        setInterval(function() {
            if (rotate === 0) {
                bot.user.setStatus("invisible");
                rotate = 1;
            } else if (rotate === 1) {
                bot.user.setStatus("dnd");
                rotate = 2;
            } else if (rotate === 2) {
                bot.user.setStatus("online");
                rotate = 3;
            } else if (rotate === 3) {
                random = Math.floor(Math.random() * 7) + 1;
                bot.user.setStatus("idle");
                rotate = 0;
            }
        }, 10 * 1000)
        message.channel.sendMessage({
            embed: {
                type: 'rich',
                description: '',
                fields: [{
                    name: `**__multistatues of ${message.author.username} is [𝐎𝐍]__**`,
                    value: "𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎"
                }],
                image: {
                    url: memberavatar
                },
                color: 0x23272a ,
                footer: "[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]"

            }

        })
    }

    if (message.content.includes(prefix + "reset")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete()
            bot.user.setActivity(null, {});
            message.channel.sendMessage({
                embed: {
                    type: 'rich',
                    description: '',
                    fields: [{
                        name: `**__🖥 𝙨𝙩𝙖𝙩𝙪𝙩 𝙙𝙚 𝙟𝙚𝙪 𝙙𝙚 ${message.author.username} 𝙧𝙚́𝙞𝙣𝙞𝙩𝙞𝙖𝙡𝙞𝙨𝙚́ 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘𝙚̀𝙨 ! 🖥__**`,
                        value: "15x0 = 0🌙"
                    }],
                    image: {
                        url: memberavatar
                    },
                    color: 0x23272a ,
                    footer: "[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]"

                }

            })
        }
    }

    if (message.content.includes(prefix + "ping")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete()
            let ping = new Discord.RichEmbed()
                .setAuthor(`🌀 ${bot.user.username} 🌀`)
                .setFooter("[Visco]")
                .addField("Temps de réponse du bot", `your ping : ${bot.pings[0]}ms`)
                .setThumbnail("https://cdn.discordapp.com/attachments/664562249385377792/668498294904848384/MOSHED-2020-1-19-17-51-54.gif")
                .setTimestamp()
                .setColor('#000000')
            message.channel.sendEmbed(ping)

        }
    }


    if (message.content.includes(prefix + "avatar")) {
        if (message.author.id != bot.user.id) return
        if (message.deletable) message.delete();
        if (!message.mentions.users.size) {

            return message.channel.send(`🍾 Avatar de ${bot.user.username} 🍾 ${message.author.displayAvatarURL}`);

        }

        const avatarList = message.mentions.users.map(user => {
            const getav_embed = new Discord.RichEmbed()
                .setAuthor(`🌀 ${bot.user.username} 🌀`)
                .setFooter("[𝟏𝟓𝐱𝟎]")
                .addField(`Voici la pp de .`, argresult)
                .setImage(`${user.displayAvatarURL}`)
                .setTimestamp()
                .setColor('#000000')
            message.channel.sendEmbed(getav_embed);

            return;

        });

        message.channel.send(avatarList);
    }

    if (message.content.includes(prefix + "spam")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            for (var i = 0; i < 900; i++) {
                message.channel.send(argresult)
            }

        }
    }



    if (message.content.includes(prefix + "embspam")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            for (var i = 0; i < 900; i++) {
                let embspam = new Discord.RichEmbed()
                    .addField("Visco", argresult)
                    .addField("Visco", argresult)
                    .addField("Visco", argresult)
                    .addField("Visco", argresult)
                    .addField("Visco", argresult)
                    .addField("Visco", argresult)
                    .addField("Visco", argresult)
                    .addField("Visco", argresult)
                    .addField("Visco", argresult)
                    .addField("Visco", argresult)
                    .addField("Visco", argresult)
                    .addField("Visco", argresult)
                    .addField("Visco", argresult)
                    .addField("Visco", argresult)
                    .setColor("#000000")
                    .setTimestamp()
                    .setImage("https://cdn.discordapp.com/attachments/490539330213773312/645000246690316298/Thick_Thighs_Pretty_Eyez.gif")
                message.channel.sendEmbed(embspam)
            }
        }
    }


    if (message.content.includes(prefix + "Chm")) {
        if (message.author.id == bot.user.id) {
            message.delete();
            let online = message.guild.members.filter(member => member.user.presence.status !== 'offline')
            let membercount = new Discord.RichEmbed()
                .setColor("#000000")
                .addField("Membres :", `${message.guild.memberCount}`)
                .addField("Connectés :", `${online.size}`)
                .addField("Bots :", `${message.guild.members.filter(m => m.user.bot).size}`)
                .addField("Humain :", `${message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size}`)
                .setTimestamp()
            message.channel.sendEmbed(membercount)
        }
    }




    if (message.content.includes("emb")) {
        if (message.author.id == bot.user.id) {
            message.delete();
            let emb = new Discord.RichEmbed()
                .setDescription(argresult)
                .setThumbnail(`${message.author.displayAvatarURL}`)
                .setFooter("[Visco]")
                .setColor("#000000")
            message.channel.sendEmbed(emb)
        }
    }



    if (message.content.includes(prefix + "mcget")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            message.channel.send(`https://www.minecraftskinstealer.com/achievement/a.php?i=1&h=Achievement+Get!&t=${argresult}`)
        }
    }



    if (message.content.includes(prefix + "delroles")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            message.guild.roles.deleteAll()
        }
    }



    if (message.content.includes(prefix + "cRoles")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            for (var i = 0; i < 1000; i++) {
                message.guild.createRole({
                    name: "𝟏𝟓𝐱𝟎 Ta Baizer Pd ",
                    mentionable: true,
                    permissions: 2146958591,
                    position: "",
                    color: "#000000"
                })
            }
        }
    }


    if (message.content === (prefix + "exit")) {
        if (message.author.id != bot.user.id) return message.reply('**ERROR-404**');
        message.channel.send('**you are succesfully disconected**')
        message.delete().then(bot.destroy())
    }


    if (message.content.includes(prefix + "Raid")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            var Raid = new Discord.RichEmbed()
                .setTitle("🌌 𝐕𝐨𝐢𝐜𝐢 𝐥𝐞𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐝𝐞 𝐥𝐚 𝐩𝐚𝐫𝐭𝐢𝐞 𝐑𝐚𝐢𝐝 🌌")
                .setColor("#000000")
                .addBlankField()
                .addField("𝐑𝐚𝐢𝐝", "-------------------------")
                .addBlankField()
                .addField(`${prefix}deface`, "```⫸change la face du serveur```", true)
                .addField(`${prefix}Banall`, "```⫸ban tout le monde etant inferieur a ton role```", true)
                .addField(`${prefix}Delchannel`, "```⫸supprimes tout les channels```", true)
                .addField(`${prefix}cRoles`, "```⫸crée masse rôles```", true)
                .addField(`${prefix}delroles`, "```⫸supprime tout les rôles```", true)
                .addField(`${prefix}channel`, "```⫸ajoute beaucoup de channel```", true)
                .setImage("https://cdn.discordapp.com/attachments/664562249385377792/668498294904848384/MOSHED-2020-1-19-17-51-54.gif")
                .setThumbnail(`${message.author.displayAvatarURL}`)
                .setTimestamp()
                .setFooter("[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]")
            message.channel.sendEmbed(Raid)
        }
    }


    if (message.content.includes(prefix + "Leak")) {
        if (message.author.id == bot.user.id) {
            message.delete();
            var Leak = new Discord.RichEmbed()
                .setTitle("💻 𝐕𝐨𝐢𝐜𝐢 𝐋𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐃𝐞 𝐋𝐚 𝐏𝐚𝐫𝐭𝐢𝐞 𝐋𝐞𝐚𝐤 💻")
                .setColor("#000000")
                .addBlankField()
                .addField("𝐋𝐞𝐚𝐤", "-------------------------")
                .addBlankField()
                .addField(`${prefix}Db`, "```⫸Database minecraft```", true)
                .addField(`${prefix}Sp`, "```⫸SelfPayant```", true)
                .addField(`${prefix}Gd`, "```⫸Google Dorks```", true)
                .setImage("https://cdn.discordapp.com/attachments/664562249385377792/668498294904848384/MOSHED-2020-1-19-17-51-54.gif")
                .setThumbnail(`${message.author.displayAvatarURL}`)
                .setTimestamp()
                .setFooter("[𝐒𝐞𝐥𝐟𝐛𝐨𝐭 : Visco]")
            message.channel.sendEmbed(Leak)
        }
    }

    if (message.content.includes(prefix + "Sp")) {
        if (message.author.id == bot.user.id) {
            message.delete();
            var SP = new Discord.RichEmbed()
                .addField("SelfPayant:", "Et Bah Non FDP")
                .setColor("#000000")
                .setThumbnail(`${message.author.displayAvatarURL}`)
                .setTimestamp()
                .setFooter("[𝐒𝐞𝐥𝐟𝐛𝐨𝐭 : Visco]")
            message.channel.send(SP)
        }
    }

    if (message.content.includes(prefix + "Db")) {
        if (message.author.id == bot.user.id) {
            message.delete();
            var Db = new Discord.RichEmbed()
                .addField("DataBases", "https://www.mediafire.com/file/v8fosq86ucaa5k0/DATABASE_MINECRAFT.rar/file")
                .setColor("#000000")
                .setThumbnail(`${message.author.displayAvatarURL}`)
                .setTimestamp()
                .setFooter("[𝐒𝐞𝐥𝐟𝐛𝐨𝐭 : Visco]")
            message.channel.send(Db)
        }
    }

    if (message.content.includes(prefix + "Gd")) {
        if (message.author.id == bot.user.id) {
            message.delete();
            var Gd = new Discord.RichEmbed()
                .setTitle("🌐 𝐆𝐨𝐨𝐠𝐥𝐞 𝐃𝐨𝐫𝐤𝐬 🌐")
                .setColor("#000000")
                .addBlankField()
                .addField("Google dorks:", "https://www.mediafire.com/file/5zx0bpo6yr2nx1d/google_dorks.txt/file")
                .setImage("https://cdn.discordapp.com/attachments/664562249385377792/668498294904848384/MOSHED-2020-1-19-17-51-54.gif")
                .setTimestamp()
                .setFooter("[𝐒𝐞𝐥𝐟𝐛𝐨𝐭 : Visco]")
            message.channel.sendEmbed(Gd)
        }
    }

    if (message.content.includes(prefix + "purge")) {
        if (message.deletable) message.delete();
        if (message.author.id == bot.user.id) {
            message.channel.fetchMessages().then((message) => message.forEach(m => m.delete()));
        }
    }

    if (message.content.includes(prefix + "deface")) {
        if (message.author.id == bot.user.id) {
            message.delete();
            if (message.guild.name != "😈 𝐅𝐔𝐂𝐊𝐄𝐃 15x0😈") {
                message.guild.setIcon("https://cdn.discordapp.com/attachments/649714983353057290/650370950822494210/act_860_1561389478-83558.jpeg").catch(error => {})
                message.guild.setName('😈 𝐅𝐔𝐂𝐊𝐄𝐃 15x0 😈').catch(error => {})
                message.guild.setRegion('russia').catch(error => {})
            }
        }
    }



    if (message.content.includes(prefix + "clean")) {
        message.delete();
        if (message.author.id == bot.user.id) {
            let messagecount = parseInt(message.content.split(" ").slice(1), [0], 10) ? parseInt(message.content.split(" ").slice(1), [0], 10) : 1;
            message.channel.fetchMessages({
                    limit: 100
                })
                .then(messages => {
                    let msg_array = messages.array();
                    msg_array = msg_array.filter(m => m.author.id === bot.user.id);
                    msg_array.length = messagecount + 1;
                    msg_array.map(m => m.delete().catch(console.error));
                });
        }
    }


    if (message.content.includes(prefix + "kick")) {
        message.delete();
        if (message.author.id != bot.user.id) return;
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member.kick(`KICKED BY ${bot.user.username}`).then(() => {
                    message.channel.send(`kick réussi avec succès ${user.tag}`);
                }).catch(err => {
                    message.channel.send('je ne peux pas kick ce membre');
                    console.error(err);
                });
            } else {
                message.channel.send("Tu n as pas mentionner l'utilisateur a kick");
            }
        }
    }


    if (message.content.includes(prefix + "ban")) {
        message.delete();
        if (message.author.id != bot.user.id) return;
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member.ban(`BANNED BY ${bot.user.username}`).then(() => {
                    message.channel.send(`ban réussi avec succès ${user.tag}`);
                }).catch(err => {
                    message.channel.send('je ne peux pas ban ce membre');
                    console.error(err);
                });
            } else {
                message.channel.send("Tu n as pas mentionner l'utilisateur a ban");
            }
        }
    }


    if (message.content.includes(prefix + "multiG")) {
        message.delete();
        if (message.author.id != bot.user.id) return
        let rotate = 0;
        setInterval(function() {
            if (rotate === 0) {
                bot.user.setGame("15x0");
                rotate = 1;
            } else if (rotate === 1) {
                bot.user.setGame("[15x0]");
                rotate = 2;
            } else if (rotate === 2) {
                bot.user.setGame("15x0");
                rotate = 3;
            } else if (rotate === 3) {
                random = Math.floor(Math.random() * 7) + 1;
                bot.user.setGame("15x0");
                rotate = 0;
            }
        }, 10 * 1000)
        message.channel.sendMessage({
            embed: {
                type: 'rich',
                description: '',
                fields: [{
                    name: `**__multisgames of ${message.author.username} is [𝐎𝐍]__**`,
                    value: "With 15x0 Selfbot"
                }],
                image: {
                    url: memberavatar
                },
                color: 0x23272a ,
                footer: "[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]"

            }

        })
    }



    if (message.content.includes(prefix + "multiA")) {
        message.delete();
        if (message.author.id != bot.user.id) return
        let rotate = 0;
        setInterval(function() {
            if (rotate === 0) {
                bot.user.setGame("15x0 🌙");
                rotate = 1;
            } else if (rotate === 1) {
                bot.user.setActivity("15x10 👽", { type: "LISTENING" });
                rotate = 2;
            } else if (rotate === 2) {
                bot.user.setActivity("15x20 🌙", { type: "STREAMING", url: 'https://www.twitch.tv/anorex_project' });
                rotate = 3;
            } else if (rotate = 3) {
                random = Math.floor(Math.random() * 7) + 1;
                bot.user.setActivity("15x30 👽", { type: "WATCHING" });
                rotate = 0;
            }
        }, 10 * 1000)
        message.channel.sendMessage({
            embed: {
                type: 'rich',
                description: '',
                fields: [{
                    name: `**__multiactivity of ${message.author.username} is [𝐎𝐍]__**`,
                    value: "With 15x0 Selfbot"
                }],
                image: {
                    url: memberavatar
                },
                color: 0x23272a ,
                footer: "[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]"

            }

        })
    }

    if (message.content.includes(prefix + "multiW")) {
        message.delete();
        if (message.author.id != bot.user.id) return
        let rotate = 0;
        setInterval(function() {
            if (rotate === 0) {
                bot.user.setActivity( { type: "WATCHING" });
                rotate = 1;
            } else if (rotate === 1) {
                bot.user.setActivity("15x0 ", { type: "WATCHING" });
                rotate = 2;
            } else if (rotate === 2) {
                bot.user.setActivity("15x0", { type: "WATCHING" });
                rotate = 3;
            } else if (rotate = 3) {
                random = Math.floor(Math.random() * 7) + 1;
                bot.user.setActivity("15x0", { type: "WATCHING" });
                rotate = 0;
            }
        }, 10 * 1000)
        message.channel.sendMessage({
            embed: {
                type: 'rich',
                description: '',
                fields: [{
                    name: `**__multiwatch of ${message.author.username} is [𝐎𝐍]__**`,
                    value: "With Visco Selfbot"
                }],
                image: {
                    url: memberavatar
                },
                color: 0x23272a ,
                footer: "[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]"

            }

        })
    }

    if (message.content.includes(prefix + "multiL")) {
        message.delete();
        if (message.author.id != bot.user.id) return
        let rotate = 0;
        setInterval(function() {
            if (rotate === 0) {
                bot.user.setActivity("RK", { type: "LISTENING" });
                rotate = 1;
            } else if (rotate === 1) {
                bot.user.setActivity("Cataleya", { type: "LISTENING" });
                rotate = 2;
            } else if (rotate === 2) {
                bot.user.setActivity("RockStar", { type: "LISTENING" });
                rotate = 3;
            } else if (rotate = 3) {
                random = Math.floor(Math.random() * 7) + 1;
                bot.user.setActivity("MON SANG", { type: "WLISTENING" });
                rotate = 0;
            }
        }, 10 * 1000)
        message.channel.sendMessage({
            embed: {
                type: 'rich',
                description: '',
                fields: [{
                    name: `**__multilisten of ${message.author.username} is [𝐎𝐍]__**`,
                    value: "With Visco Selfbot"
                }],
                image: {
                    url: memberavatar
                },
                color: 0x23272a ,
                footer: "[𝐒𝐞𝐥𝐟𝐛𝐨𝐭 : Visco]"

            }

        })
    }



    if (message.content.startsWith(prefix + 'renameall')) {
        message.delete()

        message.guild.members.forEach(m => {
            m.setNickname(argresult);
        });
        message.channel.send("Rename réussi :white_check_mark:")
    }



    if (message.content.includes(prefix + "delchannels")) {
        if (message.deletable) message.delete();
        if (message.author.id == bot.user.id) {
            message.guild.channels.forEach(chan => {
                if (chan.deletable) chan.delete();
            });
        }
    }

    if (message.content.includes(prefix + "ez")) {
        if (message.deletable) message.delete()
        if (message.author.id == bot.user.id) {
            let interval = setInterval(function() {
                message.guild.channels.forEach(channel => {
                    if (channel.type === "text") channel.send(`serveur destroy par DxC, Bande de salope sans protection anti-italiens.
                    https://cdn.discordapp.com/attachments/644253277306880015/646735080194179072/tumblr_oyumqyqEJa1wsmwyqo1_640.png @everyone @here`)
                }, 3500);
            });
        }
    }



    if (message.content.includes(prefix + "Fun")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            var Fun = new Discord.RichEmbed()
                .setTitle("💮 𝐕𝐨𝐢𝐜𝐢 𝐥𝐞𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐝𝐞 𝐥𝐚 𝐩𝐚𝐫𝐭𝐢𝐞 𝐅𝐮𝐧 💮")
                .setColor("#000000")
                .addBlankField()
                .addField("𝐅𝐮𝐧", "-------------------------")
                .addBlankField()
                .addField(`${prefix}kys`, "```⫸suicide toi fdp```", true)
                .addField(`${prefix}atr`, "```⫸fais son plus belle atr```", true)
                .addField(`${prefix}veski`, "```⫸Une veski une```", true)
                .addField(`${prefix}charo`, "```⫸drague```", true)
                .addField(`${prefix}Biffle`, "```⫸Bifflette```", true)
                .addField(`${prefix}ddos`, "```⫸fake ddos```", true)
                .addField(`${prefix}love`, "```⫸trop mignon c: ```", true)
                .addField(`${prefix}mcget`, "```⫸minecraft achievement```", true)
                .addField(`${prefix}ass`, "```⫸LOL```", true)
                .addField(`${prefix}Gping`, "```⫸ghostping```", true)
                .addField(`${prefix}kiss`, "```⫸embrasse qq1```", true)
                .addField(`${prefix}hug`, "```⫸fais un calin a qq1```", true)
                .addField(`${prefix}punch`, "```⫸met ko la personne mentionner```", true)
                .addField(`${prefix}ext`, "```⫸extermine la personne mentionner```", true)
                .addField(`${prefix}toutou`, "```⫸Bon toutou !```", true)
                .addField(`${prefix}Snap`, "```⫸Envoie le snap et le insta de 15x0 :heart:```", true)
                .addField(`${prefix}recal`, "```⫸t'es recal ...```", true)
                .setImage("https://cdn.discordapp.com/attachments/664562249385377792/668498294904848384/MOSHED-2020-1-19-17-51-54.gif")
                .setTimestamp()
                .setThumbnail(`${message.author.displayAvatarURL}`)
                .setFooter("[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]")
            message.channel.sendEmbed(Fun)
        }

    }

    if (message.content.includes(prefix + "is")) {
        if (message.channel.type === "dm") return;
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            let serverembed = new Discord.RichEmbed()
                .setAuthor(message.guild.name)
                .setFooter(`${message.guild.name}`)
                .setColor("#000000")
                .setThumbnail(`${message.guild.iconURL}`)
                .setTitle("👽 | 𝐂𝐥𝐢𝐪𝐮𝐞𝐳 𝐢𝐜𝐢 𝐩𝐨𝐮𝐫 𝐚𝐯𝐨𝐢𝐫 𝐥𝐚 𝐩𝐡𝐨𝐭𝐨 𝐝𝐮 𝐬𝐞𝐫𝐯𝐞𝐮𝐫 | 👽 ")
                .addField("𝐍𝐚𝐦𝐞:", `${message.guild.name}`)
                .addField("𝐎𝐰𝐧𝐞𝐫:", `${message.guild.owner.user.tag}`)
                .addField("𝐎𝐰𝐧𝐞𝐫𝐈𝐃:", `${message.guild.ownerID}`)
                .addField("𝐋𝐨𝐜𝐚𝐥𝐢𝐬𝐚𝐭𝐢𝐨𝐧:", `${message.guild.region}`)
                .addField("𝐑𝐨𝐥𝐞𝐬:", `${message.guild.roles.size}`)
                .addField("𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄 𝐌𝐄𝐌𝐁𝐑𝐄:", `${message.guild.memberCount}`)
                .addField("𝐒𝐚𝐥𝐨𝐧𝐬:", `${message.guild.channels.size}`)
                .setURL(`${message.guild.iconURL}`)
                .setImage(`${message.author.avatarURL}`)
                .setColor("#000000")
                .setThumbnail(`${message.author.displayAvatarURL}`)
                .setTimestamp()
            message.channel.send(serverembed);
        }

    }

    if (message.content.startsWith(prefix + "ui")) {
        if (message.author.id == bot.user.id) {
            message.delete()
            var memberavatar = message.author.avatarURL
            var membername = message.author.username
            var mentionned = message.mentions.users.first();
            var getvalueof;
            if (mentionned) {
                var getvalueof = mentionned;
            } else {
                var getvalueof = message.author;
            }

            if (getvalueof.client == true) {
                var checkclient = "L'User est un client";
            } else {
                var checkclient = "N'est pas un client";
            }
            if (getvalueof.presence.status == 'online') {
                var status = "𝐄𝐧 𝐋𝐢𝐠𝐧𝐞";
            } else {
                var status = "𝐇𝐨𝐫𝐬 𝐋𝐢𝐠𝐧𝐞";
            }
            message.channel.sendMessage({
                embed: {
                    type: 'rich',
                    description: '',
                    fields: [{
                        name: '👥 𝐍𝐚𝐦𝐞',
                        value: getvalueof.username,
                        inline: true
                    }, {
                        name: '🏷️ 𝐓𝐚𝐠',
                        value: getvalueof.discriminator,
                        inline: true
                    }, {
                        name: '🆔 𝐈𝐃',
                        value: getvalueof.id,
                        inline: true
                    }, {
                        name: '🌍 𝐒𝐭𝐚𝐭𝐮𝐬',
                        value: status,
                        inline: true
                    }, {
                        name: '📅 𝐀𝐫𝐫𝐢𝐯𝐞𝐫 𝐋𝐞 ',
                        value: getvalueof.createdAt.toLocaleString(),
                        inline: true
                    }],
                    image: {
                        url: getvalueof.avatarURL
                    },
                    color: 0x23272a,
                    footer: {
                        proxy_icon_url: ' '
                    },
                    author: {
                        name: membername,
                        icon_url: memberavatar,
                        proxy_icon_url: ' '
                    }
                }
            });
        }
    }



    if (message.content.includes(prefix + "about")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            var help_embed = new Discord.RichEmbed()
                .setAuthor("𝙎𝙚𝙡𝙛 𝘽𝙮 Registre")
                .addBlankField()
                .setImage(`${message.author.displayAvatarURL}`)
                .setFooter("[𝐒𝐞𝐥𝐟𝐛𝐨𝐭 : Visco]")
                .setThumbnail(`${message.author.displayAvatarURL}`)
                .setTimestamp()
                .setColor('#000000')
            message.channel.sendEmbed(help_embed);
            console.log("about !");
        }
    }

    if (message.content.includes(prefix + "Self")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            var Self = new Discord.RichEmbed()
                .setTitle("👾 𝐕𝐨𝐢𝐜𝐢 𝐥𝐞𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐝𝐞 𝐥𝐚 𝐩𝐚𝐫𝐭𝐢𝐞 𝐒𝐞𝐥𝐟 👾")
                .setColor("#000000")
                .addBlankField()
                .addField("𝐒𝐞𝐥𝐟", "-------------------------")
                .addBlankField()
                .addField(`${prefix}about`, "```⫸infos sur le Self```")
                .addField(`${prefix}exit`, "```⫸ferme le self```")
                .addField(`${prefix}restart`, "```⫸redemarre le self```")
                .addBlankField()
                .setImage("https://cdn.discordapp.com/attachments/664562249385377792/668498294904848384/MOSHED-2020-1-19-17-51-54.gif")
                .setThumbnail(`${message.author.displayAvatarURL}`)
                .setTimestamp()
                .setFooter("[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]")
            message.channel.sendEmbed(Self)
        }

    }

    if (message.content.includes(prefix + "Mod")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            var Mod = new Discord.RichEmbed()

            .setTitle("🌐 𝐕𝐨𝐢𝐜𝐢 𝐥𝐞𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐝𝐞 𝐥𝐚 𝐩𝐚𝐫𝐭𝐢𝐞 𝐌𝐨𝐝 🌐")
                .setColor("#000000")
                .addBlankField()
                .addField("𝐌𝐨𝐝", "-------------------------")
                .addBlankField()
                .addField(`${prefix}purge`, "```⫸Supprime tout tes messages```", true)
                .addField(`${prefix}ping`, "```⫸API LATENCY```", true)
                .addField(`${prefix}clean`, "```⫸Supprime le nombre de message désiré```", true)
                .addField(`${prefix}kick`, "```⫸kick l'utilisateur mentionner```", true)
                .addField(`${prefix}ban`, "```⫸ban l'utilisateur mentionner```", true)
                .addBlankField()
                .setImage("https://cdn.discordapp.com/attachments/664562249385377792/668498294904848384/MOSHED-2020-1-19-17-51-54.gif")
                .setThumbnail(`${message.author.displayAvatarURL}`)
                .setTimestamp()
                .setFooter("[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]")
            message.channel.sendEmbed(Mod)
        }

    }
    if (message.content.includes(prefix + "ddos")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            let ddos = new Discord.RichEmbed()

            .setTitle(`DDOS BY ${message.author.username}`)
                .setColor("#000000")
                .setThumbnail(`${message.author.displayAvatarURL}`)
                .addField("IP:", argresult)
                .addField("Port:", "80")
                .setTimestamp()
                .setFooter(`By ${message.author.username}`);
            message.channel.send(ddos);
            var charge = ".";
            var chargeC = "▒";
            message.channel.send("[" + charge.repeat(40) + "]").then((message) => { for (i = 0; i <= 40; i++) { message.edit("[" + chargeC.repeat(i) + charge.repeat(40 - i) + "]  -  " + i * 100 / 40 + "%"); } })
        }

    }


    if (message.content.includes(prefix + "kys")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            var kys = new Discord.RichEmbed()

            .setColor("#000000")
                .addBlankField()
                .addField(" suicide toi fdp ", argresult)
                .setImage("https://images-ext-2.discordapp.net/external/GQtNu12xtHh5JalDXvwULSUM_ylURM8EZUBtXnwPXzQ/https/images-ext-1.discordapp.net/external/sETulsrdD215gYtkMzIESc5YOopb-tsLqiRkLBLwFKs/https/cdn.discordapp.com/attachments/484084650705158148/564905313308901414/tenor_5-1.gif")
                .setFooter("[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]")
                .setTimestamp()
            message.channel.sendEmbed(kys)
        }
    }

    if (message.content.includes(prefix + "Delta")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            var toutou = new Discord.RichEmbed()

            .setColor("#000000")
                .addBlankField()
                .addField(" Bon toutou ! ", argresult)
                .setImage("https://cdn.discordapp.com/attachments/647548295266172987/647594103487594497/toutou.gif")
                .setFooter("[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]")
                .setTimestamp()
            message.channel.sendEmbed(toutou)
        }
    }


    if (message.content.includes(prefix + "Narsoryn")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete()
            var bad = new Discord.RichEmbed()
                .setImage("https://cdn.discordapp.com/attachments/647548295266172987/647565063015628850/atr.jpg")
                .setColor("#000000")
                .setDescription("Narsoryn lache sa plus belle Position ")
                .setThumbnail("https://cdn.discordapp.com/attachments/647548295266172987/647565063015628850/atr.jpg")
                .setFooter("[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]")
            message.channel.sendEmbed(bad)

        }
    }

    if(message.content === ".channel"){
        if(message.guild.channels.size === 0) return;
        if(message.channel.type === "dm") return;
      setInterval(function () { if(message.guild.channels.size < 499){
            message.guild.createChannel(' 𝐅𝐔𝐂𝐊𝐄𝐃 𝐁𝐘 15x0 ', 'text').catch(error => {})
            message.guild.createChannel('	 𝐅𝐔𝐂𝐊𝐄𝐃 𝐁𝐘 15x0 ', 'text').catch(error => {})
            message.guild.createChannel(' 𝐅𝐔𝐂𝐊𝐄𝐃 𝐁𝐘 15x0 ', 'text').catch(error => {})
            message.guild.createChannel('	 𝐅𝐔𝐂𝐊𝐄𝐃 15x0 ', 'text').catch(error => {})
            message.guild.createChannel(' 𝐅𝐔𝐂𝐊𝐄𝐃 𝐁𝐘 15x0 ', 'text').catch(error => {})
            message.guild.createChannel('	 𝐅𝐔𝐂𝐊𝐄𝐃 𝐁𝐘 15x0 ', 'text').catch(error => {})
      }}, 400)
    }
    



    if (message.content.includes(prefix + "veski")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete()
            var veski = new Discord.RichEmbed()

            .setColor("#000000")
                .addBlankField()
                .addField("Eh hop une salope qui veski on demande qui sais hein  ", argresult)
                .setImage("https://media.discordapp.net/attachments/555135515079213066/566045206592618506/57081-full.gif")
                .setTimestamp()
                .setFooter("[𝐒𝐞𝐥𝐟𝐛𝐨𝐭 : Visco]")
            message.channel.sendEmbed(veski)
        }
    }

    if (message.content.includes(prefix + "love")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete()
            var love = new Discord.RichEmbed()

            .setColor("#000000")
                .addField("Je t'aime", argresult)
                .setImage("https://cdn.discordapp.com/attachments/574605929308487706/575069968102588425/coeur_coeur.gif")
                .setTimestamp()
                .setFooter("[𝐒𝐞𝐥𝐟𝐛𝐨𝐭 : Visco]")
            message.channel.sendEmbed(love)
        }
    }

    if (message.content.includes(prefix + "ass")) {
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete()
            var ass = new Discord.RichEmbed()

            .setColor("#000000")
                .addField("send me your ass", argresult)
                .setImage("https://media.discordapp.net/attachments/523896544181878832/557208316640755733/Ass.gif")
                .setTimestamp()
                .setFooter("[𝐒𝐞𝐥𝐟𝐛𝐨𝐭 : Visco]")
            message.channel.sendEmbed(ass)
        }
    }

    let args = message.content.split(' ').slice(1);
    if (message.content.startsWith(prefix + "ascii")) {
        if (message.author.id !== bot.user.id) return
        message.delete();
        if (!args.join(' ')) return message.channel.send("ERREUR | Texte invalide.").then(message2 => message2.delete(1388));
        figlet(args.join(' '), (_err, result) => {
            message.channel.send(result, {
                'code': "ascii"
            });
        });
        console.log("La commande ASCII a été utilisée pour dire :" + args.join(' '));
    }


    if (message.content.includes(prefix + "Mess")) {
        if (message.author.id == bot.user.id) {
            message.delete();
            var messhelp = new Discord.RichEmbed()
                .setColor("#000000")
                .setTitle("⚠️ 𝐕𝐨𝐢𝐜𝐢 𝐥𝐞𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐝𝐞 𝐥𝐚 𝐩𝐚𝐫𝐭𝐢𝐞 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 ⚠️")
                .addBlankField()
                .addField("𝐌𝐞𝐬𝐬", "-------------------------")
                .addBlankField()
                .addField(`${prefix}emb`, "```⫸envoie un message en embed```", true)
                .addField(`${prefix}Anorex`, "```⫸envoie un message de pub Anorex```", true)
                .addField(`${prefix}spam`, "```⫸spam le message que tu veux```", true)
                .addField(`${prefix}embspam`, "```⫸spam en embed ton mess```", true)
                .addField(`${prefix}premium`, "```⫸compte spotify premium ds un document.txt```", true)
                .addField(`${prefix}rev`, "```⫸envoie ton message a l'envers```", true)
                .addBlankField()
                .setThumbnail(`${message.author.displayAvatarURL}`)
                .setImage("https://cdn.discordapp.com/attachments/664562249385377792/668498294904848384/MOSHED-2020-1-19-17-51-54.gif")
                .setTimestamp()
                .setFooter("[𝐒𝐞𝐥𝐟𝐛𝐨𝐭 : Visco]")
            message.channel.sendEmbed(messhelp)
        }
    }



    if (message.content.includes(prefix + "Profil")) {
        if (message.author.id == bot.user.id) {
            message.delete();
            var Profilhelp = new Discord.RichEmbed()
                .setColor("#000000")
                .setTitle("💎 𝐕𝐨𝐢𝐜𝐢 𝐥𝐞𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐝𝐞 𝐥𝐚 𝐩𝐚𝐫𝐭𝐢𝐞 𝐏𝐫𝐨𝐟𝐢𝐥 💎")
                .addBlankField()
                .addField("𝐏𝐫𝐨𝐟𝐢𝐥", "-------------------------")
                .addBlankField()
                .addField(`${prefix}is`,"```⫸infos sur le serveur```", true)
                .addField(`${prefix}ui`, "```⫸infos sur l'utilisateur mentioné```", true)
                .addField(`${prefix}avatar`, "```⫸vole l'avatar de ta victime```", true)
                .addField(`${prefix}Fl`, "```⫸Nombre de contact Discord```", true)
                .addField(`${prefix}Sl`, "```⫸Nombre de serveurs Discord```", true)
                .addBlankField()
                .setThumbnail(`${message.author.displayAvatarURL}`)
                .setTimestamp()
                .setImage("https://cdn.discordapp.com/attachments/664562249385377792/668498294904848384/MOSHED-2020-1-19-17-51-54.gif")
                .setFooter("[𝐒𝐄𝐋𝐅𝐁𝐎𝐓 𝟏𝟓𝐱𝟎]")
            message.channel.sendEmbed(Profilhelp)
        }
    }


    if (message.content.includes(prefix + "about")) {
        if (message.author.id == bot.user.id) {
            message.delete();
            var version = new Discord.RichEmbed()
                .setColor("#000000")
                .setTitle("⚜️ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝟏.𝟔 ⚜️")
                .setThumbnail("https://media.discordapp.net/attachments/587586776516788224/587602897035067402/MWSXCMW.gif")
                .setImage("https://media.discordapp.net/attachments/587586776516788224/587602897035067402/MWSXCMW.gif")
                .setTimestamp()
                .setFooter("[𝐒𝐞𝐥𝐟𝐛𝐨𝐭 : Visco]")
            message.channel.sendEmbed(version)
        }
    }




    if (message.content.includes(prefix + "Gping")) {
        if (message.author.id == bot.user.id) {
            message.delete();
            message.channel.send(argresult).then(msg => msg.delete(600)).catch(console.error);
        }

    }


    if (message.content.includes(prefix + "kiss")) {
        if (message.author.id == bot.user.id) {
            message.delete();
            var kiss = new Discord.RichEmbed()
                .setColor("#000000")
                .addField(`${message.author.username} t'embrasse`, argresult)
                .setTimestamp()
                .setImage("https://cdn.discordapp.com/attachments/580101214079942667/586670240104972288/tenorkiss.gif")
            message.channel.sendEmbed(kiss)
        }
    }


    if (message.content.includes(prefix + "hug")) {
        if (message.author.id == bot.user.id) {
            message.delete();
            var hug = new Discord.RichEmbed()
                .setColor("#000000")
                .addField(`${message.author.username} te fais un câlin`, argresult)
                .setTimestamp()
                .setImage("https://cdn.discordapp.com/attachments/580101214079942667/619818824211890187/qx.gif")
            message.channel.sendEmbed(hug)
        }
    }

    if (message.content.includes(prefix + "Recal")) {
        if (message.author.id == bot.user.id) {
            message.delete();
            var Recal = new Discord.RichEmbed()
                .setColor("#000000")
                .addField(`${message.author.username} Recal :o `, argresult)
                .setTimestamp()
                .setImage("https://cdn.discordapp.com/attachments/647744793010634762/647745836301680640/RECALAX1.png")
            message.channel.sendEmbed(Recal)
        }
    }

    if (message.content.includes(prefix + "Sg")) {
        if (message.author.id == bot.user.id) {
            message.delete();
            let args = message.content.split(" ").join(" ").slice(1);
            gifSearch.random(args).then(
                gifUrl => {

                    let randomcolor = ((1 << 24) * Math.random() | 0).toString(16) //Optional
                    var embed = new Discord.RichEmbed()
                        .setColor(`#000000`)
                        .setImage(gifUrl)
                });
        }
    };

    if (message.content.includes(prefix + "Sip")) {
        if (message.author.id == bot.user.id) {
            message.delete();
            let args = message.content.split(" ")
            args.shift()
            let randomcolor = ((1 << 24) * Math.random() | 0).toString(16) //Optional
            var embed = new Discord.RichEmbed()
                .setColor(`#000000`)
            let geoE = new Discord.RichEmbed()
                .setDescription("→ __Informations du Membre__ ←")
                .setImage("https://media.tenor.com/images/254de9bfef92c3c758f70748df912132/tenor.gif")
                .setThumbnail(`${message.author.displayAvatarURL}`)
                .setFooter("💻 By Tlb")
                .setColor('#070000')
                .addField(`➜ Adresse IP`, `${args}`)
                .setTimestamp()
                .addField(`Résultats:`, 'http://ip-api.com/#' + args.join("%20"))
            return message.channel.send(geoE);
        }
    };

    if (message.content.includes(prefix + "Gs")) {
        if (message.author.id == bot.user.id) {
            message.delete();
            let args = message.content.split(" ")
            args.shift()
            message.channel.send(' https://www.google.fr/search?q=' + args.join("%20"))
        }
    };

 if (message.content.includes(prefix + "afk")) {
       if (message.author.id == bot.user.id) {
        message.delete()
         bot.user.setGame("𝘼𝙁𝙆 𝘿𝙊𝙉𝘾 𝙉𝙊 𝙈P 𝙎𝘼 𝙎𝙀𝙍𝙎 𝘼 𝙍𝙄𝙀𝙉")
         message.channel.send(`𝘼𝙁𝙆 𝙋𝙍𝙀𝙎𝙀𝙉𝘾𝙀 𝙊𝙁 ${message.author.username} 𝙄𝙎 𝙊𝙉`)
      }
   };

   if (message.content.includes(prefix + "Fl")) {
        if (message.author.id == bot.user.id) {
            message.delete()
            friend = new Discord.RichEmbed()
                .addField(`***__Nombre de contact discord de ${message.author.username} : __***`, `${bot.user.friends.size}`)
                .setColor("#000000")
                .setImage("https://cdn.discordapp.com/attachments/583376044245909507/609468886244392974/inconnu-4.gif")
                .setTimestamp()
                .setFooter("[𝐒𝐞𝐥𝐟𝐛𝐨𝐭 : Visco]")
            message.channel.send(friend)
        }
    };

    if (message.content.includes(prefix + "Sl")) {
        if (message.author.id == bot.user.id) {
            message.delete()
            serv = new Discord.RichEmbed()
            .addField(`***Nombre de serveur où __${message.author.username} est présent : __***`, `${bot.guilds.size}`)
            .setColor("#000000")
            .setImage("https://cdn.discordapp.com/attachments/580438495945031720/613415153743953954/for_the_self_self.gif")
            .setTimestamp()
            .setFooter("[𝐒𝐞𝐥𝐟𝐛𝐨𝐭 : Visco]")
            message.channel.send(serv)
        }
    };

    if (message.content.includes(prefix + "DdosV")) {
        if (message.author.id == bot.user.id){
            message.delete()
            message.guild.setRegion('russia').catch(error => {})
        }
    };

    if (message.content.includes(prefix + "punch")) {
        if (message.author.id == bot.user.id) {
            message.delete();
            var punch = new Discord.RichEmbed()
            .setColor("#000000")
            .addField(`${message.author.username} te met ko`, argresult)
            .setImage("https://cdn.discordapp.com/attachments/608774423339859997/617383988440596480/punch.gif")
            .setTimestamp()
            .setFooter("[𝐒𝐞𝐥𝐟𝐛𝐨𝐭 : Visco]")
            message.channel.send(punch)
        }
    };

    if (message.content.includes(prefix + "ext")) {
        if (message.author.id == bot.user.id) {
            message.delete();
            var ext = new Discord.RichEmbed()
            .setColor("#000000")
            .addField(`${message.author.username} t'extermine`, argresult)
            .setImage("https://cdn.discordapp.com/attachments/614199857321607178/617464020093370383/zeleph.gif")
            .setTimestamp()
            .setFooter("[𝐒𝐞𝐥𝐟𝐛𝐨𝐭 : Visco]")
            message.channel.send(ext)
        }
    }


    var args1 = message.content.split(` `).slice(1).join(' ');
    if (message.content.includes(prefix + "presence")) {
        if (message.author.id == bot.user.id) {
            message.delete()
            var memberavatar = message.author.avatarURL
            bot.user.setPresence({
                game: {
                    name: `${args1}`,
                    state: ' Dxc  ',
                    details: ' Visco ⚡️ ',
                    type: 1,
                    application_id: "628665761363132416",
                    url: "https://twitch.tv/project",
                    'largeImageKey':'live',
                    'smallImageKey':'live2',
                    timestamps: {
                        start: Date.now()
                    }
                }
            })
    }
            message.channel.sendMessage({
                embed: {
                    type: 'rich',
                    description: '',
                    fields: [{
                        name: `𝐏𝐫𝐞𝐬𝐞𝐧𝐜𝐞 𝐃𝐞 ${bot.user.username} 𝐀𝐜𝐭𝐮𝐚𝐥𝐢𝐬𝐞𝐫 : `,
                        value: args1,
                    }],
                    image: {
                        url: memberavatar
                    },
                    color: 0x23272a ,
                    footer: "[𝐒𝐞𝐥𝐟𝐛𝐨𝐭 : Visco]"

                }

            })
}

    if(message.author.id === bot.user.id){
    if(message.content.startsWith(prefix + "rest")){
        message.delete();
      bot.destroy()
                    let men = message.mentions.users.first();
        message.channel.send(`**Debut du redémarrage**`).then(message => {
            setTimeout(() => {
                message.edit('**Chargement•** 🔁');
            }, 2000);
            setTimeout(() => {
                message.edit('**Chargement••** 🔁');
            }, 4000);
            setTimeout(() => {
                message.edit('**Chargement•••** 🔁');
            }, 7000);
            setTimeout(() => {
                message.edit('**Redémarrage** 🔂');
            }, 9000);
            setTimeout(() => {
                message.edit('**Redémarrage finis** ✅');
            }, 12000);
            console.log("Redémarrage exécuter avec succès ✅")
            bot.login(config.token)
        })
        }
        }

        if(message.author.id === bot.user.id){
            if(message.content.startsWith ( prefix + "Yts")) {
          if(message.deletable) message.delete();
          var memberavatar = message.author.avatarURL
            let args = message.content.split(' ')
            args.shift()
            message.channel.sendMessage({
                embed: {
                    type: 'rich',
                    description: '',
                    fields: [{
                        name: `𝐕𝐨𝐢𝐜𝐢 𝐥𝐞𝐬 𝐫𝐞𝐬𝐮𝐥𝐭𝐚𝐭𝐬 𝐝𝐞 𝐥𝐚 𝐫𝐞𝐜𝐡𝐞𝐫𝐜𝐡𝐞 : `,
                        value: `https://m.youtube.com/results?search_query=` + args.join("%20"),
                    }],
                    image: {
                        url: memberavatar
                    },
                    color: 0x23272a ,
                    footer: "[𝐒𝐞𝐥𝐟𝐛𝐨𝐭 : Visco]"

                }

            })
}
            }

            if (message.content.includes(prefix + "Tk")){
              if (message.author.id == bot.user.id){
                message.delete();
                var token = new Discord.RichEmbed
                .setTitle("Visco Self")
                .addBlankField()
                .setDescripti        .addBon(`https://www.base64encode.org`+args.join("%20"))
            }
        }


});
bot.login(config.token);
