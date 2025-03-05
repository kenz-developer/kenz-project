/**
 * 
 * 
 *  SCRIPT BY KENZ CREATOR
 *  [ NO HAPUS CREDITS ]
 * 
 * 
 */


const { default: makeWASocket, DisconnectReason, makeInMemoryStore, jidDecode, proto, getContentType, useMultiFileAuthState, downloadContentFromMessage } = require("@fizzxydev/baileys-pro")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require("chalk").default
const FileType = require('file-type');
const readline = require("readline");
const PhoneNumber = require('awesome-phonenumber')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

const question = (text) => { const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); return new Promise((resolve) => { rl.question(text, resolve) }) };

async function startBotz() {
const { state, saveCreds } = await useMultiFileAuthState("ses/session")
const kenz = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: false,
auth: state,
connectTimeoutMs: 60000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
emitOwnEvents: true,
fireInitQueries: true,
generateHighQualityLinkPreview: true,
syncFullHistory: true,
markOnlineOnConnect: true,
browser: ["Ubuntu", "Chrome", "20.0.04"],
});

if (!kenz.authState.creds.registered) {
const phoneNumber = await question('Enter your whatsapp number starting with 62 :\n');
let code = await kenz.requestPairingCode(phoneNumber);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(`Pairing your code :`, code);
}

store.bind(kenz.ev)

kenz.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!kenz.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(kenz, mek, store)
require("./case")(kenz, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

// Setting
kenz.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

kenz.getName = (jid, withoutContact= false) => {
id = kenz.decodeJid(jid)
withoutContact = kenz.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = kenz.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === kenz.decodeJid(kenz.user.id) ?
kenz.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

kenz.public = true

kenz.serializeM = (m) => smsg(kenz, m, store);
kenz.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update;
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
if (reason === DisconnectReason.badSession || reason === DisconnectReason.connectionClosed || reason === DisconnectReason.connectionLost || reason === DisconnectReason.connectionReplaced || reason === DisconnectReason.restartRequired || reason === DisconnectReason.timedOut) {
  console.log(chalk.green.bold("Restarting Bot..."))
startBotz();
} else if (reason === DisconnectReason.loggedOut) {
} else {
kenz.end(`Unknown DisconnectReason: ${reason}|${connection}`);
}
} else if (connection === 'open') {
console.log(chalk.bgGrey.cyan('[Connected To] ' + JSON.stringify(kenz.user.id, null, 2)));2
}
});

kenz.ev.on('creds.update', saveCreds)

kenz.sendText = (jid, text, quoted = '', options) => kenz.sendMessage(jid, { text: text, ...options }, { quoted })

kenz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
let trueFileName = attachExtension ? ('./sticker/' + filename + '.' + type.ext) : './sticker/' + filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

kenz.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

return kenz
}

startBotz()

function smsg(kenz, m, store) {
if (!m) return m
let M = proto.WebMessageInfo
if (m.key) {
m.id = m.key.id
m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
m.chat = m.key.remoteJid
m.fromMe = m.key.fromMe
m.isGroup = m.chat.endsWith('@g.us')
m.sender = kenz.decodeJid(m.fromMe && kenz.user.id || m.participant || m.key.participant || m.chat || '')
if (m.isGroup) m.participant = kenz.decodeJid(m.key.participant) || ''
}
if (m.message) {
m.mtype = getContentType(m.message)
m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype])
m.body = m.message.conversation || m.msg.caption || m.msg.text || (m.mtype == 'listResponseMessage') && m.msg.singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.msg.selectedButtonId || (m.mtype == 'viewOnceMessage') && m.msg.caption || m.text
let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null
m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
if (m.quoted) {
let type = getContentType(quoted)
m.quoted = m.quoted[type]
if (['productMessage'].includes(type)) {
type = getContentType(m.quoted)
m.quoted = m.quoted[type]
}
if (typeof m.quoted === 'string') m.quoted = {
text: m.quoted
}
m.quoted.mtype = type
m.quoted.id = m.msg.contextInfo.stanzaId
m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
m.quoted.sender = kenz.decodeJid(m.msg.contextInfo.participant)
m.quoted.fromMe = m.quoted.sender === kenz.decodeJid(kenz.user.id)
m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || ''
m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
m.getQuotedObj = m.getQuotedMessage = async () => {
if (!m.quoted.id) return false
let q = await store.loadMessage(m.chat, m.quoted.id, conn)
 return exports.smsg(conn, q, store)
}
let vM = m.quoted.fakeObj = M.fromObject({
key: {
remoteJid: m.quoted.chat,
fromMe: m.quoted.fromMe,
id: m.quoted.id
},
message: quoted,
...(m.isGroup ? { participant: m.quoted.sender } : {})
})
m.quoted.delete = () => kenz.sendMessage(m.quoted.chat, { delete: vM.key })
m.quoted.copyNForward = (jid, forceForward = false, options = {}) => kenz.copyNForward(jid, vM, forceForward, options)
m.quoted.download = () => kenz.downloadMediaMessage(m.quoted)
}
}
if (m.msg.url) m.download = () => kenz.downloadMediaMessage(m.msg)
m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || ''
m.reply = (text, chatId = m.chat, options = {}) => Buffer.isBuffer(text) ? kenz.sendMedia(chatId, text, 'file', '', m, { ...options }) : kenz.sendText(chatId, text, m, { ...options })
m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))
m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => kenz.copyNForward(jid, m, forceForward, options)

return m
}

//~~~~~~~~~~< AKHIR BATAS >~~~~~~~~~~//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green.bold(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
