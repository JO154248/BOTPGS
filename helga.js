const
	{
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const hx = require('hxz-api')
const crypto = require('crypto')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ytsd = require('ytsr')
const yts = require( 'yt-search')
const brainly = require('brainly-scraper')
const ig = require('insta-fetcher')
const cheerio = require('cheerio')
const os = require('os')
const translate = require('@vitalets/google-translate-api')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const fromData = require('form-data')
const speed = require('performance-now')
const dtod = "6281398860278@s.whatsapp.net"
const otod = "6282138919347@s.whatsapp.net"

    //── 「 Lib 」 ──//

const { y2mateA, y2mateV } = require('./lib/y2mate')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { uploadimg, upload } = require('./lib/uploadimg')
const { pinterest } = require('./lib/pinterest')
const { color, bgcolor } = require('./lib/color')
const { fetchJosn, fetchText } = require('./lib/fetcher')
const { antiSpam } = require('./lib/antispam')
const { exec } = require('child_process')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const Exif = require('./lib/exif')
const exif = new Exif()

    //── 「 DataBase 」 ──//

const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))



    //── 「 Settings 」 ──//


ky_ttt = []
cmhit = []
autorespon = true
playmusic = true
antidelete = true
menusimpel = false
menuall = true
baterai = {
battery: "" || "Not detected",
isCharge: "" || false
}
offline = false
publik = true
bugc = true
waktuafk = 'Nothing'
alasanafk = 'Nothing'
NamaBot = settings.NamaBot
NomorOwner = settings.NomorOwner
NamaOwner = settings.NamaOwner
multi = true
nopref = false

    //── 「 LolKey 」 ──//
    
HelKey = settings.HelKey

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	function monospace(string) {
    return '```' + string + '```'
}   
var fgi = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6281398860278-1613049930@g.us" } : {})
},
message: { 
"videoMessage": { 
"title": `${tampilUcapan}`,
"h": `${jmn}`,
'duration': '99999', 
'gifPlayback': 'true', 
'caption': `${calender}`,
'jpegThumbnail': fs.readFileSync('./helga.jpg')
}
}
    }   
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
    //── 「 Module Pembatas om 」 ──//
    
module.exports = helga = async (helga, mek) => {
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
	    if (!mek.message) return
	    if (mek.key && !mek.key.remoteJid == 'status@broadcast') return
	    if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3 && bugc && !mek.key.fromMe) {
		nums = mek.participant
        longkapnye = "\n".repeat(420)
        tekuss = `\`\`\`TANDAI TELAH DIBACA !!!\`\`\`${longkapnye}\`\`\`@⁨${nums.split('@')[0]} Terdeteksi Telah Mengirim Bug, @⁨${nums.split('@')[0]} Akan Dikick!\`\`\`\n`
        helga.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
        helga.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
        }
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		global.prefix
		me = helga.user
		m = simple.smsg(helga, mek)
		const antibot = m.isBaileys
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		helga.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const dfrply = fs.readFileSync('./helga.jpg')
		cmhit.push(command)
        mess = {
			wait: '𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿!',
			success: '𝗕𝗲𝗿𝗵𝗮𝘀𝗶𝗹!',
			toxic: 'Jangan Toxic!',
			error: {
				stick: '𝗧𝗶𝗱𝗮𝗸 𝗱𝗮𝗽𝗮𝘁 𝗺𝗲𝗻𝗴𝗮𝗸𝘀𝗲𝘀 𝘃𝗶𝗱𝗲𝗼!',
				Iv: '𝗟𝗶𝗻𝗸 𝗧𝗶𝗱𝗮𝗸 𝗩𝗮𝗹𝗶𝗱!',
                api: '𝗘𝗿𝗿𝗼𝗿'
			},
			only: {
				group: '𝗛𝗮𝗻𝘆𝗮 𝘂𝗻𝘁𝘂𝗸 𝗱𝗶 𝗱𝗮𝗹𝗮𝗺 𝗴𝗿𝘂𝗽!',
				ownerG: '𝗛𝗮𝗻𝘆𝗮 𝘂𝗻𝘁𝘂𝗸 𝗽𝗲𝗺𝗶𝗹𝗶𝗸 𝗴𝗿𝘂𝗽!',
				ownerB: 'Khusus Owner!',
				admin: 'Khusus admins!',
				Badmin: 'Jadikan Bot admin!'
			}
		}
		const botNumber = helga.user.jid
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? helga.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const conts = mek.key.fromMe ? helga.user.jid : helga.contacts[mek.sender]
        const pushname = mek.key.fromMe ? helga.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'   
		const totalchat = await helga.chats.all()
		const groupMetadata = isGroup ? await helga.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumber.includes(sender)
		const q = args.join(' ')
		const isNsfw = isGroup ? nsfww.includes(from) : false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isAntiWame = isGroup ? antiwame.includes(from) : false
		 const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
		const isUrl = (url) => {
		return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		if (antibot === true) return
		const katalog = (teks) => {
             res = helga.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_© Panca Gama Store_*", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftrol})
             helga.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = helga.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6282138919347-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/IlpQRKWDZed0GgVHmYJUbl', "groupName": `${NamaBot}`, "footerText": "*_© Panca Gama Store_*", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:finv})
            helga.relayWAMessage(grup)
        }
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

await helga.setStatus(`❄️BOT PG Store | ⛈️Running Time : ${uptime}`).catch((_) => _);
      settingstatus = new Date() * 1;
}
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await helga.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		const pporigi = fs.readFileSync('./helga.jpg')
		const sekarang = new Date().getTime();
			
			
    //── 「 Waktuuu 」 ──//			
			
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Midnight 🌚"; break;
                case 1: jamss = "Midnight 🌚"; break;
                case 2: jamss = "Midnight 🌚"; break;
                case 3: jamss = "Midnight 🌔"; break;
                case 4: jamss = "Midnight 🌔"; break;
                case 5: jamss = "Dawn 🌄"; break;
                case 6: jamss = "Morning 🌄"; break;
                case 7: jamss = "Morning 🌄"; break;
                case 8: jamss = "Morning ☀️"; break;
                case 9: jamss = "Morning ☀️"; break;
                case 10: jamss = "Morning ☀️"; break;
                case 11: jamss = "Afternoon 🌞"; break;
                case 12: jamss = "Zuhur 🌞"; break;
                case 13: jamss = "Afternoon 🌞"; break;
                case 14: jamss = "Afternoon 🌞"; break;
                case 15: jamss = "Asr 🌞"; break;
                case 16: jamss = "Afternoon ☀️"; break;
                case 17: jamss = "Evening 🌄"; break;
                case 18: jamss = "Maghrib 🌄"; break;
                case 19: jamss = "Isha 🌙"; break;
                case 20: jamss = "Night 🌙"; break;
                case 21: jamss = "Night 🌙"; break;
                case 22: jamss = "Midnight 🌙"; break;
                case 23: jamss = "Midnight 🌚"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
		const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                        }
if(time2 < "19:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                         }
if(time2 < "18:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/08/7b/81087b2e732dc0e25d8875b135d579b9.jpg')
                                         }
if(time2 < "15:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "11:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "06:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/15/8e/ea/158eea299c01433aae6744599d2fdc3a.jpg')
}


    //── 「 Produc 」 ──//

const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": imageTime //Gambarnye
					},
					"title": `${tampilUcapan} ${pushname}`, //Kasih namalu 
					"description": `${tampilUcapan} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${tampilUcapan} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 26,
                            status: 1,
                            surface : 1,
                            message: `Follow Instagram\npancagama.store`, //Kasih namalu
                            orderTitle: `Follow Instagram\npancagama.store`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan} ${pushname}`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281398860278-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
	                  //pin
const pinterest = (queryy) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://id.pinterest.com/search/pins/?autologin=true&q=${queryy}`, {
      headers: {
        cookie: "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
      }
    }).then(({data}) => {
      const $ = cheerio.load(data)
      const result = []
      const hasil = []
      $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
        result.push(link)
      })
      result.forEach(function (v) {
        if (v == undefined) return
        hasil.push(v.replace(/236/g,'736'))
      })
      hasil.shift()
      resolve(hasil)
    }).catch(reject)
  })
}
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6282138919347-1616169743@g.us",
			"inviteCode": `${tampilUcapan} ${pushname}`,
			"groupName": `${tampilUcapan} ${pushname}`, 
            "caption": `${tampilUcapan} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6281398860278-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281398860278-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281398860278-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${tampilUcapan} ${pushname}`,
                 "title": `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281398860278-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
                     const fmen = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 2021,
                            status: 1,
                            surface : 1,
                            message: `JO`, //Kasih namalu
                            thumbnail: fs.readFileSync('./helga.jpg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const sendBug = async (target) => {
      await helga.relayWAMessage(
        helga.prepareMessageFromContent(
          target,
          helga.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
    //But verify
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
helga.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ${tampilUcapan} \n\nSebelum Mengakses Bot Verify Terlebih Dahulu Ya`
const daftar2 = '```Ketik Tombol Di Bawah Untuk Mendaftar Ke Database Helga Zex```'
const daftar3 = [{buttonId: `verify`,buttonText: {displayText: `🌸𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙀𝘿 `,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
helga.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Document
const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await helga.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
helga.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await helga.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
helga.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await helga.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
helga.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await helga.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
helga.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
 if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
		  sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© JO_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
			}
		}
		if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === helga.user.jid){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
			       sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© JO_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				}
						}
					}
				}
			}
		}
		const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./database/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					helga.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        helga.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        helga.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await helga.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        helga.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
		const reply = (teks) => {
			helga.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const simir = (teks) => {
			helga.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks) => {
			helga.sendMessage(hehe, teks, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? helga.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : helga.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
helga.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
helga.sendMessage(from, hasil, type, options).catch(e => {
helga.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
  const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					helga.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await helga.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = dfrply
				helga.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
           if (budy.startsWith('>')){
if (!isOwner && !mek.key.fromMe) return
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('x')){
if (!mek.key.fromMe && !isOwner) return
try {
return helga.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
			// AUTO
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					helga.sendMessage(from, result, sticker, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					helga.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					helga.sendMessage(from, result, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}
			if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 2500) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        helga.groupRemove(from, sender);
      }
			}
        if (budy.includes("wa.me/","https://wa.me//","https://wa.me/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiWame) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				helga.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Wa.me terdeteksi Auto kick!')
			    helga.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
            }
        }
        // MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }
        if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				helga.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    helga.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
                      }
if (!settings.autoread) {
helga.chatRead(from)
}
if (!settings.autocomposing) {
helga.updatePresence(from, Presence.composing)
}
if (!settings.autorecording) {
helga.updatePresence(from, Presence.recording)
}
if (budy.startsWith('helga')){
sendButMessage(from, `${JSON.stringify(me, null, 2)}`, "*𝚉𝚞𝚔𝚊𝙲𝚑𝚊𝚗 𝚅3.0.0*", [{buttonId: 'igm', buttonText: {displayText: 'Instagram'}, type: 1},{buttonId: 'ytm', buttonText: {displayText: 'YouTube'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
}

   const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    if (isCmd && !isGroup) {console.log(color('| ZUKA |', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
	    if (!command) {console.log(color('| PESAN |', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
		
        switch (isStc) {
     case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('Reply stickernya bgsd!')
        su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
				}
        switch (command) {
        
    //── 「 Fiturr 」 ──//        
        
case 'allmenu':
ploces = `*INFO-WAKTU*

- _Tanggal_ : *${calender}*
- _Hari_ : *${week} ${weton}*
- _Jam_ : *${timeWib} WIB*

*LIST-ADMIN*

- ${prefix}hidetag <text>
- ${prefix}tagall <text>
- ${prefix}kick <reply pesan>
- ${prefix}welcome <on / off>
- ${prefix}public
- ${prefix}self
- ${prefix}closegc 
- ${prefix}opengc 

*LIST-MEMBER*

- ${prefix}sticker <reply gambar>
- ${prefix}swm <author | wm>
- ${prefix}take <reply sticker>
- ${prefix}attp <text>
- ${prefix}toimg <reply sticker>
`
but = [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'List Menu' }, type: 1 }]
sendButMessage(from, ploces, 'Panca Gama Store', but)
break   
case 'menu':
 stod = `${sender}`
 listMsg = {
 buttonText: 'Menu Store',
 footerText: '*Menu*',
 description: `Hai Kak @${stod.split('@')[0]}\nGunakan Bot Dengan Bijak Yaa..\n\n️💬 ${tampilUcapan}\n⏰ Jam : ${jmn}\n🌄 Hari : ${week} ${weton}\n🗓️ Tanggal : ${calender}\n`,
 sections: [
                     {
                      "title": `SILAHKAN PILIH SALAH SATU COMMAND DIBAWAH`,
 rows: [
                          {
                              "title": "ML-A",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "ML-B",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "ML-C",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "BONUS-DM-ML",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "PROMO",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "PUBGM-A",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "FREE-FIRE",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "NC-PUBG",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "PUBGM-B",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "ECHOES-IDENTITY",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "CREDIT-LIFE-AFTER",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "CASH-POINT-BLANK",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "TOKEN-LISTRIK",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "KUOTA-SMARTFREN",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "KUOTA-XL",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "KUOTA-TELKOMSEL",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "PULSA-XL",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "PULSA-SMARTFREN",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "PULSA-TF-XL",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "PULSA-TF-XL",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "PULSA-TELKOMSEL",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "PULSA-AXIS",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "PULSA-TRI",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "PULSA-TF-TRI",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "PULSA-TF-TELKOMSEL",
                              "description": '',
                              "rowId": ""
                              
                           },
                           {
                              "title": "PULSA-INDOSAT",
                              "description": '',
                              "rowId": ""
                              
                           },
                           
                        ]
                     }],
 listType: 1
}
helga.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'ml-a':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 DM ML VIA ID 」*


*PAKET A (FAST)*

• Proses : Via ID
• Status : Open ✅
• Proses : Fast 1-30 Menit Sesuai Antrian, Maximal 24 Jam Jika Overload atau Eror
• Stock : Ready Stock ✅


86 💎 = Rp20.930
172 💎 = Rp41.860
257 💎 = Rp62.790
344 💎 = Rp83.720
429 💎 = Rp104.650
514 💎 = Rp125.580
706 💎 = Rp167.440
792 💎 = Rp188.370
878 💎 = Rp209.300
963 💎 = Rp230.230
1412 💎 = Rp334.880
2195 💎 = Rp497.835
3688 💎 = Rp828.230
4394 💎 = Rp995.670
5532 💎 = Rp1.243.840
6238 💎 = Rp1.411.280
7727 💎 = Rp1.741.675
9288 💎 = Rp2.072.070

SL/TW = Rp138.138
SL++ = Rp313.950

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'ml-b':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*PAKET B (Santai)*

• Proses : Via ID
• Status : Open ✅
• Proses : Fast 5-360 Menit Sesuai Antrian, Maximal 24 Jam Jika Overload atau Eror
• Stock : Ready Stock ✅


39 💎 = Rp8.997
65 💎 = Rp14.995
78 💎 = Rp17.994
92 💎 = Rp20.993
133 💎 = Rp29.990
172 💎 = Rp38.987
266 💎 = Rp60.013
358 💎 = Rp81.006
400 💎 = Rp89.934
492 💎 = Rp110.927
534 💎 = Rp119.957
670 💎 = Rp149.946
800 💎 = Rp179.970
936 💎 = Rp209.959
1342 💎 = Rp299.892
2700 💎 = Rp599.783
4150 💎 = Rp899.675
7050 💎 = Rp1.499.458

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'ml-c':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*PAKET C (Semi Fast)*

• Proses : Via ID
• Status : Open ✅
• Proses : Fast 3-360 Menit Sesuai Antrian, Maximal 24 Jam Jika Overload atau Eror
• Stock : Ready Stock ✅



12 💎 = Rp4.532
19 💎 = Rp6.798
28 💎 = Rp9.240
36 💎 = Rp11.550
44 💎 = Rp13.860
59 💎 = Rp18.480
74 💎 = Rp23.100
85 💎 = Rp26.565
170 💎 = Rp53.130
185 💎 = Rp57.750
222 💎 = Rp69.300
240 💎 = Rp75.075
296 💎 = Rp92.400
370 💎 = Rp115.500
408 💎 = Rp127.050
568 💎 = Rp173.250
875 💎 = Rp265.650
1159 💎 = Rp346.500
2010 💎 = Rp577.500
4830 💎 = Rp1.386.000
6050 💎 = Rp1.732.500

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'bonus-dm-ml':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

Hitungan Bonus DM ML 💎

_Note : Bonus tidak dihitung dalam event_

*Paket A*

86 = 78+8
172 = 156+16
257 = 234+23
344 = 312+32
429 = 390+39
514 = 468+46
706 = 625+81
792 = 703+89
878 = 781+97
963 = 859+104
1412 = 1250+162
2195 = 1860+335
3688 = 3099+589
4394 = 3724+670
5532 = 4649+883
6238 = 5274+964
7727 = 6509+1218
9288 = 7740+1538


*Paket B*

39 = 34+5
65 = 58+7
78 = 68+10
92 = 83+9
133 = 120+13
172 = 154+18
266 = 240+26
358 = 323+35
400 = 360+40
492 = 443+49
534 = 480+54
670 = 600+70
800 = 720+80
936 = 840+96
1342 = 1200+142
2700 = 2400+300
4150 = 3600+550
7050 = 6000+1050

*Paket C*

12 = 11+1
19 = 17+2
28 = 25+3
36 = 33+3
44 = 40+4
59 = 53+6
74 = 67+7
85 = 77+8
170 = 154+16
185 = 167+17
222 = 200+22
240 = 217+23
296 = 256+40
370 = 333+37
408 = 367+41
568 = 503+65
875 = 774+101
1159 = 1003+156
2010 = 1708+302
4830 = 4003+827
6050 = 5003+1047

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'promo':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*🔥 ROMO 🔥*

FREE FIRE VIA ID✅
355💎 : 46.000
720💎 : 90.000
2000💎 : 248.000
7290💎 : 895.000

MOBILE LEGEND✅
STARLIGHT  : 89.000
TWILIGHT : 89.000
STARLIGHT PLUS : 205.000


`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'free-fire':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 DM FREE FIRE VIA ID | FF 」*

• Proses : Via ID
• Status : Open ✅
• Proses : Fast 5-15 Menit Sesuai Antrian🔥
• Stock : Ready Stock ✅

5💎 = Rp900
20💎 = Rp3.000
50💎 = Rp7.500
70💎 = Rp9.500
100💎 = Rp13.600
140💎 = Rp18.600
210💎 = Rp28.000
355💎 = Rp46.500
500💎 = Rp65.500
720💎 = Rp92.000
1000💎 = Rp128.500
2000💎 = Rp250.500
7290💎 = Rp927.000
36.500💎 = Rp4.550.000
73.100💎 = Rp9.170.000

Member Mingguan : Rp28.800
Member Bulanan : Rp139.920

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'pubgm-a':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 UC PUBG MOBILE | Via ID 」*


*Paket A (Fast)*

• Proses : Via ID
• Status : Open ✅
• Proses : Fast 4-95 Menit Sesuai Antrian🔥
• Stock : Ready Stock ✅
• Info : All Region & Server



25 💵 = Rp5.000
36 💵 = Rp7.000
52 💵 = Rp10.000
62 💵 = Rp12.000
73 💵 = Rp14.000
123 💵 = Rp24.000
131 💵 = Rp25.000
186 💵 = Rp36.000
221 💵 = Rp42.000
770 💵 = Rp140.000
2013 💵 = Rp350.000
4200 💵 = Rp700.000
8750 💵 = Rp1.400.000

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'nc-pubg':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 NC PUBG NS 」*

• Proses : Via Kode Redeem
• Status : Open ✅
• Proses : Semi Fast 10-120 Menit Sesuai Antrian
• Stock : Ready Stock ✅
• Info : Kode Dikirim Via Pribadi Chat



300 🪙 = Rp16.000
1580 🪙 = Rp79.000
3850 🪙 = Rp199.000
10230 🪙 = Rp499.000
16800 🪙 = Rp799.000
35000 🪙 = Rp1.599.000

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'echoes-identity':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 Echoes Identity V | Via ID 」*

• Proses : Via SERVER + ID / Username
• Status : Open ✅
• Proses : Fast 3-90 Menit Sesuai Antrian🔥
• Stock : Ready Stock ✅
• Info : All Region & Server



63 💌 = Rp15.000
194 💌 = Rp45.000
320 💌 = Rp75.000
724 💌 = Rp149.000
2124 💌 = Rp439.000
3494 💌 = Rp739.000
6914 💌 = Rp1.499.000

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'pubgm-b':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*Paket B (Semi Fast)*

• Proses : Via ID
• Status : Open ✅
• Proses : Fast 10-120 Menit Sesuai Antrian🔥
• Stock : Ready Stock ✅
• Info : All Region & Server



263 💵 = Rp57.750
525 💵 = Rp115.500
1375 💵 = Rp288.750
2875 💵 = Rp577.500
6000 💵 = Rp1.155.000
9375 💵 = Rp1.732.500

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'credit-life-after':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 Credit Life After Via ID 」*

• Proses : Via SERVER + ID
• Status : Open ✅
• Proses : Fast 5-60 Menit Sesuai Antrian🔥
• Stock : Ready Stock ✅
• Info : All Region & Server


65 🪙 = Rp14.242
330 🪙 = Rp71.797
558 🪙 = Rp114.961
1108 🪙 = Rp215.677
2268 🪙 = Rp431.497
3468 🪙 = Rp676.093
5768 🪙 = Rp1.078.957
7768 🪙 = Rp1.438.657

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'cash-point-blank':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 Cash Point Blank Via ID 」*

• Proses : Via User ID
• Status : Open ✅
• Proses : Fast 10-360 Menit Sesuai Antrian🔥
• Stock : Ready Stock ✅


1.200 💰 = Rp11.550
2.400 💰 = Rp23.100
6.000 💰 = Rp57.750
12.000 💰 = Rp115.500
24.000 💰 = Rp231.000
36.000 💰 = Rp346.500
60.000 💰 = Rp577.500

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'token-listrik':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 Token Listrik ⚡ 」*

• Proses : Via No.Meter / ID Pel
• Status : Open ✅
• Proses : Fast 1-15 Menit Sesuai Antrian🔥
• Stock : Ready Stock✅
• Token : Akan Dikirim Via Chat Private👌🏻


• ⚡20.000 = Rp20.450 ✅
• ⚡50.000 = Rp50.450 ✅
• ⚡100.000 = Rp100.450 ✅
• ⚡200.000 = Rp200.450 ✅
• ⚡500.000 = Rp500.450 ✅
• ⚡1.000.000 = Rp1.000.450 ✅
• ⚡5.000.000 = Rp5.000.450 ✅
• ⚡10.000.000 = Rp10.000.450 ✅

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'kuota-smartfren':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 PAKET ISI ULANG KUOTA | SMARTFREN 」*

• Proses : Via Nomor Hp
• Status : Open ✅
• Proses : Fast 5-15 Menit Sesuai Antrian🔥
• Stock : Ready Stock ✅


*KUOTA DATA* ✨

• 4GB = Rp10.500
(24jam 1.25GB, Malam 1.75GB, WA/LINE 1GB) Masa Aktif 7 Hari

• 6GB = Rp21.000
(24jam 2GB, Malam 3GB, WA/LINE 1GB) Masa Aktif 30 Hari

• 10GB = Rp30.000
(24jam 4GB, Malam 4GB, WA/LINE 2GB) Masa Aktif 30 Hari

• 16GB = Rp42.500
(24jam 6GB, Malam 8GB, WA/LINE 2GB) Masa Aktif 30 Hari



*KUOTA UNLIMITED* ♾️

• UNLIMITED LITE = Rp23.800
(Fup 1GB/Hari) Masa Aktif 7 Hari

• UNLIMITED MEDIUM = Rp41.500
(Fup 1GB/Hari) Masa Aktif 14 Hari

• UNLIMITED LITE+ = Rp56.500
Fup 500MB/Hari) Masa Aktif 28 Hari

• UNLIMITED HIGH = Rp81.000
(Fup 1GB/Hari) Masa Aktif 28 Hari

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'kuota-xl':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 PAKET ISI ULANG KUOTA | XL 」*

• Proses : Via Nomor Hp
• Status : Open ✅
• Proses : Fast 5-15 Menit Sesuai Antrian🔥
• Stock : Ready Stock ✅


*HotRod*

• Hotrod 1.5GB 3Hari = Rp9.850
_(Semua Jaringan, Kuota 1.5GB) Masa Aktif 3 Hari_

• Hotrod 500MB 7Hari = Rp5.600
_(Semua Jaringan, Kuota 500MB) Masa Aktif 7 Hari_

• Hotrod 1GB 7Hari = Rp9.650
_(Semua Jaringan, Kuota 1GB) Masa Aktif 7 Hari_

• Hotrod 2GB 7Hari = Rp18.500
_(Semua Jaringan, Kuota 2GB) Masa Aktif 7 Hari_

• Hotrod 3GB 7Hari = Rp25.000
_(Semua Jaringan, Kuota 3GB) Masa Aktif 7 Hari_

• HotRod 800MB 30Hari = Rp29.500
_(800Mb Kecepatan Hingga 100Mbps) Masa Aktif 30 Hari_

• HotRod 1.5GB 30Hari = Rp48.700
_(1.5GB Kecepatan Hingga 100Mbps) Masa Aktif 30 Hari_

• HotRod 3GB 30Hari = Rp58.040
_(3GB Kecepatan Hingga 100Mbps) Masa Aktif 30 Hari_

• HotRod 6GB 30Hari = Rp98.450
_(6GB Kecepatan Hingga 100Mbps) Masa Aktif 30 Hari_



*XTRA DATA*

• Xtra Kuota 30GB 30Hari = Rp12.400
_(1GB Sosmed + 14GB iFlix + 15GB Midnight 01.00-06.00) Masa Aktif 30 Hari_

• Xtra ON 1GB Unlimited = Rp14.800
_(Kuota Full 1GB) Masa Aktif Unlimited_

• Xtra ON 2GB Unlimited = Rp24.000
_(Kuota Full 2GB) Masa Aktif Unlimited_

• XTRA Combo Lite 4.5GB + 1.5GB = Rp28.700
_(2.5GB Full + 2GB Midnight + 1.5 Bonus Lokal Daerah Tertentu + Unlimited WA) Masa Aktif 30 Hari_

• XTRA Combo Lite 7GB + 3GB = Rp40.200
_(6GB Full + 1GB Midnight + 3GB Bonus Lokal Daerah Tertentu + Unlimited WA) Masa Aktif 30 Hari_

• XTRA Comho 5GB +10GB + Pulsa 2.000 = Rp57.200
_(5GB Kuota Utama + 10GB YouTube + Unlimited YouTube [01.00-06.00] + Pulsa 2.000) Masa Aktif 30 Hari_

• XTRA Combo VIP 5GB + 5GB = Rp75.370
_(5GB Kuota Utama + 5GB YouTube + Unlimited YouTube [01.00-06.00] Masa Aktif 30 Hari_

• XTRA Combo VIP 5GB + 10GB + Pulsa 2.000 = Rp66.900
_(5GB Kuota Utama + 10GB YouTube + Unlimited YouTube [01.00-06.00] + Pulsa 2.000) Masa Aktif 30 Hari_

• XTRA Combo Lite 13GB + 5GB = Rp63.500
_(13GB Full + 5GB Bonus Lokal Daerah Tertentu + Unlimited SosMed) Masa Aktif 30 Hari_

• XTRA Combo 10GB + 20GB + Pulsa 5.000 = Rp89.500
_(10GB Kuota Utama + 20GB Kuota YouTube + Unlimited YouTube [01.00-06.00] + Pulsa 5.000) Masa Aktif 30 Hari_

• XTRA Combo Lite 25GB + 5GB = Rp100.500
(25GB Full + 5GB Bonus Lokal Daerah Tertentu + Unlimited SosMed) Masa Aktif 30 Hari

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'paket-telkomsel':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*PAKET TEMBAK TELKOMSEL*
 
UNLIMITED 24 JAM FULL 30 HARI

FUP 50 GB : 100.000
FUP 80 GB : 145.000
FUP 110 GB : 191.000
FUP 150 GB : 242.000

*CEK NOMER DULU‼️*

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'pulsa-xl':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 PULSA REGULER XL 」*

• Proses : Via Nomor Hp
• Status : Open ✅
• Proses : Fast 5-15 Menit Sesuai Antrian🔥
• Stock : Ready Stock ✅
• Info : Menambah Masa Aktif ‼️


• 5.000 = Rp6.250 
• 10.000 = Rp11.500 
• 15.000 = Rp15.800 
• 25.000 = Rp25.925 
• 30.000 = Rp31.250 
• 50.000 = Rp50.950 
• 100.000 = Rp99.900 
• 150.000 = Rp149.900 
• 200.000 = Rp199.300

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'pulsa-smartfren':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 PULSA REGULER SMARTFREN 」*

• Proses : Via Nomor Hp
• Status : Open ✅
• Proses : Fast 5-15 Menit Sesuai Antrian🔥
• Stock : Ready Stock ✅
• Info : Menambah Masa Aktif ‼️


• 5.000 = Rp6.200 ✅
• 10.000 = Rp11.100 ✅
• 20.000 = Rp20.900 ✅
• 25.000 = Rp25.950 ✅
• 50.000 = Rp50.500 ✅
• 60.000 = Rp60.600 ✅
• 100.000 = Rp99.700 ✅
• 150.000 = Rp149.200 ✅

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'pulsa-tf-xl':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 PULSA TRANSFER XL 」*

• Proses : Via Nomor Hp
• Status : Open ✅
• Proses : Semi - Fast 5-60 Menit Sesuai Antrian🔥
• Stock : Ready Stock ✅
• Info : Tidak Menambah Masa Aktif‼️


• 30.000 = Rp29.800
• 40.000 = Rp38.900
• 50.000 = Rp49.400
• 60.000 = Rp58.500
• 70.000 = Rp67.800
• 80.000 = Rp76.800
• 90.000 = Rp85.900
• 100.000 = Rp97.700
• 200.000 = Rp187.500
• 400.000 = Rp375.500
• 500.000 = Rp473.300

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'pulsa-tf-axis':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 PULSA TRANSFER AXIS 」*

• Proses : Via Nomor Hp
• Status : Open ✅
• Proses : Semi - Fast 5-60 Menit Sesuai Antrian🔥
• Stock : Ready Stock ✅
• Info : Tidak Menambah Masa Aktif‼️


• 10.000 = Rp11.400
• 20.000 = Rp19.900
• 30.000 = Rp29.700
• 50.000 = Rp49.100
• 90.000 = Rp86.400
• 100.000 = Rp96.900
• 200.000 = Rp191.200
• 400.000 = Rp382.000
• 500.000 = Rp473.300

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'pulsa-telkomsel':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 PULSA REGULER TELKOMSEL 」*

• Proses : Via Nomor Hp
• Status : Open ✅
• Proses : Fast 5-15 Menit Sesuai Antrian🔥
• Stock : Ready Stock ✅
• Info : Menambah Masa Aktif ‼️


• 3.000 = Rp5.350 
• 5.000 = Rp5.950 
• 10.000 = Rp10.950 
• 15.000 = Rp15.760 
• 20.000 = Rp20.900 
• 25.000 = Rp25.850 
• 30.000 = Rp30.875 
• 40.000 = Rp40.300 
• 50.000 = Rp50.950 
• 75.000 = Rp74.400 
• 100.000 = Rp99.000 
• 150.000 = Rp147.800 
• 200.000 = Rp197.700 
• 300.000 = Rp297.700

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'pulsa-axis':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 PULSA REGULER AXIS 」*

• Proses : Via Nomor Hp
• Status : Open ✅
• Proses : Fast 5-15 Menit Sesuai Antrian🔥
• Stock : Ready Stock ✅
• Info : Menambah Masa Aktif ‼️


• 5.000 = Rp6.300 
• 10.000 = Rp11.400 
• 15.000 = Rp15.800 
• 25.000 = Rp25.625 
• 30.000 = Rp30.750 
• 50.000 = Rp50.475 
• 100.000 = Rp99.900 
• 200.000 = Rp199.300

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'pulsa-tri':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 PULSA REGULER TRI 」*

• Proses : Via Nomor Hp
• Status : Open ✅
• Proses : Fast 5-15 Menit Sesuai Antrian🔥
• Stock : Ready Stock ✅
• Info : Menambah Masa Aktif ‼️


• 5.000 = Rp6.050 
• 8.000 = Rp9.300 
• 10.000 = Rp11.200 
• 15.000 = Rp16.000 
• 20.000 = Rp20.800 
• 25.000 = Rp25.950 
• 30.000 = Rp30.900 
• 50.000 = Rp50.650 
• 100.000 = Rp99.850 
• 150.000 = Rp149.000 
• 200.000 = Rp198.750

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'pulsa-tf-tri':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 PULSA TRANSFER TRI 」*

• Proses : Via Nomor Hp
• Status : Open ✅
• Proses : Semi - Fast 5-60 Menit Sesuai Antrian🔥
• Stock : Ready Stock ✅
• Info : Tidak Menambah Masa Aktif‼️


• 10.000 = Rp10.500
• 20.000 = Rp20.000
• 30.000 = Rp29.700
• 40.000 = Rp39.300
• 50.000 = Rp48.800
• 60.000 = Rp58.300
• 70.000 = Rp67.900
• 80.000 = Rp77.500
• 90.000 = Rp87.400
• 100.000 = Rp96.800
• 150.000 = Rp143.700
• 200.000 = Rp190.700

`
but = [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'pulsa-tf-telkomsel':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 PULSA TRANSFER TELKOMSEL 」*

• Proses : Via Nomor Hp
• Status : Open ✅
• Proses : Semi - Fast 5-60 Menit Sesuai Antrian🔥
• Stock : Ready Stock ✅
• Info : Tidak Menambah Masa Aktif‼️


• 10.000 = Rp10.300
• 20.000 = Rp19.400
• 30.000 = Rp29.800
• 40.000 = Rp38.400
• 50.000 = Rp48.000
• 60.000 = Rp56.200
• 70.000 = Rp65.300
• 80.000 = Rp74.600
• 90.000 = Rp84.000
• 100.000 = Rp93.200
• 150.000 = Rp134.500
• 200.000 = Rp177.876
• 400.000 = Rp345.086
• 500.000 = Rp467.845

`
but = [{ buttonId: `${prefix}qris`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'pulsa-indosat':
       yes = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 PULSA REGULER INDOSAT 」*

• Proses : Via Nomor Hp
• Status : Open ✅
• Proses : Fast 5-15 Menit Sesuai Antrian🔥
• Stock : Ready Stock ✅
• Info : Menambah Masa Aktif ‼️


• 5.000 = Rp6.375 ✅
• 10.000 = Rp11.650 ✅
• 12.000 = Rp1 2.800 ✅
• 15.000 = Rp16.350 ✅
• 20.000 = Rp21.025 ✅
• 25.000 = Rp26.000 ✅
• 30.000 = Rp30.800 ✅
• 50.000 = Rp50.350 ✅
• 100.000 = Rp99.525 ✅
• 150.000 = Rp148.900 ✅
• 200.000 = Rp197.540 ✅

`
but = [{ buttonId: `${prefix}qris`, buttonText: { displayText: 'Payment ⚠' }, type: 1 }]
sendButMessage(from, menu, 'Panca Gama Store', but)
break
case 'proses':
ploces = `_Pesanan_:

_Status pesanan_ : *Diproses⌛*
_Tanggal_ : *${calender}*
_Hari_ : *${week} ${weton}*
_Jam_ : *${timeWib} WIB*

*Pesanan sedang diproses @${sender.split('@')[0]}*`
but = [{ buttonId: `!adventure`, buttonText: { displayText: 'Di Tunggu😉' }, type: 1 }]
sendButMessage(from, ploces, 'Panca Gama Store', but)
break
case 'done':
ploces = `_Pesanan_:

_Status pesanan_ : *Terkirim✅*
_Tanggal_ : *${calender}*
_Hari_ : *${week} ${weton}*
_Jam_ : *${timeWib} WIB*

*Pesanan selesai, silahkan drop kembali di  Panca Gama Store OPEN✅*
*~Panca Gama Store*`
but = [{ buttonId: `!adventure`, buttonText: { displayText: 'Makasih' }, type: 1 }]
sendButMessage(from, ploces, 'Panca Gama Store', but)
break
case 'payment':
       yes = '```'
       qute = fs.readFileSync('./helga.jpg') 
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}

*「 PEMBAYARAN 💳 」*

Transfer Sesuai Nominal, Tidak Kurang dan Tidak Lebih

• *GOPAY* = 087734276016 / WAHYU JOHANDONO

• *DANA* = 087734276016 / WAHYU JOHANDONO

• *SHOPEE PAY* = 087734276016 / panca.gama.id

• *MANDIRI* = 1840002851986 / WAHYU JOHANDONO

• *Kode Alfamart* = Chat Admin
`
sendButImage(from, menu, `*_Powered By Panca Gama Store_*`, qute, [                      
{
buttonId: `${prefix}qris`,
buttonText: {
displayText: `Qris All Payment ⚠`,
},
type: 1,
},
]);
break
case 'qris':
qute = fs.readFileSync('./qris.jpg') 
helga.sendMessage(from, qute, image, { quoted: mek, caption: '*Scan Di Atas Untuk Melakukan Pembayaran Menggunakan Qris😉*' })
break
case 'kick':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			kick = mek.message.extendedTextMessage.contextInfo.participant
		    helga.groupRemove(from, [kick])
						reply('Sukses mengeluarkan peserta')
                    break     
case 'mode':
buttonss = [{buttonId: `public`, buttonText: {displayText: 'PUBLIC👥'}, type: 1},{buttonId: `self`, buttonText: {displayText: 'SELF👤'}, type: 1}]
const buMess = {
    contentText: "SELF/PUBLIC",
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
}
await helga.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: mek})
break
				case 'public':
				if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			publik = true
				reply('Sukses mengubah mode self ke public')
			break
			case 'self':
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				publik = false
				reply('Sukses mengubah mode public ke self')
			break                    
case 'toimg':
				case 'tomedia':
              
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await helga.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await helga.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							helga.sendMessage(from, buffer, image, {quoted: mek})
							fs.unlinkSync(ran)
						})
					}
					break                    
case 'sticker':
					case 'stiker':
					case 's':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await helga.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											helga.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await helga.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											helga.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'stickerwm':
					case 'swm':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await helga.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											helga.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await helga.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											helga.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'takestick':
					case 'take':
						if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await helga.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							helga.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break    
case 'opengc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   reply(`Sukses membuka grup ${groupName}`)
						helga.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'closegc':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						reply(`Sukses menutup grup ${groupName}`)
						helga.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break	
				case 'ttp4':  
				case 'ttp2':  
				case 'ttp3':  
				case 'ttp':  
				case 'attp':
              
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp ZukaChan`)
					atetepe = await getBuffer(`https://hardianto.xyz/api/ttpcustom?text=${encodeURIComponent(c)}&color=black&apikey=hardianto`)
					helga.sendMessage(from, atetepe, sticker, { quoted: mek })
					break             
            case 'hidetag':
            if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break  
                case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'welcome': 
	        if (!isGroup) return reply(mess.only.group)
			if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
					if (args[0] === 'on') {
						if (isWelkom) return reply('Sudah Aktif Kak')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome')
					} else if (args[0] === 'off') {
						if (!isWelkom) return reply('Sudah Mati Kak')
						var ini = welkom.indexOf(from)
						welkom.splice(ini, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'welcome off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'welcome on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btngrass = {
    contentText: `${anu}`,
    footerText: '*Panca Gama Store*',
    buttons: punten,
    headerType: 1
}
await helga.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: mek})
					}
					break

					default:
		break
		 if (isMedia && isAuto && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = mek
						const media = await helga.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(dla.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								helga.sendMessage(from, buffer, sticker, { quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
				//DATABASE
	           // FOR VIDEO OR G
		   if ((isMedia & isAuto && !mek.message.imageMessage || isQuotedVideo)) {
						const encmedia = mek
						const media = await helga.downloadAndSaveMediaMessage(encmedia)
						if (Buffer.byteLength(media) >= 6186598.4) return reply(`sizenya terlalu gede sayang, dd gakuat :(`)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Gagal, video nya kebesaran, dd gakuat`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								helga.sendMessage(from, buff, sticker, { quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
						}
					  }
					} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
	console.log(color('[ ERROR ]', 'red'), e)
	// console.log(e)
	}
    }
    }