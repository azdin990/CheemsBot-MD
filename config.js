//═══════[© 2022 Xeon Bot Inc.]════════\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to LORD BUDDHA, ME AND MY 
//FAMILY.

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['21241427490','6283839980451'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['21241427490'] //another owner number
global.premium = ['21241427490'] //premium number
global.pengguna = 'Xeon' //username
global.botnma = 'ꪶ 𝗡𝗜𝗭𝗢𝗞𝗢 𝐁𝐎𝐓ꫂ' //bot name
global.ownernma = 'الــغـــࢪبــي' //owner name
global.packname = 'ꪶ 𝗡𝗜𝗭𝗢𝗞𝗢 𝐁𝐎𝐓ꫂ' //sticker package name
global.author = '212675945808' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '⭔' //design
global.mess = {
    success: '✓تم ',
    admin: 'هذه الميزة للمشرف فقط!',
    botAdmin: 'يجب أن يكون البوت مسؤولاً أولاً!',
    owner: 'هذه الميزة للمالك فقط',
    group: 'الميزة تستخدم فقط للمجموعات!',
    private: 'الميزات المستخدمة فقط للدردشة الخاصة!',
    bot: 'ميزة فقط لرقم البوت',
    wait: '...تحت المعالجة',
    endLimit: 'انتهت صلاحية الحد اليومي الخاص بك, The سيتم إعادة تعيين الحد كل 12 ساعة',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100 //free user limit
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
