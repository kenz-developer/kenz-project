/*
   * Base Simpel
   * Created By Kenz Creator
*/
const chalk = require("chalk").default
const version = require("./package.json")

//================= SETTING DULU ==============//
global.idsaluran = "120363376589165265@newsletter"
global.namasaluran = "Kenz Creator"
global.namasc = "Ramadhan 2025"
global.linkSaluran = "https://whatsapp.com/channel/0029VazCs3v2Jl8Eyr1rSi0X"
global.namaOwner = "Kenz Creator✨"
global.botname2 = "Bot Simple Kenz"
global.botname = "Bot Simple Kenz✨"
global.linkapi = "https://kenz-api.cloudx.biz.id"
global.linkowner = "https://wa.me/6285934686607"
global.version = version
global.packname = "Kenz Creator | 2025"
global.baileys = "8.6.8"
global.owner = [
  "6285934686607", // ganti nomor owner 1
  "" // nomor owner 2
]

//================= PAIRING CODE ================//

global.pairing = "6285934686607"

//================= IMAGE ================//
global.image = {
  menu: "https://img12.pixhost.to/images/651/572452207_kenzhosting.jpg",
  reply: "https://img12.pixhost.to/images/660/572574768_kenzhosting.jpg",
  qris: "https://files.catbox.moe/4ssljv.jpg"
}

//================== TEKS PUSH ================//

global.tekspush = "HAI KAK ${pushname} SV SAYA ${namaowner} NANTI SV BALIK, HARGAI YA KAK" 

//================== PAYMENT ==================//

global.dana = "085934686607"
global.gopay = "085934686607"
global.ovo = "-" // biarin kalo ga ada
global.qris = "https://" // link url qris

//================== FAKE ===================//

global.namabot = "Simple Bot Kenz"
global.namaowner = "Kenz Creator 2025"

//================== DOMAIN ==================//

global.subdomain = {
  "cloudx.biz.id": {
    "zone": "",
    "apitoken": ""
  },
  "kenzcode.biz.id": {
    "zone": "",
    "apitoken": ""
  },
  "xyzcloud.web.id": {
    "zone": "",
    "apitoken": ""
  },
  "kenzprivat.biz.id": {
    "zone": "",
    "apitoken": ""
  },
  "kenzdeveloper-gacor.biz.id": {
    "zone": "",
    "apitoken": ""
  },
  "panelwebsite.biz.id": {
    "zone": "2d6aab40136299392d66eed44a7b1122", 
    "apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
  "mypanelstore.web.id": {
    "zone": "c61c442d70392500611499c5af816532", 
    "apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
  "pteroserver.us.kg": {
    "zone": "f693559a94aebc553a68c27a3ffe3b55", 
    "apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
  "digitalserver.us.kg": {
    "zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
    "apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
  "shopserver.us.kg": {
    "zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
    "apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}
}

//==================== MESS ==================//

global.mess = {
  owner: "*`[ 400 ] FITUR TERSEBUT HANYA KHUSUS OWNER SAYA AJA`*",
  grup: "*`[ 401 ] FITUR TERSEBUT HANYA UNTUK GRUP AJA`*",
  admin: "*`[ 500 ] KHUSUS ADMIN GRUP & OWNER BOT`*",
  wait: "*`[ 200 ] TUNGGU YA KAK SEDANG PROSES`*"
}

//~~~~~~~~~~~< BATAS AKHIR >~~~~~~~~~~//
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green.bold(`Update ${__filename}`))
delete require.cache[file]
require(file)
})