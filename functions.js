
const embedLayout = (data) => {
    data.forEach(el => {
        let replaced = el.value.replace(/,/g, ', ').toUpperCase()
        el.value = replaced
    })
    const layout = {
        color: 0x0099ff,
        title: "Allora Fratello'...",
        author: {
            name: 'Lush says..',
        },
        description: 'Te sto a di che mo divido tutti quelli a REBIBBIA in squadre da 3',
        thumbnail: {
            url: process.env.LUSH_PHOTO,
        },
        fields: data
    }
    return layout
}

const returnMessage = (members, msg, leftOutMembers) => {
    let GROUP1
    let GROUP2
    let GROUP3
    let GROUP4

    let LEFTOUTGROUP = leftOutMembers.length > 0 ? leftOutMembers.toString() : ".."

    switch(members.length){
        case 3:
            GROUP1 = members.toString()
            msg.channel.send({ embed: embedLayout([
                { name: "TEAM 1", value: GROUP1 },
                { name: "TE STO A DI DE NO", value: LEFTOUTGROUP}
            ]) })
            break
        case 6: 
            GROUP1 = members.slice(0, 3).toString()
            GROUP2 = members.slice(3, 6).toString()
            msg.channel.send({ embed: embedLayout([
                { name: "TEAM 1", value: GROUP1 }, 
                { name: "TEAM 2", value: GROUP2 },
                { name: "TE STO A DI DE NO", value: LEFTOUTGROUP}
            ]) });
            break
        case 9:
            GROUP1 = members.slice(0, 3).toString()
            GROUP2 = members.slice(3, 6).toString()
            GROUP3 = members.slice(6, 9).toString()
            msg.channel.send({ embed: loadGraphicLayout([
                { name: "TEAM 1", value: GROUP1 }, 
                { name: "TEAM 2", value: GROUP2 }, 
                { name: "TEAM 3", value: GROUP3 },
                { name: "TE STO A DI DE NO", value: LEFTOUTGROUP}
            ]) });
            break
        case 12:
            GROUP1 = members.slice(0, 3).toString()
            GROUP2 = members.slice(3, 6).toString()
            GROUP3 = members.slice(6, 9).toString()
            GROUP4 = members.slice(9, 12).toString()
            msg.channel.send({ embed: loadGraphicLayout([
                { name: "TEAM 1", value: GROUP1 }, 
                { name: "TEAM 2", value: GROUP2 }, 
                { name: "TEAM 3", value: GROUP3 }, 
                { name: "TEAM 4", value: GROUP4 },
                { name: "TE STO A DI DE NO", value: LEFTOUTGROUP}
            ]) });
            break
        default: null
    }
}

const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

module.exports = {
    returnMessage,
    shuffle
}
