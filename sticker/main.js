const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const brightcolor  = require('colors');
const encodeUrl = require('encodeurl')
const chalk = require('chalk')
const moment = require("moment-timezone")
const figlet = require('figlet')
const gcdetect = JSON.parse(fs.readFileSync('./database/gcdetect.json'))
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
			
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')			
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')			
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')	

//nocache
nocache('./helga.js', module => console.log(color('|UPDATE BASE|'), color(`${module} Updated!`, 'red')))


const starts = async (helga = new WAConnection()) => {
	helga.logger.level = 'warn'
	helga.version = [2, 2140, 14]
	console.log(color(`\x1b[1;37m> Base New\n`,'red'))
	console.log(color(figlet.textSync('Helga Base', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'yellow'))
	console.log(color('\n> GitHub : ','red'), color(`HelgaIlham`,'white'))
	console.log(color('> YouTube : ','red'), color(`Helga Zexs`,'white'))
console.log(color('> TikTok : ','red'), color(`@ilhamgz_20`,'white'))
console.log(color('> Instagram : ','red'), color(`@helga_store20`,'white'))
console.log(color('\n\n\n Big Thanks To\n\n','orange'), color(`Allah SWT\nMy Parents\nMy Family\nHelga Ilham\n`,'purple'))
	helga.browserDescription = [ 'Base Helga', 'ubuntu', '3.0' ]

	helga.on('qr', () => {
	console.log(color('Helga','yellow'), color('New','yellow'), color('Base','yellow'), color('[ Scan QR Nya ]'))
})
	helga.on('credentials-updated', () => {
		fs.writeFileSync('./session.json', JSON.stringify(helga.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Base Helga')
	})
	fs.existsSync('./session.json') && helga.loadAuthInfo('./session.json')
	helga.on('connecting', () => {
		start('2', 'NewBase')
	})
	helga.on('open', () => {
		success('2', 'Done, Welcome Owner🎯')
	})
    
	// session
	await helga.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./session.json`, JSON.stringify(helga.base64EncodedAuthInfo(), null, '\t'))
    
	if (!settings.autoplaymusic) {
exec(`cd /sdcard/download && play *mp3`)
}
   
   helga.on('chat-update', async (mek) => {
        require('./helga.js')(helga, mek)
        ownerNumber = ["6282138919347@s.whatsapp.net","6282138919347@s.whatsapp.net",`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "6282138919347@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })   
const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
      kma = gam1;
      mhan = await helga.prepareMessage(id, kma, MessageType.image);
       buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      }
      helga.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await helga.prepareMessage(id, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
helga.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}    
    //SERAH LU MAU GANTI KYK MANA
        helga.on("group-update", async (anu) => {

    metdata = await helga.groupMetadata(anu.jid);

    if (anu.announce == "false") {

      teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`;

      helga.sendMessage(metdata.id, teks, MessageType.text);

      console.log(`- [ Group Opened ] - In ${metdata.subject}`);

    } else if (anu.announce == "true") {

      teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`;

      helga.sendMessage(metdata.id, teks, MessageType.text);

      console.log(`- [ Group Closed ] - In ${metdata.subject}`);

    } else if (!anu.desc == "") {

      tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";

      teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${

        anu.descOwner.split("@")[0]

      }\n Deskripsi Baru : ${anu.desc}`;

      helga.sendMessage(metdata.id, teks, MessageType.text, {

        contextInfo: { mentionedJid: [tag] },

      });

      console.log(`- [ Group Description Change ] - In ${metdata.subject}`);

    } else if (anu.restrict == "false") {

      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`;

      helga.sendMessage(metdata.id, teks, MessageType.text);

      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);

    } else if (anu.restrict == "true") {

      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`;

      helga.sendMessage(metdata.id, teks, MessageType.text);

      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);

    }

  });

helga.on('group-participants-update', async (anu) => {

	try {

		mdata = await helga.groupMetadata(anu.jid)

		console.log(anu)

		if (anu.action == 'add') {

			num = anu.participants[0]

			try {

				ppUrl = await helga.getProfilePicture(num)

				} catch {

					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'

				}

				img = await getBuffer(ppUrl)

				teks = ` Hi @${num.split('@')[0]}\nSELAMAT DATANG DI\nDI *${mdata.subject}*\nJANGAN LUPA BACA RULES☺`

				sendButImage(from, anu.jid, teks, MessageType.image, {thumbnail: ppUrl})

			} else if (anu.action == 'remove') {

			num = anu.participants[0]

			try {

				kuburan = 'https://telegra.ph/file/f9c6f4a3043bd313e9afb.jpg'

				} catch {

					kuburan = 'https://telegra.ph/file/f9c6f4a3043bd313e9afb.jpg'

				}

				img = await getBuffer(kuburan)

				teks = `@${num.split('@')[0]}\nTELAH KELUAR DARI\n*${mdata.subject}*`

				sendButImage(from, anu.jid, teks, MessageType.image, {thumbnail: kuburan})

			} else if (anu.action == 'promote') {

			num = anu.participants[0]

			try {

				ppUrl = await helga.getProfilePicture(num)

				} catch {

					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'

				}

				img = await getBuffer(ppUrl)

				teks = `「 PROMOTE - DETECTED 」\n\nNama : @${num.split("@")[0]}\nStatus : Member -> Admin\nGroup : ${mdata.subject}`

				sendButImage(anu.jid, teks, ``, img,but = [{buttonId: `Hello World!`, buttonText: {displayText: `SELAMAT KAK`}, type: 1}], options = {contextInfo: {mentionedJid: [num]}})

			} else if (anu.action == 'demote') {

			num = anu.participants[0]

			try {

				ppUrl = await helga.getProfilePicture(num)

				} catch {

					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'

				}

				img = await getBuffer(ppUrl)

				teks = `「 DEMOTE - DETECTED 」\n\nNama : @${num.split("@")[0]}\nStatus : Admin -> Member\nGroup : ${mdata.subject}`

				sendButImage(anu.jid, teks, ``, img,but = [{buttonId: `Hello World!`, buttonText: {displayText: `SABAR YA`}, type: 1}], options = {contextInfo: {mentionedJid: [num]}})

			}

		} catch (e) {

			console.log(e)

			}

		})

helga.on('group-update', async (anu) => {
	try { 
	console.log(anu)
	from = anu.jid
	group = await helga.groupMetadata(anu.jid)
	if (!anu.desc == '') {
		tag = anu.descOwner.replace('@c.us', '@s.whatsapp.net')
		helga.sendMessage(group.id, `Group Description Change\n\n• Admin : @${tag.split("@")[0]}\n• Group : ${group.subject}\n• descTime : ${anu.descTime}\n• descID : ${anu.descId}\n• descNew : ${anu.desc}`, MessageType.text, {contextInfo: { mentionedJid: [tag]}})
		} else if (!anu.restrict == '') {
			helga.sendMessage(group.id, `Group Restrict Change\n\n• Group : ${group.subject}\n• groupId : ${anu.jid}\n• restrict : ${anu.restrict}`, MessageType.text)
			} else if (!anu.announce == '') {
				helga.sendMessage(group.id, `Group Announce Change\n\n• Group : ${group.subject}\n• groupId : ${anu.jid}\n• announce : ${anu.announce}`, MessageType.text)
				} 
					} catch(err) {
						e = String(err)
						console.log(e)
						}

	})

helga.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NomorOwner}` + ':+' + `${NomorOwner}` + '\n' + 'END:VCARD'
        helga.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        helga.sendMessage(callerId, { displayname: `${NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer ${NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./helga.jpg'),sourceUrl:`https://wa.me/6282138919347?text=Assalamualaikum`}}})
        await sleep(5000)
        await helga.blockUser(callerId, "add")
        })
        
	helga.on('message-delete', async (m) => {
if (!m.key.fromMe && !antidelete) {
if (!m.key.remoteJid == 'status@broadcast') return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = helga.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = helga.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
helga.copyNForward(m.key.remoteJid, m.message)
helga.sendMessage(m.key.remoteJid, `▷\`\`\`Anti Delete\`\`\`

▢ \`\`\`Nama : @${m.participant.split("@")[0]}\`\`\`
▢ \`\`\`Tipe : ${c3type}\`\`\`
▢ \`\`\`Tanggal : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})
}

function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()
