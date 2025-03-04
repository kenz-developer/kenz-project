/*
   * Base Simpel
   * Created By Kenz Creator
*/
const chalk = require("chalk").default
const version = require("./package.json")

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
global.baileys = "8.6.8"
global.owner = [
  "6285934686607", //ganti nomor owner
  "" //nomor owner 2
]

//================= IMAGE ================//
global.image = {
  menu: "https://img12.pixhost.to/images/651/572452207_kenzhosting.jpg",
  reply: "https://img12.pixhost.to/images/660/572574768_kenzhosting.jpg",
  qris: "https://files.catbox.moe/4ssljv.jpg"
}

//================== PAYMENT ==================//

global.dana = "085934686607"
global.gopay = "085934686607"

//================== FAKE ===================//

global.namabot = "Simple Bot Kenz"

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