/*
   * Base Simpel
   * Created By Kenz Creator 
*/

require("./config")
const fs = require('fs')
const chalk = require("chalk").default
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const yts = require("yt-search")
const didyoumean = require("didyoumean")
const similarity = require("similarity")
const { runtime, fetchJson, isUrl, getBuffer, tanggal } = require("./lib/function")
const { remini, tiktokDl } = require("./lib/scraper.js")
const { ytmp3, ytmp4 } = require("ruhend-scraper")

const path = "./case.js";

const Case = {
    list: () => {
        if (!fs.existsSync(path)) return [];
        let data = fs.readFileSync(path, "utf-8");
        let matches = [...data.matchAll(/case\s+["'](.+?)["']/g)];
        return matches.map(m => m[1]);
    },

    add: (name, content) => {
        if (!fs.existsSync(path)) fs.writeFileSync(path, "");
        let currentData = fs.readFileSync(path, "utf-8");
        fs.writeFileSync(path, currentData + "\n\n" + content);
        return true;
    },

    delete: (name) => {
        if (!fs.existsSync(path)) return false;
        let data = fs.readFileSync(path, "utf-8");
        let newData = data.replace(new RegExp(`case\\s+["']${name}["']\\s*:\\s*{[\\s\\S]*?break;`, "g"), "").trim();
        fs.writeFileSync(path, newData);
        return true;
    },

    get: (name) => {
        if (!fs.existsSync(path)) return false;
        let data = fs.readFileSync(path, "utf-8");
        let match = data.match(new RegExp(`case\\s+["']${name}["']\\s*:\\s*{([\\s\\S]*?)break;`, "g"));
        return match ? match[0] : false;
    }
};

module.exports = Case;

const { 
BufferJSON,
WA_DEFAULT_EPHEMERAL,
useMultiFileAuthState,
makeWASocket,
Browsers,
downloadAndSaveMediaMessage,
makeCacheableSignalKeyStore,
sendAsSticker,
pino,
generateWAMessageFromContent,
generateWAMessageContent,
generateWAMessage,
prepareWAMessageMedia,
downloadContentFromMessage,
areJidsSameUser,
getContentType,
InteractiveMessage,
proto,
delay
} = require('@fizzxydev/baileys-pro')

const getFileTimestamp = async (filePath) => {
  try {
    const stats = await fs.promises.stat(filePath);
    return stats.mtimeMs;
  } catch (error) {
    return null;
  }
};

const isValidUrl = (url) => {
  try {
    new URL(url);
    return url.endsWith('.js');
  } catch (error) {
    return false;
  }
};

module.exports = async (kenz, m) => {
try {
const body = (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) ? (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) : '';
const content = JSON.stringify(m.message)
const fatkuns = m.quoted || m;
const quoted = 
fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
m.quoted ? m.quoted : m;
const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';

//==================================================//
//REACTION\\
const reaction = async (emoji) => {
kenz.sendMessage(m.chat, {
react: {
text: emoji,
key: m.key
}
})
}

const example = (teks) => {
return `*Contoh :* ${prefix+command} ${teks}`
}

const Reply = async (teks) => {
return kenz.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: botname, 
body: `2025 ${namaOwner}`, 
thumbnailUrl: "https://img12.pixhost.to/images/628/572153211_kenzhosting.jpg", 
sourceUrl: "https://whatsapp.com/channel/0029VazCs3v2Jl8Eyr1rSi0X", 
}}}, {quoted: qtext})
}

//======CMD=======//

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(botname2), chalk.blue.bold(`[ PESAN ]`), chalk.blue.bold(`${m.sender.split("@")[0]} =>`), chalk.blue.bold(`${prefix+command}`))
}

//==================================================//
const from = m.key.remoteJid
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const isMediaa = /image|video/.test(mime)
const isPrivate = from.endsWith('@s.whatsapp.net')
const isGroup = from.endsWith('@g.us')
const isNewsletter = from.endsWith('@newsletter')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const qmsg = (quoted.msg || quoted)
const groupMetadata = m.isGroup ? await kenz.groupMetadata(m.chat) :''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter((v) => v.admin !== null).map((i) => i.id) : [] || []
const groupOwner = m.isGroup ? groupMetadata?.owner : false;
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
const groupMembers = isGroup ? groupMetadata.participants : ''
//==================================================//
if (budy.startsWith('kntl', 'goblok', 'kontol', 'gblk', 'kntol', 'tolol', 'tlol', 'pea', 'ytm', 'yatim', 'yteam', 'ytim', 'lawak', 'memek', 'mmk', 'mmek', 'anj', 'ajg', 'anjg', 'anjing', 'anjink', 'lonte', 'ngentod', 'ngentot', 'ngewe', 'ngtd', 'ngntd', 'pepek', 'ppk', 'ppek', 'jomok', 'gila', 'asu', 'lonte', 'anjgg')) {
if (!isGroup) return
if (isKenz) return
if (!isBotAdmins) return m.reply(`lu lebih ${budy}`)
if (sender == botNumber) return
m.reply("Allah tidak menyukai perkataan buruk, yang diucapkan secara terus terang kecuali oleh orang yang dizalimi. Dan Allah Maha mendengar, Maha mengetahui\n*QS. An-Nisa: 148*")
kenz.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
await kenz.groupParticipantsUpdate(m.chat, [sender], 'delete')
}

const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (kenz.user.id.split(':')[0]+'@s.whatsapp.net' || kenz.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await kenz.decodeJid(kenz.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const isKenz = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)

//============================//
const moment = require("moment-timezone")
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss")
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "Selamat Malam"
} else if (time >= "15:00:00" && time < "19:00:00") {
ucapanWaktu = "Selamat Sore"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "Selamat Siang"
} else if (time >= "06:00:00" && time < "11:00:00") {
ucapanWaktu = "Selamat Pagi"
} else {
ucapanWaktu = "Selamat Subuh"
}
const bulan = moment.tz('Asia/Jakarta').format('MM/MMMM')
const tahun = moment.tz('Asia/Jakarta').format('YYYY')
const tanggal = moment().tz("Asia/Jakarta").format("dddd, d")
const jam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wibTime = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const penghitung = moment().tz("Asia/Jakarta").format("dddd, D MMMM - YYYY")
//===================================//

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Botzz Kenz"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}

//similariti
if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('case.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Maaf, command yang kamu berikan salah. mungkin ini yang kamu maksud:\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`
m.reply(response)
}}

//===================================//

switch(command) {
case "menu": case "help": {
    const owned = owner + "@s.whatsapp.net";
    let awal = `Selamat datang kak *${pushname}*
Perkenalkan saya adalah *${namabot}*, diciptakan oleh *${namaOwner}* untuk membantu keseharian kamu kak ${pushname}. Selamat menggunakan bot kami, kasih saran dong fitur apa yang kamu mau?

*\`[ INFO BOT 🤖 ]\`*
> *Runtime Bot : ${runtime(process.uptime())}*
> *NAMA SCRIPT : ${namasc}*
> *TYPE SCRIPT : COMMONJS*
`;

    let imgsc = await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/okcg1g.jpg' } }, { upload: kenz.waUploadToServer });

    const msg = await generateWAMessageFromContent(m.chat, {
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.fromObject({ text: awal }),
            contextInfo: { mentionedJid: [m.sender, owned] },
            header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: true,
                title: `─ Waktu: *${ucapanWaktu}*\n─ Runtime : *${runtime(process.uptime())}*\n© 2025 Kenz Creator`,
                ...imgsc
            }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: "Silakan pilih menu di bawah ini.\n\nKETIK .allmenu UNTUK MELIHAT SEMUA MENU" }),
            buttons: [
                {
                    buttonId: ".allmenu",
                    buttonText: { displayText: "📜 All Menu Botz" },
                    type: 1
                }
            ],
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                    {
                        name: "cta_url",
                        buttonParamsJson: JSON.stringify({
                            display_text: "🔗 Hubungi Owner",
                            url: linkowner,
                            merchant_url: "https://www.google.com"
                        })
                    }
                ]
            })
        })
    }, { userJid: m.sender, quoted: m });

    await kenz.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}
break;

case "allmenu": {
  let status = global.owner.includes(m.sender) ? "👑 Owner" : "😹 User Biasa";
  const kawin = `*BERIKUT ALL MENU BOT RAMADHAN 2025*

*\`[ INFO BOT ]\`*
> *NAMA SCRIPT : ${namasc}*
> *RUNTIME BOT : ${runtime(process.uptime())}*
> *BAILEYS : @fizzxydev/baileys-pro*
> *VERSION BOT : ${global.version}*
> *UCAPAN : ${ucapanWaktu}*
> *NAMA OWNER : ${namaOwner}*
> *VERSION BAILEYS : ${global.baileys}*

*\`[ INFO USER ]\`*
> *NAMA USER : ${pushname}*
> *NUMBER USER : wa.me/${senderNumber}*
> *STATUS USER : ${status}*

*\`[ ALL MENU BOT ]\`*

\`─ AI MENU BOT ─\`
*.ai*
*.blackbox*
*.text2img*
*.gpt*
*.luminai*
*.llama*
*.deepseek*

\`─ DOWNLOAD MENU BOT ─\`
*.play*
*.tiktokmp3*
*.plays*
*.play2*
*.play3*
*.yts*
*.ytmp3*
*.ytmp4*

\`─ STORE MENU BOT ─\`
*.done*
*.proses*
*.store*
*.dana*
*.gopay*
*.pay*

\`─ MAIN MENU BOT ─\`
*.gitclone*
*.sfile*
*.tourl*
*.tourl2*
*.hdr*
*.ssweb*
*.shortlink*

\`─ INSTALL MENU BOT ─\`
*.installpanel*
*.uninstallpanel*
*.installtemabilling*
*.uninstalltema*
*.startwings*

\`─ ISLAM MENU BOT ─\`
*.niatsholat*
*.ayatkursi*
*.quotesislami*

\`─ SPAM MENU BOT ─\`
*.sendpairing*

\`─ PUSH MENU BOT ─\`
*.pushkontak*

\`─ OTHER MENU BOT ─\`
*.listgc*
*.tagall*
*.hidetag*
*.listdomain*
*.cookpad*
*.cekidch*
*.upch*
*.tagsw*
`
kenz.sendMessage(m.chat, {
    caption: kawin,
    image: {url: "https://img12.pixhost.to/images/633/572225323_kenzhosting.png" },
    mediaType: 1,
    renderLargerThumbnail: true
}, {
    quoted: qlive
});
}
break

case "beli": {
    const fs = require("fs");
    const crypto = require("crypto");
    const pathProduk = "./data/produk.json";
    const pathOrder = "./data/order.json";
    const qrisImage = "./data/qris.jpg"; // QRIS tetap di folder
    const buyerID = m.sender.split("@")[0];

    if (!fs.existsSync(pathProduk)) return Reply("Data store belum tersedia!");

    let data = JSON.parse(fs.readFileSync(pathProduk));
    let idProduk = args[0];

    if (!idProduk) return Reply("Format salah! Gunakan: *beli <IDProduk>*\nContoh: *beli P001*");

    let produk = data.find(p => p.id.toLowerCase() === idProduk.toLowerCase());
    if (!produk) return Reply("Produk tidak ditemukan! Cek ID produk yang benar.");

    let idTRX = crypto.randomBytes(6).toString("hex").toUpperCase(); // ID transaksi unik
    let expiredAt = new Date(Date.now() + 5 * 60000).toLocaleTimeString();

    let text = `📌 *Detail Produk*\n\n🔹 *Nama:* ${produk.nama}\n💰 *Harga:* ${produk.harga}\n📝 *Deskripsi:* ${produk.deskripsi}\n📌 *ID Produk:* ${produk.id}\n📌 *ID Transaksi:* ${idTRX}\n\n✅ *Gunakan QRIS di bawah untuk pembayaran!*\n📌 *Expired:* ${expiredAt}`;

    let buttons = [
        { buttonId: `.batalbeli ${idTRX}`, buttonText: { displayText: "❌ Batalkan Pembelian" }, type: 1 }
    ];

    let buttonMessage = {
        image: { url: qrisImage },
        caption: text,
        footer: "Segera lakukan pembayaran sebelum waktu habis.",
        buttons: buttons,
        headerType: 4
    };

    // **Kirim QRIS dan simpan ID pesan**
    let sentMsg = await kenz.sendMessage(m.chat, buttonMessage, { quoted: m });

    // **SIMPAN ORDER KE order.json**
    let orders = fs.existsSync(pathOrder) ? JSON.parse(fs.readFileSync(pathOrder)) : [];
    orders.push({
        idTRX,
        buyerID,
        pushName: m.pushName,
        senderNumber: m.sender,
        productID: produk.id,
        productName: produk.nama,
        price: produk.harga,
        expiredAt: Date.now() + 5 * 60000,
        msgKey: sentMsg.key.id // Simpan ID pesan buat dihapus nanti
    });
    fs.writeFileSync(pathOrder, JSON.stringify(orders, null, 2));

    // **HAPUS PESAN QRIS SETELAH 5 MENIT**
    setTimeout(() => {
        let updatedOrders = JSON.parse(fs.readFileSync(pathOrder)).filter(o => o.idTRX !== idTRX);
        fs.writeFileSync(pathOrder, JSON.stringify(updatedOrders, null, 2));
        kenz.sendMessage(m.chat, { delete: sentMsg.key }); // Hapus pesan QRIS
        Reply("⏳ Waktu pembayaran habis! QRIS telah dihapus.");
    }, 5 * 60000);

    return;
}
break;

case "batalbeli": {
    const pathOrder = "./data/order.json";

    let idTRX = args[0]; // Ambil ID transaksi dari command
    if (!idTRX) return Reply("Format salah! Gunakan: *batalbeli <IDTransaksi>*");

    if (!fs.existsSync(pathOrder)) return Reply("Tidak ada transaksi yang bisa dibatalkan!");

    let orders = JSON.parse(fs.readFileSync(pathOrder));
    let orderIndex = orders.findIndex(o => o.idTRX === idTRX);

    if (orderIndex === -1) return Reply("Transaksi tidak ditemukan atau sudah expired!");

    let order = orders[orderIndex];

    // **Hapus pesan QRIS**
    if (order.msgKey) {
        kenz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: order.msgKey } });
    }

    // **Hapus order dari JSON**
    orders.splice(orderIndex, 1);
    fs.writeFileSync(pathOrder, JSON.stringify(orders, null, 2));

    Reply(`✅ Transaksi *${idTRX}* telah dibatalkan & QRIS dihapus!`);
}
break;

case "store": {
    const fs = require("fs");
    const path = "./data/produk.json";

    if (!fs.existsSync(path)) return Reply("Data store belum tersedia!");

    let data = JSON.parse(fs.readFileSync(path));
    if (data.length === 0) return Reply("Store masih kosong!");

    let text = "*📦 DAFTAR PRODUK STORE 📦*\n\n";
    data.forEach((item, index) => {
        text += `🔹 *${item.nama}*\n💰 Harga: ${item.harga}\n📝 Deskripsi: ${item.deskripsi}\n📌 ID Produk: ${item.id}\n\nKETIK .beli JIKA INGIN BELI PRODUK\n\n`;
    });

    let buttons = [
        { buttonId: `.beli`, buttonText: { displayText: "Silahkan Pilih Produk" }, type: 1 }
    ];

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({ text }),
                    footer: proto.Message.InteractiveMessage.Footer.create({ text: "Silakan hubungi admin untuk pembelian." }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: "💎 KENZDEV STORE 💎",
                        subtitle: "Tersedia berbagai produk",
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons
                    })
                })
            }
        }
    }, {});

    return kenz.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}
break;

case "cookpad": {
const axios = require('axios')
const cheerio = require('cheerio')

class CookpadScraper {
  constructor(searchTerm) {
    this.searchTerm = searchTerm;
    this.baseUrl = 'https://cookpad.com/id/cari/';
  }

  async fetchSearchResults(page = 1) {
    const url = `${this.baseUrl}${this.searchTerm}?page=${page}`;
    const response = await axios.get(url);
    return cheerio.load(response.data);
  }

  async extractRecipeLinks($) {
    const links = [];
    $('a.block-link__main').each((i, el) => {
      const href = $(el).attr('href');
      if (href) {
        links.push(`https://cookpad.com${href}`);
      }
    });
    if (links.length === 0 && $('.text-cookpad-14.xs\\:text-cookpad-20.font-semibold').text().includes('Tidak dapat menemukan resep?')) {
      throw new Error('Tidak ditemukan resep untuk pencarian ini.');
    }
    return links;
  }

  async fetchRecipePage(url) {
    const response = await axios.get(url);
    return cheerio.load(response.data);
  }

  async extractRecipeDetails($) {
    const title = $('h1').text().trim();
    const mainImage = $('img[alt^="Foto resep"]').attr('src');
    const cookingTime = $('.flex.flex-wrap .mise-icon-text').first().text().trim();
    const serving = $('.flex.flex-wrap .mise-icon-text').last().text().trim();

    const ingredients = [];
    $('#ingredients .ingredient-list ol li').each((i, el) => {
      if ($(el).hasClass('font-semibold')) {
        const subheading = $(el).find('span').text().trim();
        ingredients.push(`*${subheading}*`);
      } else {
        const quantity = $(el).find('bdi').text().trim();
        const ingredient = $(el).find('span').text().trim();
        ingredients.push(`- ${quantity} ${ingredient}`);
      }
    });

    const steps = [];
    $('ol.list-none li.step').each((i, el) => {
      const stepNumber = $(el).find('.flex-shrink-0 .text-cookpad-14').text().trim();
      const description = $(el).find('div[dir="auto"] p').text().trim();
      steps.push(`${stepNumber}. ${description}`);
    });

    return {
      title,
      mainImage,
      cookingTime,
      serving,
      ingredients: ingredients.join('\n'),
      steps: steps.join('\n')
    };
  }

  async scrapeRecipes() {
    try {
      const $ = await this.fetchSearchResults();
      const links = await this.extractRecipeLinks($);

      if (links.length === 0) {
        throw new Error('Tidak ditemukan resep untuk pencarian ini.');
      }

      const recipePage = await this.fetchRecipePage(links[0]);
      return await this.extractRecipeDetails(recipePage);
    } catch (error) {
      return { error: error.message };
    }
  }
}
  if (!text) return Reply('Masukkan nama resep yang ingin dicari.\nContoh: .resep ayam goreng');

  let scraper = new CookpadScraper(text);
  let recipe = await scraper.scrapeRecipes();

  if (recipe.error) return Reply(recipe.error);

  let caption = `*${recipe.title}*\n\n` +
                `*Waktu Masak :* ${recipe.cookingTime}\n` +
                `*Porsi :* ${recipe.serving}\n\n` +
                `*Bahan-Bahan :*\n${recipe.ingredients}\n\n` +
                `*Langkah-Langkah :*\n${recipe.steps}`;

  if (recipe.mainImage) {
    kenz.sendMessage(m.chat, { image: { url: recipe.mainImage }, caption }, { quoted: m });
  } else {
    Reply(caption);
  }
};
break

case "listdomain": {
    let domains = Object.keys(global.subdomain);
    if (domains.length === 0) return m.reply("⚠️ Tidak ada domain yang tersedia.");

    let buttons = domains.map(domain => ({
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
            display_text: `🌐 ${domain}`,
            url: `https://${domain}`
        })
    }));

    let imgsc = await prepareWAMessageMedia({ image: { url: global.image.reply }}, { upload: kenz.waUploadToServer });

    const msgii = await generateWAMessageFromContent(m.chat, {
        ephemeralMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: "*🌐 List Domain yang Tersedia:*"
                    }), 
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: "🌍 Pilih Domain yang Ingin Dibuka",
                        hasMediaAttachment: true,
                        ...imgsc
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons
                    })
                })
            }
        }
    }, { userJid: m.sender, quoted: m });

    await kenz.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id });
}
break;

case "hidetag": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmins) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await kenz.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

case 'tourl2': {
const axios = require('axios')
const cheerio = require('cheerio')
const FormData = require('form-data')

async function postimg(buffer) {
  try {
    let data = new FormData()
    data.append('optsize', '0')
    data.append('expire', '0')
    data.append('numfiles', '1')
    data.append('upload_session', Math.random())
    data.append('file', buffer, `${Date.now()}.jpg`)

    const res = await axios.post('https://postimages.org/json/rr', data)
    const html = await axios.get(res.data.url)
    const $ = cheerio.load(html.data)

    let link = $('#code_html').attr('value')
    let image = $('#code_direct').attr('value')
    let delimg = $('#code_remove').attr('value')

    return { link, image, delimg }
  } catch (err) {
    throw err
  }
}
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!/image/.test(mime)) return Reply(`Kirim gambar dengan caption *${prefix + command}* atau balas gambar`)

    let media = await q.download()

    Reply('Tunggu Bentar...')

    let result = await postimg(media)

    let caption = `*Successful Image Upload*\n\n` +
                  `*Link HTML :* ${result.link}\n` +
                  `*Direct Link :* ${result.image}\n` +
                  `*Delete Image :* ${result.delimg}`

    await kenz.sendMessage(m.chat, { image: { url: result.image }, caption }, { quoted: m })
  } catch (e) {
    Reply(`*Gagal mengunggah gambar:*\n${e}`)
  }
}
break

case "uninstalltema": case "untema": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses *uninstall* tema pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "uninstallpanel": case "unpanel": {
if (!isCreator) return m.reply(mess.owner);
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return m.reply(example("ipvps|pwvps|domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await m.reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await m.reply("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
m.reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
m.reply('Katasandi atau IP tidak valid')
}).connect(connSettings)
}
break

case "pushkontak": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("pesannya"))
const meta = await kenz.groupFetchAllParticipating()
let dom = await Object.keys(meta)
global.textpushkontak = global.tekspush
let list = []
for (let i of dom) {
await list.push({
title: meta[i].subject, 
id: `.respushkontak ${i}`, 
description: `${meta[i].participants.length} Member`
})
}
return kenz.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup Push Kontak',
          sections: [
            {
              title: 'List Grup Chat',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© WhatsApp Bots - 2025`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Target Grup Pushkontak\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

case "addcase": {
    if (!isCreator) return Reply("Fitur ini hanya bisa digunakan oleh owner!");

    let cap = "*– 乂 Cara Penggunaan Fitur Case*\n";
    cap += "> *➕ `--add`* untuk menambah fitur case baru\n";
    cap += "> *🔄 `--get`* untuk mengambil fitur case yang ada\n";
    cap += "> *❌ `--delete`* untuk menghapus fitur case\n";
    cap += "\n*– 乂 Daftar Case yang Tersedia :*\n";
    cap += Case.list().map((a, i) => `> *${i + 1}.* ${a}`).join("\n");

    if (!q) return Reply(cap);

    if (q.includes("--add")) {
        if (!m.quoted) return Reply("> *⚠️ Balas dengan fitur case yang ingin disimpan!*");
        
        let caseContent = m.quoted.body;
        let caseNameMatch = caseContent.match(/case\s+["'](.+?)["']/);
        if (!caseNameMatch) return Reply("> *❌ Format case tidak valid!*");

        let caseName = caseNameMatch[1];

        if (Case.list().includes(caseName)) return Reply("> *❌ Case sudah ada!*");

        let status = Case.add(caseName, caseContent);
        Reply(status ? "> *✅ Berhasil menambahkan case baru!*" : "> *❌ Gagal menambahkan case baru!*");
    } 
    
    else if (q.includes("--delete")) {
        let input = q.replace("--delete", "").trim();
        if (!input) return Reply("> *⚠️ Masukkan nama case yang ingin dihapus!*");
        let status = Case.delete(input);
        Reply(status ? `> *✅ Berhasil menghapus case: ${input}!*` : `> *❌ Case ${input} tidak ditemukan!*`);
    } 
    
    else if (q.includes("--get")) {
        let input = q.replace("--get", "").trim();
        if (!input) return Reply("> *⚠️ Masukkan nama case yang ingin diambil!*");
        let status = Case.get(input);
        Reply(status ? status : `> *❌ Case ${input} tidak ditemukan!*`);
    }
}
break;

case "tr": case "translate": {
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return m.reply(example("id good night"))
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return m.reply(example("id good night"))
if (args.length < 1) return m.reply(example("id good night"))
if (!m.quoted.text) return m.reply(example("id good night"))
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
m.reply(result[0])
}
} else {
return m.reply(example("id good night"))
}}
break

case "rvo": case "readviewonce": {
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return kenz.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return kenz.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return kenz.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await kenz.downloadAndSaveMediaMessage(qmsg)
await kenz.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

case 'update': {
    if (!isCreator) return Reply(mess.owner);

    const defaultIndexUrl = '';
    const defaultCaseUrl = 'https://raw.githubusercontent.com/kenz-developer/kenz-project/refs/heads/main/case.js';

    if (!args[0]) {
      try {
        const localIndexTimestamp = await getFileTimestamp('./index.js');
        const localCaseTimestamp = await getFileTimestamp('./case.js');

        const remoteIndexResponse = await axios.head(defaultIndexUrl);
        const remoteCaseResponse = await axios.head(defaultCaseUrl);

        const remoteIndexTime = new Date(remoteIndexResponse.headers['last-modified']).getTime();
        const remoteCaseTime = new Date(remoteCaseResponse.headers['last-modified']).getTime();

        if (localIndexTimestamp >= remoteIndexTime && localCaseTimestamp >= remoteCaseTime) {
          return Reply('All files are already up-to-date.');
        }

        await downloadFile(defaultIndexUrl, './index.js');
        await downloadFile(defaultCaseUrl, './case.js');
        Reply('Successfully updated all files! Restarting...');
        await sleep(3000);
        process.exit(0);
      } catch (error) {
        Reply('Failed to update default: ' + error.message);
      }
      break;
    }

    const inputUrl = args[0];
    if (!isValidUrl(inputUrl)) {
      return Reply('Invalid URL format! Example: https://example.com/index.js');
    }

    const targetFile = inputUrl.includes('index.js') ? 'index.js' : 
                       inputUrl.includes('case.js') ? 'case.js' : 
                       null;

    if (!targetFile) {
      return Reply('URL must point to index.js or case.js!');
    }

    try {
      const localTime = await getFileTimestamp(`./${targetFile}`);
      const remoteResponse = await axios.head(inputUrl);
      const remoteTime = new Date(remoteResponse.headers['last-modified']).getTime();

      if (localTime >= remoteTime) {
        return Reply(`File ${targetFile} is already the latest version.`);
      }

      await downloadFile(inputUrl, `./${targetFile}`);
      Reply(`Successfully updated ${targetFile}! Restarting...`);
      await sleep(3000);
      process.exit(0);
    } catch (error) {
      Reply(`Failed to update ${targetFile}: ` + error.message);
    }
}
    break  

case "sendpairing":
case "spam-pairing": {
  const pino = require("pino")
  if (!isCreator) return Reply(mess.owner)
    if (!q) return Reply("Masukkan nomor target dan jumlah OTP yang ingin dikirim!\nContoh: sendpairing 628123456789 5");

    let args = q.split(" ");
    let target = args[0];
    let amount = parseInt(args[1], 10);

    let numberPattern = /^628[0-9]{9,}$/;
    if (!numberPattern.test(target)) return Reply("Format nomor target salah! Harus diawali '62' dan diikuti minimal 8 angka.");

    if (isNaN(amount) || amount <= 0) return Reply("Jumlah OTP harus angka dan lebih dari 0!");

    let maxAmountForFreeUser = 25;
    let maxAmount = isCreator ? Infinity : maxAmountForFreeUser;

    if (amount > maxAmount) return Reply(`Maksimal pengiriman OTP adalah ${maxAmount} kode.`);

    Reply(`Mengirim ${amount} kode OTP ke target ${target}...`);

    let authFilePath = "./src/pairings";
    let authFile = `${authFilePath}/creds.json`;

    if (fs.existsSync(authFile)) fs.unlinkSync(authFile);

    let { state, saveCreds } = await useMultiFileAuthState(authFilePath)    

    let otp = makeWASocket({
        printQRInTerminal: false,
        logger: pino({ level: "silent" }),
        browser: Browsers.windows("Edge"),
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys)
        },
        defaultQueryTimeoutMs: undefined
    });

    await delay(3000);

    for (let i = 0; i < amount; i++) {
        await delay(3000);
        try {
            let PairingCode = await otp.requestPairingCode(target);
            let otpCode = PairingCode?.match(/.{1,4}/g)?.join("-") || PairingCode;

            console.log(`OTP Code #${i + 1}:`, otpCode);
        } catch (error) {
            console.error(`Gagal mengirim OTP #${i + 1}:`, error);
            if (error.output?.statusCode === 428 && error.output?.payload?.message === 'kenzection Closed') break;
        }
    }

    Reply(`Selesai mengirim ${amount} kode OTP.`);
}
break;

case 'kenz': {
  if (!text) return Reply(`_Iya kak.._`)
  let postData = {
    prompt: text,
    sessionId: `${m.sender}`,
    character: `Kamu adalah kenz, kamu bukanlah ai atau chat bot, kamu adalah anak remaja sma, kamu memiliki sifat kasar dan toxic, kadang kamu memakai emoji 🖕 ketika kesal, kamu kalau ngobrol menggunakan bahasa gaul anak Indonesia seperti lu untuk kamu dan gw untuk aku.`
  };
  
  try {
    let response = await axios({
      url: "https://elxyz.me/api/chat",
      method: "POST",
      data: new URLSearchParams(Object.entries(postData)),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    Reply(`${response.data.data.answer}`)
  } catch (error) {
    Reply('yah aku gak bisa jawab pertanyaan mu')
  }
}
break

case 'audiosurah': {
	let wrong = `_*Contoh Penggunaan :*_\naudiosurah 1

*List Surah :*
1 : Al-Fatihah
2 : Al-Baqarah
3 : Ali 'Imran
4 : An-Nisa'
5 : Al-Ma'idah
6 : Al-An'am
7 : Al-A’raf
8 : Al-Anfal
9 : At-Taubah
10 : Yunus
11 : Hud
12 : Yusuf
13 : Ar-Ra’d
14 : Ibrahim
15 : Al-Hijr
16 : An-Nahl
17 : Al-Isra'
18 : Al-Kahf
19 : Maryam
20 : Ta Ha
21 : Al-Anbiya
22 : Al-Hajj
23 : Al-Mu’minun
24 : An-Nur
25 : Al-Furqan
26 : Asy-Syu'ara'
27 : An-Naml
28 : Al-Qasas
29 : Al-'Ankabut
30 : Ar-Rum
31 : Luqman
32 : As-Sajdah
33 : Al-Ahzab
34 : Saba’
35 : Fatir
36 : Ya Sin
37 : As-Saffat
38 : Sad
39 : Az-Zumar
40 : Ghafir
41 : Fussilat
42 : Asy-Syura
43 : Az-Zukhruf
44 : Ad-Dukhan
45 : Al-Jasiyah
46 : Al-Ahqaf
47 : Muhammad
48 : Al-Fath
49 : Al-Hujurat
50 : Qaf
51 : Az-Zariyat
52 : At-Tur
53 : An-Najm
54 : Al-Qamar
55 : Ar-Rahman
56 : Al-Waqi’ah
57 : Al-Hadid
58 : Al-Mujadilah
59 : Al-Hasyr
60 : Al-Mumtahanah
61 : As-Saff
62 : Al-Jumu’ah
63 : Al-Munafiqun
64 : At-Tagabun
65 : At-Talaq
66 : At-Tahrim
67 : Al-Mulk
68 : Al-Qalam
69 : Al-Haqqah
70 : Al-Ma’arij
71 : Nuh
72 : Al-Jinn
73 : Al-Muzzammil
74 : Al-Muddassir
75 : Al-Qiyamah
76 : Al-Insan
77 : Al-Mursalat
78 : An-Naba’
79 : An-Nazi’at
80 : 'Abasa
81 : At-Takwir
82 : Al-Infitar
83 : Al-Tatfif
84 : Al-Insyiqaq
85 : Al-Buruj
86 : At-Tariq
87 : Al-A’la
88 : Al-Gasyiyah
89 : Al-Fajr
90 : Al-Balad
91 : Asy-Syams
92 : Al-Lail
93 : Ad-Duha
94 : Al-Insyirah
95 : At-Tin
96 : Al-'Alaq
97 : Al-Qadr
98 : Al-Bayyinah
99 : Az-Zalzalah
100 : Al-'Adiyat
101 : Al-Qari'ah
102 : At-Takasur
103 : Al-'Asr
104 : Al-Humazah
105 : Al-Fil
106 : Quraisy
107 : Al-Ma’un
108 : Al-Kausar
109 : Al-Kafirun
110 : An-Nasr
111 : Al-Lahab
112 : Al-Ikhlas
113 : Al-Falaq
114 : An-Nas`
   if (!text) return Reply(`${wrong}`)
      Reply(mess.wait)
   kenz.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${text}?apikey=Elaina` }, mimetype: 'audio/mp4' }, { quoted: m });

}
break

case 'ayatkursi': {
  let caption = `
*「 Ayat Kursi 」*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”
Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`.trim()
  Reply(caption)
}
break

case 'quotesislami': {
const islami = [
   {
      "id": "1",
      "arabic": "مَنْ سَارَ عَلىَ الدَّرْبِ وَصَلَ",
      "arti": "Barang siapa berjalan pada jalannya, maka dia akan sampai (pada tujuannya)."
   },
   {
      "id": "2",
      "arabic": "مَنْ صَبَرَ ظَفِرَ",
      "arti": "Barang siapa bersabar, maka dia akan beruntung."
   },
   {
      "id": "3",
      "arabic": "مَنْ جَدَّ وَجَـدَ",
      "arti": "Barang siapa bersungguh-sungguh, maka dia akan meraih (kesuksesan)."
   },
   {
      "id": "4",
      "arabic": "جَالِسْ أَهْلَ الصِّدْقِ وَالوَفَاءِ",
      "arti": "Bergaulah bersama orang-orang yang jujur dan menepati janji."
   },
   {
      "id": "5",
      "arabic": "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ",
      "arti": "Barang siapa sedikit kejujurannya, maka sedikit pulalah temannya."
   },
   {
      "id": 6,
      "arabic": "مَوَدَّةُ الصَّدِيْقِ تَظْهَرُ وَقْتَ الضِّيْقِ",
      "arti": "Kecintaan seorang teman itu akan terlihat pada waktu kesempitan."
   },
   {
      "id": "7",
      "arabic": "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ",
      "arti": "Kesabaran akan menolong segala pekerjaan."
   },
   {
      "id": "8",
      "arabic": "وَمَا اللَّذَّةُ إِلاَّ بَعْدَ التَّعَبِ",
      "arti": "Tidak ada kenikmatan kecuali setelah kepayahan."
   },
   {
      "id": "9",
      "arabic": "جَرِّبْ وَلاَحِظْ تَكُنْ عَارِفًا",
      "arti": "Coba dan perhatikanlah, maka engkau akan menjadi orang yang tahu."
   },
   {
      "id": "10",
      "arabic": "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ",
      "arti": "Telur hari ini lebih baik daripada ayam esok hari."
   },
   {
      "id": "11",
      "arabic": "أُطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى الَّلحْدِ",
      "arti": "Carilah ilmu sejak dari buaian hingga liang lahat."
   },
   {
      "id": "12",
      "arabic": "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ",
      "arti": "Waktu itu lebih berharga daripada emas."
   },
   {
      "id": "13",
      "arabic": "لاَ خَيْرَ فيِ لَذَّةٍ تَعْقِبُ نَدَماً",
      "arti": "Tak ada kebaikan bagi kenikmatan yang diiringi dengan penyesalan."
   },
   {
      "id": "14",
      "arabic": "أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ سَأُنْبِيْكَ عَنْ تَفْصِيْلِهَا بِبَيَانٍ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ وَصُحْبَةُ أُسْتَاذٍ وَطُوْلُ زَمَانٍ",
      "arti": "Wahai saudaraku, Kamu tidak akan memperoleh ilmu kecuali dengan enam perkara, akan aku sampaikan rinciannya dengan jelas; 1) Kecerdasan, 2) Ketamaan (terhadap ilmu), 3) Kesungguhan, 4) Harta benda (sebagai bekal), 5) Bergaul dengan guru, 6) Waktu yang lama."
   },
   {
      "id": "15",
      "arabic": "لاَ تَكُنْ رَطْباً فَتُعْصَرَ وَلاَ يَابِسًا فَتُكَسَّرَ",
      "arti": "Janganlah kamu bersikap lemah, sehingga kamu mudah diperas. Dan janganlah kamu bersikap keras, sehingga kamu mudah dipatahkan."
   },
   {
      "id": "16",
      "arabic": "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ",
      "arti": "Setiap tempat memiliki perkataannya masing-masing, dan setiap perkataan memiliki tempatnya masing-masing."
   },{
      "id": "17",
      "arabic": "خَيْرُ النَّاسِ أَحْسَنُهُمْ خُلُقاً وَأَنْفَعُهُمْ لِلنَّاسِ",
      "arti": "Sebaik-baik manusia adalah yang paling baik budi pekertinya dan yang paling bermanfaat bagi manusia lainnya."
   },
   {
      "id": "18",
      "arabic": "خَيْرُ جَلِيْسٍ في الزّمانِ كِتابُ",
      "arti": "Sebaik-baik teman duduk di setiap waktu adalah buku."
   },
   {
      "id": "19",
      "arabic": "مَنْ يَزْرَعْ يَحْصُدْ",
      "arti": "Barang siapa menanam, pasti ia akan memetik (mengetam)."
   },
   {
      "id": "20",
      "arabic": "لَوْلاَ العِلْمُ لَكَانَ النَّاسُ كَالبَهَائِمِ",
      "arti": "Kalaulah tidak karena ilmu, niscaya manusia itu seperti binatang."
   },
   {
      "id": "21",
      "arabic": "سَلاَمَةُ الإِنْسَانِ فيِ حِفْظِ اللِّسَانِ",
      "arti": "Keselamatan manusia itu terletak pada penjagaan lidahnya (perkataannya)."
   },
   {
      "id": "22",
      "arabic": "الرِّفْقُ بِالضَّعِيْفِ مِنْ خُلُقِ الشَّرِيْفِ",
      "arti": "Berlaku lemah lembut kepada orang yang lemah itu termasuk akhlak orang yang mulia (terhormat)."
   },
   {
      "id": "23",
      "arabic": "وَعَامِلِ النَّاسَ بِمَا تُحِبُّ مِنْهُ دَائِماً",
      "arti": "Dan bergaullah dengan manusia dengan sikap yang kamu juga suka diperlakukan seperti itu."
   },
   {
      "id": "24",
      "arabic": "لَيْسَ الجَمَالُ بِأَثْوَابٍ تُزَيِّنُنُا إِنَّ الجَمَالَ جمَاَلُ العِلْمِ وَالأَدَبِ",
      "arti": "Kecantikan bukanlah dengan pakaian yang melekat menghiasi diri kita, sesungguhnya kecantikan ialah kecantikan dengan ilmu dan budi pekerti."
   },
   {
      "id": "25",
      "arabic": "مَنْ أَعاَنَكَ عَلىَ الشَّرِّ ظَلَمَكَ",
      "arti": "Barang siapa membantumu dalam kejahatan, maka sesungguhnya ia telah berbuat aniaya terhadapmu."
   }
]
    const randomIndex = Math.floor(Math.random() * islami.length);
const randomQuote = islami[randomIndex];
const { arabic, arti } = randomQuote;
    Reply(`${arabic}\n${arti}`)
}
break

case 'niatsholat': {
    if (!q) return Reply(`Contoh Penggunaan :\nniatsholat Subuh`)
const niatsholat = [
    {
        index: 1,
        solat: "subuh",
        latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 2,
        solat: "maghrib",
        latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 3,
        solat: "dzuhur",
        latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 4,
        solat: "isha",
        latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 5,
        solat: "ashar",
        latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
    }
]
    let text = q.toLowerCase() || ''
    let data = Object.values(niatsholat).find(v => v.solat == text)
    if (!data) return Reply(`${txt} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
    Reply(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}

break

case 'ffstalk':{
Reply(mess.wait)
if (!q) return Reply(`Example ${prefix+command} 946716486`)
Reply(mess.wait)
const data = await fetchJson(`https://skizo.tech/api/stalk/game/FREEFIRE?apikey=nanogembul&id=${encodeURIComponent(text)}&zone=false`)
const data1 = data.data.roles
Reply(`*/ Free Fire Stalker \\*

Id : ${data1.player_id}
Nickname : ${data1.role}`)
}
break

case "slink": {
    if (!q) return Reply("Masukin link yang mau disingkat!");

    let apiToken = "9605d119a004808c7fd80376d3ff3a32f3a16c04"; // Ganti dengan API token SafeLinkU
    let apiUrl = `https://safelinku.com/api/v1/links`;

    try {
        let res = await axios.post(apiUrl, {
            url: q
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiToken}`
            }
        });

        console.log(res.data); // Cek response dari API

        if (res.data && res.data.shortenedUrl) {
            let shortLink = res.data.shortenedUrl;
            Reply(`🔗 Link berhasil disingkat:\n${shortLink}`);
        } else {
            Reply(`❌ Gagal memperpendek link, respon API: ${JSON.stringify(res.data)}`);
        }
    } catch (err) {
        console.error(err);
        Reply(`⚠️ Terjadi kesalahan:\n${err.response ? JSON.stringify(err.response.data) : err.message}`);
    }
}
break;

case "cekidch": case "idch": {
if (!text) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await kenz.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break

case "listgc": case "listgrup": {
if (!isCreator) return
let teks = ` *── List all group chat*\n`
let a = await kenz.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break

case "tiktokmp3": case "ttmp3": case "ttaudio": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await kenz.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break

case "installtemabilling": case "instaltemabiling": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const kenzSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema billing* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('kenzection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).kenzect(kenzSettings);
}
break

case "startwings": case "configurewings": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 3) return m.reply(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const kenzSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('kenzection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).kenzect(kenzSettings);
}
break

case "installpanel": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let vii = text.split("|")
if (vii.length < 5) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let sukses = false

const ress = new Client();
const kenzSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/Kenz CreatorOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*📦 Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings

> INSTALL BY KENZ
`
await kenz.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By Kenz Creator\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By Kenz Creator\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).kenzect(kenzSettings);
}
break

case "dana": {
if (!isCreator) return
let teks = `
*PAYMENT DANA ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.dana}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await kenz.sendMessage(m.chat, {text: teks}, {quoted: qtoko})
}
break

case "gopay": {
if (!isCreator) return
let teks = `
*PAYMENT GOPAY ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.gopay}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await kenz.sendMessage(m.chat, {text: teks}, {quoted: qtoko})
}
break

case "pay": case "payment": case "qris": {
await kenz.sendMessage(m.chat, {
  footer: `© WhatsApp Bots - 2025`,
  buttons: [
  {
 buttonId: '.dana',
 buttonText: {
 displayText: 'PAYMENT DANA'
 },
 type: 2,
  },
  {
 buttonId: '.gopay',
 buttonText: {
 displayText: 'PAYMENT GOPAY'
 },
 type: 2,
  },
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: global.image.qris}, 
  caption: "\n```Scan qris diatas dan jika sudah transfer mohon sertakan bukti```\n"
}, {quoted: qtoko})
}
break

case "tagall": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmins) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await kenz.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

case "tiktok": {
if (!text) return m.reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("url"))
await tiktokDl(q).then(async (result) => {
if (!result.status) return m.reply("Error")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: kenz.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await kenz.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await kenz.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*\n\n> Kenz Creator`}, {quoted: m})
}
}).catch(e => console.log(e))
}
break

case "tourl": {
    const axios = require("axios");
    const FormData = require("form-data");

    var q = m.quoted ? m.quoted : m;
    let mime = q.mimetype || "";

    if (/image/g.test(mime) && !/webp/g.test(mime)) {
        kenz.sendMessage(m.chat, {
            react: { text: "🕒", key: m.key }
        });

        try {
            const img = await q.download?.();
            const fileSizeInBytes = img.length;
            const fileSizeInKB = (fileSizeInBytes / 1024).toFixed(2);
            const fileSizeInMB = (fileSizeInBytes / (1024 * 1024)).toFixed(2);
            const fileSize = fileSizeInMB >= 1 ? `${fileSizeInMB} MB` : `${fileSizeInKB} KB`;

            const form = new FormData();
            form.append("reqtype", "fileupload");
            form.append("fileToUpload", img, "image.jpg");

            let resImg = await axios.post("https://catbox.moe/user/api.php", form, {
                headers: form.getHeaders()
            });

            let imageUrl = resImg.data.trim();
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "messageContextInfo": {
                            "deviceListMetadata": {},
                            "deviceListMetadataVersion": 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: `Size : ${fileSize}\nDi Upload Pada : `
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: time,
                                text: `Upload By Kenz`
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: "*Berhasil Upload*",
                                subtitle: "test",
                                hasMediaAttachment: true,
                                ...(await prepareWAMessageMedia({ image: { url: imageUrl } }, { upload: kenz.waUploadToServer }))
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "cta_copy",
                                        "buttonParamsJson": `{\"display_text\":\"COPY URL\",\"id\":\"123456789\",\"copy_code\":\"${imageUrl}\"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, {});

            return kenz.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
            kenz.sendMessage(m.chat, {
              react: { text: "✅", key: m.key }
            })

        } catch (e) {
            console.error(e);
            Reply(`[ ! ] Gagal mengubah gambar menjadi URL. Error: ${e.message}`);
        }
    } else {
        Reply(`Kirim gambar dengan caption *${prefix + command}* atau reply gambar yang sudah dikirim`);
    }
}
break;

case "shortlink": case "shorturl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`
return m.reply(link)
}
break

case "proses": {
    if (!isCreator) return Reply(mess.owner);
    if (!q) return m.reply(example("jasa install panel"));

    let now = new Date();
    let tanggal = now.toLocaleString("id-ID", { 
        weekday: "long", 
        year: "numeric", 
        month: "long", 
        day: "numeric"
    });

    let teks = `⏳ ${text}
⏰ ${tanggal}

📌 *Pesanan Sedang Diproses!*
Harap bersabar, transaksi kamu sedang dalam antrian.

*Channel WA :*
${linkSaluran}

*Rest API :*
${linkapi}`;

    await kenz.sendMessage(m.chat, {
        text: teks,
        mentions: [m.sender],
        contextInfo: {
            externalAdReply: {
                title: `Dana Masuk ✅`,
                body: `© Powered By ${namaOwner}`,
                thumbnailUrl: global.image.reply,
                sourceUrl: linkSaluran,
            }
        }
    }, { quoted: null });
}
break;

case "done": {
    if (!isCreator) return Reply(mess.owner);
    if (!q) return m.reply(example("jasa install panel"));
    let now = new Date();
    let tanggal = now.toLocaleString("id-ID", {
        weekday: "long", 
        year: "numeric", 
        month: "long", 
        day: "numeric"
    });

    let teks = `📦 ${text}
⏰ ${tanggal}

*Channel WA :*
${linkSaluran}

*Rest API :*
${linkapi}`;
    await kenz.sendMessage(m.chat, {
        text: teks,
        mentions: [m.sender],
        contextInfo: {
            externalAdReply: {
                title: `Transaksi Done ✅`,
                body: `© Powered By ${namaOwner}`,
                thumbnailUrl: global.image.reply,
                sourceUrl: linkSaluran,
                mediaType: 1,
                renderLargerThumbnail: false,
            }
        }
    }, { quoted: null });
}
break;

case "ssweb": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var data = await fetchJson(`https://restapi-v2.simplebot.my.id/tools/ssweb?url=${text}`)
await kenz.sendMessage(m.chat, { image: { url: data.result.iurl}, mimetype: "image/png"}, {quoted: m})
}
break

case "addidch": case "addch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("idchnya"))
if (!text.endsWith("@newsletter")) return m.reply("Id channel tidak valid")
let input = text
if (listidch.includes(input)) return m.reply(`Id ${input2} sudah terdaftar!`)
listidch.push(input)
await fs.writeFileSync("./data/listidch.json", JSON.stringify(listidch, null, 2))
m.reply(`Berhasil menambah id channel kedalam database ✅`)
}
break

case "listidch": case "listch": {
if (listidch.length < 1) return m.reply("Tidak ada id channel di database")
let teks = ` *── List all id channel*\n`
for (let i of listidch) {
teks += `\n* ${i}\n`
}
kenz.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: qtext2})
}
break

case "sfile": {
if (!text) return m.reply(example('script bot whatsapp'))
await kenz.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await fetchJson(`https://restapi-v2.simplebot.my.id/search/sfile?q=${text}`)
const anuan = ytsSearch.result
let teks = "\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Link :* ${res.link}\n\n`
}
await m.reply(teks)
}
break

case "gitclone": {
if (!text) return m.reply(example("https://github.com/Kenz Creatordev/Simplebot"))
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return m.reply("Link tautan tidak valid")
try {
    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await axios.get(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    kenz.sendMessage(m.chat, { caption: "*Nih Clone nya*",
      document: { 
      url: url }, 
      mimetype: 'application/zip', fileName: `${filename}`}, { quoted : qlocPush })
} catch (e) {
await m.reply(`Error! repositori tidak ditemukan`)
}}
break

case 'tagsw': {
    if (!isCreator) return Reply('Khusus Creator');
    
    let [id, ...teksArray] = text.split(' ');
    let teks = teksArray.join(' ');

    if (!id || !teks) {
        return Reply(`Example: ${prefix + command} <group_id> Hello`);
    }

    let mediaContent = null;
    let msgOptions = {};
    const BackgroundColor = ['#f68ac9', '#6cace4', '#f44336', '#4caf50', '#ffeb3b', '#9c27b0', '#0d47a1', '#03a9f4', '#9e9e9e', '#ff9800', '#000000', '#ffffff', '#008080', '#FFC0CB', '#A52A2A', '#FFA07A', '#FF00FF', '#D2B48C', '#F5DEB3', '#FF1493', '#B22222', '#00BFFF', '#1E90FF', '#FF69B4', '#87CEEB', '#20B2AA', '#8B0000', '#FF4500', '#48D1CC', '#BA55D3', '#00FF7F', '#008000', '#191970', '#FF8C00', '#9400D3', '#FF00FF', '#8B008B', '#2F4F4F', '#FFDAB9', '#BDB76B', '#DC143C', '#DAA520', '#696969', '#483D8B', '#FFD700', '#C0C0C0'];
    const pickedColor = BackgroundColor[Math.floor(Math.random() * BackgroundColor.length)];
    const jids = [m.sender, id];

    if (quoted) {
        const mime = quoted.mtype || quoted.mediaType;
        if (mime?.includes('image')) {
            mediaContent = await m.quoted.download();
            msgOptions = {
                image: mediaContent,
                caption: teks || m.quoted.text || '',
            };
        } else if (mime?.includes('video')) {
            mediaContent = await m.quoted.download();
            msgOptions = {
                video: mediaContent,
                caption: teks || m.quoted.text || '',
            };
        } else {
            msgOptions = {
                text: teks || m.quoted.text || '',
            };
        }
    } else {
        msgOptions = {
            text: teks,
        };
    }

    await kenz.sendMessage("status@broadcast", msgOptions, {
        backgroundColor: pickedColor,
        textArgb: 0xffffffff,
        font: 0,
        statusJidList: await (await kenz.groupMetadata(id)).participants.map((a) => a.id),
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: jids.map((jid) => ({
                            tag: "to",
                            attrs: { jid: id },
                            content: undefined,
                        })),
                    },
                ],
            },
        ],
    });
    m.reply("done");
}
break;

case "ytmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
var anu = await ytmp3(text)
if (anu.audio) {
let urlMp3 = anu.audio
await kenz.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
}
break

case "playspotify": case "plays": case "playsp": {
if (!text) return m.reply(example("intro ariana"))
await kenz.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})

var anu = await fetchJson("https://restapi.simplebot.my.id/api/download/playspotify?q="+text)

if (anu.result.download.link) {
let urlMp3 = anu.result.download.link
await kenz.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: anu.result.metadata.cover_url, title: anu.result.metadata.title, body: `Author ${anu.result.metadata.artists} || Duration ${anu.result.metadata.duration}`, sourceUrl: anu.result.metadata.link, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
}
break

case "play3": {
if (!text) return m.reply(example("dj tiktok"))
await kenz.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytmp3(res.url)
if (anu.audio) {
let urlMp3 = anu.audio
await kenz.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: res.thumbnail, title: res.title, body: `Author ${res.author.name} || Duration ${res.timestamp}`, sourceUrl: res.url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
}
break

case 'remini':
case 'hd':
case 'hdr': {
if (!quoted || !/image/.test(mime)) return Reply(`Balas Gambar Dengan Caption *${prefix + command}*`)
reaction("⏳")
let media = await quoted.download()
let proses = await remini(media, "enhance")
reaction("✅")
kenz.sendMessage(m.chat, { 
image: proses
}, {
quoted: m
})
}
break

case 'upch': {
if (!isCreator) return
try {
if (!mime && !text) {
return Reply(`Balas Pessn Dengan Perintah *${prefix + command}*`)
}
media = mime ? await quoted.download() : null
let defaultCaption = "Sukses"
if (/image/.test(mime)) {
kenz.sendMessage(idsaluran, {
image: media,
caption: text ? text : defaultCaption
})
Reply(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
} else if (/video/.test(mime)) {
kenz.sendMessage(idsaluran, {
video: media,
caption: text ? text : defaultCaption
})
Reply(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
} else if (/audio/.test(mime)) {
kenz.sendMessage(idsaluran, {
audio: media,
mimetype: mime,
ptt: true
})
Reply(`🎵 Audio berhasil diunggah ke saluran`)
} else if (/text/.test(mime) || text) {
kenz.sendMessage(idsaluran, {
text: text ? text : defaultCaption
})
Reply(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
} else {
Reply(`Error`)
}
} catch (error) {
console.error(error)
Reply(`Error`)
}
}
break

case 'luminai': {
	if (!text) return m.reply("Mau nanya apa sama ai")
let {data} = await axios.get("https://kenz-api.cloudx.biz.id/ai/luminai?text=" + text);
m.reply(data.result);
}
break

case "ai":{
if (!text) return m.reply("Mau nanya apa sama ai")
let {data} = await axios.get("https://kenz-api.cloudx.biz.id/ai/gpt-kenz?text=" + text);
m.reply(data.result);
}
break

case "deepseek":{
if (!text) return m.reply("Mau nanya apa sama deepseek")
let {data} = await axios.get(`https://kenz-api.cloudx.biz.id/ai/deepseekr1?text=${encodeURIComponent(text)}&model=@groq/deepseek-r1-distill-llama-70b`);
m.reply(data.result);
}
break

case "llama":{
if (!text) return m.reply("Mau nanya apa sama llama")
let {data} = await axios.get(`https://kenz-api.cloudx.biz.id/ai/llama?text=${encodeURIComponent(text)}&model=@groq/llama-3.1-8b-instant`);
m.reply(data.result);
}
break

case "gpt":{
if (!text) return m.reply("Mau nanya apa sama ai")
let {data} = await axios.get("https://kenz-api.cloudx.biz.id/ai/luminai?text=" + text);
m.reply(data.result);
}
break

case "yts": {
    if (!text) return m.reply('Masukkan kata kunci pencarian!')
    
    await kenz.sendMessage(m.chat, { react: { text: '🔎', key: m.key } })
    
    let ytsSearch = await yts(text)
    if (!ytsSearch || !ytsSearch.all || ytsSearch.all.length === 0) return m.reply("Video tidak ditemukan!")

    let results = ytsSearch.all.slice(0, 10)
    let teks = `🔎 *Hasil Pencarian YouTube untuk:* _${text}_\n\n`
    let cards = []

    for (let vid of results) {
        teks += `*🎬 ${vid.title}*\n📅 ${vid.ago} | ⏳ ${vid.timestamp} | 👁 ${vid.views}\n🔗 ${vid.url}\n\n`

        let imgsc = await prepareWAMessageMedia({ image: { url: vid.thumbnail } }, { upload: kenz.waUploadToServer })
        cards.push({
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: vid.title,
                hasMediaAttachment: true,
                ...imgsc
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                    {
                        name: "cta_copy",
                        buttonParamsJson: `{
                            "display_text": "Salin Link",
                            "copy_text": "${vid.url}"
                        }`
                    }
                ]
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
                text: `👤 ${vid.author.name || "Unknown"} | 👁 ${vid.views} | ⏳ ${vid.timestamp}`
            })
        })
    }

    await m.reply(teks)

    const msg = await generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `🔎 Berikut adalah hasil pencarian untuk *${text}*`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: cards
                    })
                })
            }
        }
    }, { userJid: sender, quoted: m })

    kenz.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
    
    await kenz.sendMessage(m.chat, { react: { text: '', key: m.key } })
}
break

case 'text2img' : {
const axios = require('axios')
const { translate } = require('bing-translate-api')

let size = [512, 768, 1024, 1200]

async function text2img(prompt, size = 512) {
    let { data } = await axios.post('https://ftvwohriusaknrzfogjh.supabase.co/functions/v1/generate-image', {
        "prompt": prompt + ", professional photograph, raw photo, unedited photography, photorealistic, 8k uhd, high quality dslr photo, sharp focus, detailed, crystal clear, natural lighting",
        "width": size,
        "height": size
    }, {
        headers: {
            "authority": "ftvwohriusaknrzfogjh.supabase.co",
            "Content-Type": "application/json",
            "Origin": "https://aiimagegenerator.site",
            "Referer": "https://aiimagegenerator.site/",
            "priority": "u=0, i",
            "sec-ch-ua": '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"',
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
            "Apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0dndvaHJpdXNha25yemZvZ2poIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzNDc1NDMsImV4cCI6MjA0OTkyMzU0M30.JXPW9daK9AEov4sOt83qOgvx43-hE6QYfdO0h-nUHSs",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0dndvaHJpdXNha25yemZvZ2poIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzNDc1NDMsImV4cCI6MjA0OTkyMzU0M30.JXPW9daK9AEov4sOt83qOgvx43-hE6QYfdO0h-nUHSs"
        }
    })

    let base64 = data.image.replace(/^data:image\/[a-zA-Z]+;base64,/, '')
        .replace(/-/g, '+')
        .replace(/_/g, '/')
    if (data.status == 500) return { success: false }
    return { success: true, image: base64 }
}

    if (!text) return m.reply('Contoh Penggunaan .text2img Anak Perempuan Jepang Sedang Berlari Ke Kuil')

    let selectedSize = 512
    if (args.length > 1) {
        const lastArg = parseInt(args[args.length - 1])
        if (size.includes(lastArg)) {
            selectedSize = lastArg
            text = args.slice(0, -1).join(' ')
        }
    }

    try {
        let translated = await translate(text, null, 'en')
        let result = await text2img(translated.translation, selectedSize)
        
        if (!result.success) return m.reply('Gagal membuat gambar, coba lagi!')
        
        let buffer = Buffer.from(result.image, 'base64')
        await kenz.sendMessage(m.chat, { image: buffer }, { quoted: m })

    } catch (error) {
        m.reply('Terjadi kesalahan, coba lagi nanti!')
    }
}
break

case 'play' : {
const yts = require('yt-search')
const axios = require('axios')
    if (!text) return m.reply(`Mana query nya?\n\nContoh: ${prefix + command} blue yung kau`);
    
    m.reply('Tunggu bentar ya, lagi nyari...');
    
    try {
        const searchResults = await yts(text);
        if (!searchResults.videos.length) {
            return m.reply('Hmm, gak ketemu video nya nih. Coba kata kunci lain deh!');
        }

        const video = searchResults.videos[0]; 
        const videoUrl = `https://www.youtube.com/watch?v=${video.videoId}`;
        const apiUrl = `https://ytdl-api.caliphdev.com/download/audio?url=${videoUrl}`;
        
        const { data } = await axios.get(apiUrl);
        if (!data.status) {
            return m.reply('Waduh, gagal download audio nya. Coba lagi nanti ya!');
        }

        const title = data.videoDetails.title;
        const duration = data.videoDetails.lengthSeconds;
        const downloadUrl = data.downloadUrl;
        const thumbnail = video.thumbnail;
        
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        const formattedDuration = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        
        await kenz.sendMessage(
            m.chat, 
            { 
                image: {
                    url: thumbnail
                },
                caption: `*°${title}*\n\n⏱️ Durasi: ${formattedDuration}\n🔗 Link: ${videoUrl}\n\n_Audio lagi dikirim, tunggu bentar..._`
            }
        );
        
        await kenz.sendMessage(
            m.chat, 
            {
                audio: {
                    url: downloadUrl
                },
                mimetype: 'audio/mp4',
                fileName: `${title}.mp3`
            }
        );
        
    } catch (error) {
        console.error('Error:', error);
        m.reply('Audio Berhasil Di Download!');
    }
};
break

case 'bb' :
case 'bbai' :
case 'blackbox' : {
const axios = require('axios');

async function fetchBlackboxAI(prompt, callback) {
    const url = 'https://www.blackbox.ai/api/chat';
    const headers = {
        'authority': 'www.blackbox.ai',
        'accept': '*/*',
        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
        'content-type': 'application/json',
        'origin': 'https://www.blackbox.ai',
        'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36'
    };

    const data = {
        "messages": [{ "role": "user", "content": prompt, "id": "54lcaEJ" }],
        "agentMode": {},
        "id": "RDyqb0u",
        "previewToken": null,
        "userId": null,
        "codeModelMode": true,
        "trendingAgentMode": {},
        "isMicMode": false,
        "userSystemPrompt": null,
        "maxTokens": 1024,
        "playgroundTopP": null,
        "playgroundTemperature": null,
        "isChromeExt": false,
        "githubToken": "",
        "clickedAnswer2": false,
        "clickedAnswer3": false,
        "clickedForceWebSearch": false,
        "visitFromDelta": false,
        "isMemoryEnabled": false,
        "mobileClient": false,
        "userSelectedModel": null,
        "validated": "00f37b34-a166-4efb-bce5-1312d87f2f94",
        "imageGenerationMode": false,
        "webSearchModePrompt": true,
        "deepSearchMode": false,
        "domains": null,
        "vscodeClient": false,
        "codeInterpreterMode": false,
        "customProfile": {
            "name": "",
            "occupation": "",
            "traits": [],
            "additionalInfo": "",
            "enableNewChats": false
        },
        "session": null,
        "isPremium": false,
        "subscriptionCache": null,
        "beastMode": false
    };

    try {
        const response = await axios({
            method: 'post',
            url: url,
            headers: headers,
            data: data,
            responseType: 'stream'
        });

        let output = '';
        let search = [];
        
        response.data.on('data', chunk => {
            const chunkStr = chunk.toString();
            output += chunkStr;
            
            const match = output.match(/\$~~~\$(.*?)\$~~~\$/);
            if (match) {
                search = JSON.parse(match[1]);
                const text = output.replace(match[0], '');
                output = '';
                callback({ search });
            } else {
                if (search.length) callback({ text: chunkStr });
            }
        });
        
        return new Promise((resolve) => {
            response.data.on('end', () => {
                resolve({ search, text: output.trim() });
            });
        });
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
    if (!text) return Reply('Masukkan prompt untuk BlackboxAI!');
    
    const isSearchMode = args[0]?.toLowerCase() === 'search';
    const prompt = isSearchMode ? args.slice(1).join(' ') : text;
    
    if (isSearchMode && !args[1]) return Reply('Masukkan kata kunci pencarian!');
    
    try {
        const mess = await kenz.sendMessage(m.chat, { 
            text: isSearchMode ? 'Mencari...' : '*Thinking*"...' 
        }, { quoted: m });
        
        let fullText = '';
        let searchResults = [];
        
        const result = await fetchBlackboxAI(prompt, (response) => {
            if (!isSearchMode && response.text) {
                fullText += response.text;
                kenz.sendMessage(m.chat, { 
                    text: fullText, 
                    edit: mess.key 
                });
            }
            
            if (response.search) {
                searchResults = response.search;
                if (isSearchMode) {
                    const searchText = searchResults.map((item, index) => {
                        const title = item.title || item.text || 'No title';
                        const url = item.url || item.link || '';
                        return `${index + 1}. ${title}\n${url ? `${url}\n` : ''}`;
                    }).join('\n');
                    
                    kenz.sendMessage(m.chat, { 
                        text: searchText || 'Tidak ada hasil pencarian.', 
                        edit: mess.key 
                    });
                }
            }
        });

        if (!isSearchMode && result.text) {
            await kenz.sendMessage(m.chat, {
                text: result.text,
                edit: mess.key
            });
            
            if (result.search && result.search.length > 0) {
                const searchText = result.search.map((item, index) => {
                    const title = item.title || item.text || 'No title';
                    const url = item.url || item.link || '';
                    return `${index + 1}. ${title}\n${url ? `${url}\n` : ''}`;
                }).join('\n');
                
                await kenz.sendMessage(m.chat, {
                    text: searchText,
                    quoted: m
                });
            }
        }
        
    } catch (error) {
        console.error('Error in BlackboxAI:', error);
        Reply('Terjadi kesalahan saat memproses permintaan.');
    }
}
break

case "getcase": {
if (!isKenz) return Reply(mess.owner);
if (!text) return m.reply("menu");
const getcase = (cases) => {
const fileContent = fs.readFileSync('./case.js').toString();
const caseRegex = new RegExp(`case ['"]${cases}['"]`, 'i'); // Pencarian case dengan tanda ' atau "
const match = fileContent.split(caseRegex);
if (match.length < 2) throw new Error("Case not found");
return "case " + `'${cases}'` + match[1].split("break")[0] + "break";
};
try {
Reply(`${getcase(q)}`);
} catch (e) {
return m.reply(`Case *${text}* Tidak Ditemukan`);
}
}
break;

case 'play2' : {
const axios = require('axios')
const yts = require('yt-search')

/* ndbotz */
function tokenizer(nyxz, ndbz) {
    if (eval(atob(nyxz.t[0])) == nyxz.t[1]) {
        for (var c = 0; c < atob(nyxz[0]).split(nyxz.f[5]).length; c++) ndbz += (0 < nyxz.f[4] ? nyxz[1].split("").reverse().join("") : nyxz[1])[atob(nyxz[0]).split(nyxz.f[5])[c] - nyxz.f[3]];
        return 1 == nyxz.f[1] ? ndbz = ndbz.toLowerCase() : 2 == nyxz.f[1] && (ndbz = ndbz.toUpperCase()), 0 < nyxz.f[0].length ? nyxz.f[0] : 0 < nyxz.f[2] ? ndbz.substring(0, nyxz.f[2] + 1) : ndbz
    }
}
/* ndbotz */

const yt = /^((?:https?:)?\/\/)?((?:www|m|music)\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(?:embed\/)?(?:v\/)?(?:shorts\/)?([a-zA-Z0-9_-]{11})/;

const headers = {
    'Accept': '*/*',
    'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
    'Cache-Control': 'no-cache',
    'kenzection': 'keep-alive',
    'Origin': 'https://ytmp3.cc',
    'Pragma': 'no-cache',
    'Referer': 'https://ytmp3.cc/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.3',
    'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Windows"'
};

async function ytdl(url) {
    if (!yt.test(url)) {
        throw new Error('Link ga valid, input yang bener dong 😡');
    }

    try {
        const vidId = url.match(yt)[3];
        const webb = await axios.get('https://ytmp3.cc/Vluk/', { headers });

        const tokenJson = JSON.parse(atob(webb.data?.match(/atob\('(.*?)'\)/)?.[1]).match(/var gC = ({[\s\S]*?});/)?.[1]);
        const token = btoa(tokenJson[2] + "-" + tokenizer(tokenJson, tokenJson.f[6]));

        const init = await axios.get(`https://d.ecoe.cc/api/v1/init?k=${token}&_=${Math.random()}`, { headers }).then(x => x.data);
        const convert = await axios.get(`${init.convertURL}&v=https://www.youtube.com/watch?v=${vidId}&f=mp3&_=${Math.random()}`, { headers }).then(x => x.data);

        if (convert.redirectURL) {
            const res = await axios.get(convert.redirectURL, { headers }).then(x => x.data);

            return {
                title: res.title,
                link: res.downloadURL
            };
        } else {
            let res, retry = 0;
            do {
                if (retry > 50) throw 'Timeout';
                res = await axios.get(convert.progressURL, { headers }).then(x => x.data);
                await new Promise(rv => setTimeout(rv, 1000));
                retry++;
            } while (res.progress < 3);
            return {
                title: res.title,
                link: convert.downloadURL
            };
        }
    } catch (e) {
        let err = new Error(`Eror bang, nanti aja download nya, nih log eror nya: ${e.message}`);
        err.error = e;
        throw err;
    }
}
    try {
        if (!text) return m.reply('Mau Cari Lagu Afa');

        let videoUrl = text;

        if (!yt.test(text)) {
            const { videos } = await yts(text);
            if (videos.length === 0) return m.reply('Tidak ada video yang ditemukan.');

            const selectedVideo = videos[0];
            videoUrl = selectedVideo.url;

            const videoDetails = `
*°${selectedVideo.title}*
*Durasi:* ${selectedVideo.timestamp}
*Channel:* ${selectedVideo.author.name}
*Link:* ${selectedVideo.url}
            `;

            await kenz.sendMessage(m.chat, {
                image: { url: selectedVideo.thumbnail },
                caption: videoDetails,
            }, { quoted: m });           
        }

        const { title, link } = await ytdl(videoUrl);

        await kenz.sendMessage(m.chat, {
            audio: { url: link },
            mimetype: 'audio/mp4',
            contextInfo: { mentionedJid: [m.sender] }
        }, { quoted: m });

    } catch (e) {
        m.reply(`Yah error :(\n${e.message}`);
    }
}
break

case "developerbot": case "owner": {
await kenz.sendContact(m.chat, [global.owner], m)
}
break

//==============< DEFAUTL >=================\\
default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if(budy.startsWith('assalamualaikum','Assalamualaikum')) {
  return Reply(`*Walaikumsalam kak ${pushname} Ada apa ya? Cari Aldi? Sekarang aldi nya baru tidur kalo sudah bangun nanti akan dibalas🙏*`)
}

if(budy.startsWith('Assalamualaikum')) {
  return Reply(`*Walaikumsalam kak ${pushname} Ada apa ya? Cari Aldi? Sekarang aldi nya baru tidur kalo sudah bangun nanti akan dibalas🙏*`)
}

if(budy.startsWith('P')) {
  return Reply(`*Hai kak ${pushname} Tidak baik berucap seperti itu gunakan bahasa yang sopan, misalnya, Assalamualaikum seperti itu jangan P kaya ga punya agama aja 😒*`)
}

if(budy.startsWith('p')) {
  return Reply(`*Hai kak ${pushname} Tidak baik berucap seperti itu gunakan bahasa yang sopan, misalnya, Assalamualaikum seperti itu jangan P kaya ga punya agama aja 😒*`)
}

if(budy.startsWith(["Asu","asu"])) {
  return Reply(`*Hai kak ${pushname} Tidak baik berucap kasar itu dosa tau ngga? udah gede bukanya tobat malah makin aneh 😒*`)
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


//~~~~~~~< BATAS AKHIR >~~~~~~~//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green.bold(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
