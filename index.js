const Discord = require('discord.js');
require('dotenv').config()
const { shuffle, returnMessage } = require('./functions')

const client = new Discord.Client();

client.once('ready', () => {
    console.log("READY")
});

client.on('message', msg => {
    if(msg.content === '/lush'){
        const HUMANS = client.guilds.get('515598075700445232');

        let channel = HUMANS.channels.find(ch => ch.name === "REBIBBIA")
        let members = shuffle(channel.members.map(user => user.user.username))

        if(members.length >= 0){
            let leftOutMembers = []
            let leftOut = members.length % 3

            switch(leftOut){
                case 2:
                    leftOutMembers.push(members[members.length -2])
                    leftOutMembers.push(members[members.length -1])
                    members.splice( (members.length - leftOut)  , leftOut )
            
                    returnMessage(members, msg, leftOutMembers)
                    break
                case 1:
                    leftOutMembers.push(members[members.length -1])
                    members.splice( (members.length - leftOut)  , leftOut )
                    returnMessage(members, msg, leftOutMembers)
                    break
                default:
                    returnMessage(members, msg, leftOutMembers)
                    break
            }  

        } else {
            const refuseEmbed = {
                color: 0x0099ff,
                title: "Allora Fratello'...",
                author: {
                    name: 'Lush says..',
                },
                description: "TE STO A DI DE NO.. TOCCA ALMENO ESSE IN 3 O PIU PE FATTE FA LA SQUADRA FRATELLO'",
                thumbnail: {
                    url: process.env.LUSH_PHOTO,
                },
            };
            msg.channel.send({ embed: refuseEmbed });
        }
    }
    else if(msg.content === '/lush-reset') {
        msg.channel.send('Resetting...')
        .then(msg => client.destroy())
        .then(() => client.login(process.env.BOT_TOKEN));
    }
})

client.login(process.env.BOT_TOKEN);