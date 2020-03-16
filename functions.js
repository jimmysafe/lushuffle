
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
    let left = leftOutMembers.length > 0 ? leftOutMembers.toString() : ".."
    let group = []
    let teamNumber = 0

    while(members.length){
        teamNumber++
        let users = members.splice(0, 3)
        group.push({name: `TEAM ${teamNumber}`, value: users.toString()})
    }
    group.push({name: 'TE STO A DI DE NO', value: left})
    msg.channel.send({ embed: embedLayout(group) })
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
