const Bixby = require('../events');

const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');

const fs = require('fs');

const Config = require('../config')

const axios = require('axios')

const request = require('request');

const os = require('os');

var clh = { cd: 'L3Jvb3QvQml4Ynkv', pay: '' }    

var ggg = Buffer.from(clh.cd, 'base64')

var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

Bixby.addCommand({pattern: 'menu', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {

// send a buttons message!

    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]

const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

var plk_here = new Date().toLocaleDateString(get_localized_date)

var afnplk = '⏱ Time :' + plk_say + '\n\n 📅 Date :' + plk_here + ''

	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: '🛢️ ALL MENU 🛢️ \n\n🎲 .vtalk\n   Voice chat ආරම්භ කරයි.\n\n🎲 .fulleva \n  full functional Eva features ආරම්භ කරයි. Turn your account into a ai chatbot!\n🥌 Eg:- : .fulleva on / off\n\n🎲 .xmedia\n  මෙවලම් 25කින් සමන්විත Plugin සමූහය. \n\n🎲 .ownercmnd\n   User සහ Sudo සදහා වලංගු Command \n\n🎲 .anime\n  අහඹු  anime රූප   \n\n🎲 .ttp \n  අකුරු සමූහයක් සරල පෙල පින්තාරුවක් බවට. \n\n🎲 .attp \n  Text දේදුනු ආකාරයේ ස්ටිකර් බවට . \n🎲 .autobio\n .  Auto Bio පහසුකම \n🥌 Eg:- : .autobio on / off\n\n🎲 .carbo n\n  කාබන් ආකාරයේ Photo  ලබා ගැනීම  \n\n🎲 .mp3\n  Video එකක්  Mp3 බවට පරිවර්තනය  \n\n🎲 .photo\n  ස්ටිකරයක් Photo එකක් බවට . \n\n🎲 .mp4\n  චලන ස්ටිකරයක් Video එකක්  බවට . \n\n🎲 .dict\n .  Dictionery බාවිතය.Eg: .dict en_US;lead For supporting languages send *.lngcode* \n\n🎲 .find\n  ගීතයක් සෙවීමට \n\n🎲 .welcome\n  Welcome Massege සාදනු ලබයි.  එම Command  එක හිස්ව  ලබාදීමෙන් පෙර සැකසූ පනිවිඩය ලබා ගත හැක .\n \n🎲 .goodbye\n  සමුගැනීමෙ පනිවිඩය සාදයි . . \n\n🎲 .antilink \n   Antilink ආරක්ෂක පත්ධතිය ආරම්භ කරයි. .\n🥌 Eg:- : .antilink on / off \n\n🎲 .ffire \n  Free Fire ලෝගෝ එකතුව \n\n🎲 .emo \n  emogi  png වෙත පරිවර්තනය \n\n🎲 .notes\n  ඔබ තැබූ සටහන් පෙන්වයි . n\n\🎲 .owner\n  bot owner ගේ තොරතුරු පෙන්වයි  \n\n🎲 .jid \n  සමූහයක Group Jid Number  ලබා ගනී. \n\n🎲 .brdmore \n  ලබා දුන් වචනයක් Read more අකාරයට ලබා ගැනීම 1 \n\n🎲 .rdmore \n ලබා දුන් වච්නයක් Read more ආකාරයක ලබා ගැනීම \n\n 🎲 .removebg \n  චායාරූපයක පසුබිම ඉවත් කිරීම . \n\n🎲 .report \n  සමූහයක සාමාජිකයකු පිලිබද Admin දැනුවත් කිරීම . \n\n🎲 .scan \n  ලබා දුන් අන්කය Whatsapp  හි බාවිතද යන්න සෙවීම . \n\n🎲 .trt\n   Google Translate මගින් Translate කරවා ගැනීම . You must reply any message.\n🥌 Eg:- : .trt en  si  (English  සිට සින්හල වෙත )\n\n🎲 .detectlang\n  ලබා දුන් වචනයේ භශාව ලබා දේ \n\n .🎲 .tts \n  ලබා දුන් වචනයක්  Voice Clip එකක් භවට පරිවර්තනය  \n\n 🎲 .song \n  ගීත බාගත කර ගැනීමට . \n\n🎲 .video\n .   YouTube Video එකක්  බාගත කර ගැනීමට . \n\n🎲 .sing \n  ගීතයක් Voice Massege එකක් ආකාරයට ලබා ගැනීම  \n\n 🎲 .fsong  \n  ගිතයක් File Type එකෙන් ලබා ගැනීම . \n\n🎲 .wiki \n  Wikipedia හි අවශ්‍ය මාතෘකාව යටතේ ලිපි සෙවීම . \n\n🎲 .img \n  Google මගින් අවශ්‍ය මාතෘකාව යටතේ Photos 5ක් ලබා ගැනීම . \n\n🎲 .github \n ලබා දුන්   Github Username එකක තොරතුරු ලබා ගැනීම .\n🥌 Example: .github thinura2003  \n\n🎲 .lyric \n  ගීතයක පද පේලි සෙවීම . \n\n🎲 .covid \n  covid පිලිබද තොරතුරු . \n\n🎲 .compliment \n  complimentry  Text ලබා දේ  \n\n🎲 .hmod \n  happymod මගින් Mod Apk ලබා ගැනීම  \n\n🎲 .insult \n  insulted words ලබා ගැනීම  \n\n🎲 .movie \n   movie info ලබා දේ . \n\n🎲 .joke \n\n  අහබු විහිලු\n\n🎲 .molu\n .   Bixby සමග චැට් . Use .molu <message> \n\n🎲 .getyt \n  Youtube හි අවශ්‍ය මාතෘකාව යටතේ Video URL ලබා ගැනීම  \n\n🎲 .quote \n  අහබු උදාන වාක්‍ය ලබා ගැනීම  \n\n🎲 .ss \n  ලබා දුන් link එකක Screenshot එකක් ලබා ගැනීම . \n\n🎲 .setvar\n  Setvar Cammand ලැයිස්තුව. \n\n🎲 .show \n   tv series and shows  පිලිබද \n\n🎲 .ig \n   instagram  User Name එකක් මගින් අයකුගෙ තොරතුරු ලබා ගැනීම \n\n🎲 .animesay \n  ලබාදුන් වචනයක් ChangeSay ආකාරයට \n\n🎲 .changesay \n  ලබා දුන් වචනයක් ChangeSay Banner එකක් ආකාරයට . \n\n🎲 .trumpsay\n .  ලබා දුන් වචන Trump Say on Twitter ආකාරයට . \n\n🎲 .sudo \nවෙනත් අයකුට OwnerCMD භාවතයට අවස්ථාව ලබා දීම \n🥌 Eg:- : .sudo *නම්බරය (94.........) *\n\n🎲 .caption \n  බොට් ලබා දෙන නිමවුම්වල Caption වෙනස් කර ගැනීමට \n🥌 Eg:- : .caption *Made by Queen Bixby*\n\n🎲 .handlers \n  බොට්ගේ අමතන සන්කේතය වෙනස්,කීඊම \n🥌 Eg:- : .handler ^[.!] \n\n🎲 .botname \n  ඔබ බොට්ගේ නාමය වෙනස් කිරීමට \n🥌 Eg:- : .botname *නව නාමය* \n\n🎲 .sticker\n  චයාරූපයක් හෝ තත් 10 අඩු විඩියෝවක ස්ටිකරයක් බවට පරිවර්තනය  .\n\n🎲 .alive\n  බොට් ක්‍රියාකාරීද යන්න බැලීමට \n\n🎲 .sysd\n   System properties. \n\n🎲 .tagadmin\n  Admin වරු Tag කිරිමට( For bot number ) .\n🎲 .txtit\n  Text to Image මෙවලම් සමූහය . \n\n🎲 .a \n  Audio එකක් හඩ පටයක් භවට . \n\n🎲 .unvoice\n Audio එකක් පටිගත කිරීමක් බවට .\n\n🎲 .update\n  බොට්ගෙ නව යාවත්කාලීන කිරීම් පරික්ශා කිරීමට . \n\n🎲 .update now\n  යාවත්කාලීන කිරීමට . \n\n🎲 .wallpaper\n  අහබු Wallpaper එකක් ලබා ගැනීම . \n\n🎲 .wame \n  Mention කර Chat Link එක ලබා ගැනීම . \n\n🎲 .weather \n  ලබා දුන් ප්‍රදේශයේ කාලගුණය ලබා ගැනීම . \n\n🎲 .speedtest\n  Download සහ Upload Speed මැන බැලීමට  \n\n🎲 .ping\n  බොට්ගෙ Speed පරික්ශාව . \n\n🎲 .short\n . දිග ලින්කු ශොර්ට් කිරීමට . \n\n🎲 .calc \n  සරල ගනනය කිරීම . \n\n🎲 .gdmrng\n\n  Good Morning මැසේජයක් යවයි. \n\n🎲 .gdni8\n  Good Night Massge එකක් යවයි. \n\n🎲 .yts \n Audio සහ File type දෙආකාරයටම ගීතයක් ලබා ගැනීම \n ᴄᴏʀᴅᴇᴅ ʙʏ ᴅᴀʀᴋ ᴀʟᴘʜᴀ (ᴛʜɪɴᴜʀᴀ)\n '}, type: 1},

        {buttonId: 'id2', buttonText: {displayText: '🎲 X-MEDIA 🎲\n\nXMEDIA COMMANDS ARE.\n\n\n🏓Usage: *.mp4enhance*\n🥌️Desc:Enhance video’s quality.\n\n🏓Usage: *.interp*\n🥌️Desc:Increases the FPS of the video.\n\n🏓Usage: *.mp4slowmo*\n🥌️Desc:Applies true-slowmo to non-slow motion videos.\n\n🏓Usage: *.x4mp4*\n🥌️Desc:Reduce video’s quality by 75%.\n\n🏓Usage: *.x2mp4*\n🥌️Desc: Reduce video’s quality by 50%.\n\n🏓Usage: *.gif*\n🥌️Desc:Converts video to gif.\n\n🏓Usage: *.agif*\n🥌️Desc:Converts video to voiced gif.\n\n🏓Usage: *.mp4blur*\n🥌️Desc: Blurs the background of the video.\n\n🏓Usage: *.mp4stab*\n🥌️Desc: Decreases the vibration of the video.\n\n🏓Usage: *.mp4rainbow*\n🥌️Desc: Applies a rainbow effect to video.\n\n🏓Usage: *.mp4color*\n🥌️Desc:Makes the colors of the video more vivid and beautiful.\n\n🏓Usage: *.mp4art*\n🥌️Desc:Applies a art effect to the video.\n\n🏓Usage: *.mp4negative*\n🥌️Desc:Applies a negative color filter to the video.\n\n🏓Usage: *.mp4vintage*\n🥌️Desc:Applies a nostalgic effect to video.\n\n🏓Usage: *.mp4bw*\n🥌️Desc: Applies a monochrome effect to video.\n\n🏓Usage: *.mp4reverse*\n🥌️Desc: Plays the video in reverse.\n\n🏓Usage: *.mp4edge*\n🥌️Desc:Applies a edge effect to the video.\n\n🏓Usage: *.mp4image*\n🥌️Desc: Converts photo to 5 sec video.\n\n🏓Usage: *.spectrum*\n🥌️Desc: Converts the spectrum of sound into video.\n\n🏓Usage: *.waves*\n🥌️Desc: Converts the wave range of sound to video.\n\n🏓Usage: *.frequency*\n🥌️Desc: Converts the frequency range of sound to video.\n\n🏓Usage: *.avec*\n🥌️Desc: Converts the histogram of sound to video.\n\n🏓Usage: *.volumeaudio*\n🥌️Desc: Converts the decibel value of the sound into video.\n\n🏓Usage: *.cqtaudio*\n🥌️Desc: Converts the CQT value of audio to video.\n\n🏓Usage: *.mp3eq*\n🥌️Desc: Adjusts the sound to a crystal clear level.\n\n🏓Usage: *.mp3crusher*\n🥌️Desc:Distorts the sound, makes ridiculous.\n\n🏓Usage: *.mp3reverse*\n🥌️Desc:Plays the sound in reverse.\n\n🏓Usage: *.mp3pitch*\n🥌️Desc:Makes the sound thinner and faster.\n\n🏓Usage *.mp3low*\n🥌️Desc:Makes the sound deep and slower.\n\n🏓Usage: *.x2mp3*\n🥌️Desc:  Makes the sound twice as fast.\n\n🏓Usage: *.mp3volume*\n🥌️Desc: 🇹🇷 Ses seviyesini fazalca arttırır.\n🇬🇧 Increase sound level so much.\n\n🏓Usage: *.bwimage*\n🥌️Desc: 🇹🇷 Fotoğrafa monochrome efekti uygular.\n🇬🇧 Applies a monochrome effect to image.\n\n🏓Usage: *.vintageimage*\n🥌️Desc: 🇹🇷 Fotoğrafa vintage efekti uygular.\n🇬🇧 Applies a vinatge effect to video.\n\n🏓Usage: *.edgeimage*\n🥌️Desc: 🇹🇷 Fotoğrafa edge efekti uygular.\n🇬🇧 Applies a edge effect to the photo.\n\n🏓Usage: *.enhanceimage*\n🥌️Desc: 🇹🇷 Fotoğrafı daha net hale getirir.\n🇬🇧 Makes the photo clearer.\n\n🏓Usage: *.blurimage*\n🥌️Desc: 🇹🇷 Fotoğrafın arka planını bulanıklaştırır.\n🇬🇧 Blurs the background of the photo.\n\n🏓Usage: *.grenimage*\n🥌️Desc: 🇹🇷 Fotoğrafa gren efekti uygular.\n🇬🇧 Applies grain effect to the photo.\n\n🏓Usage: *.negativeimage*\n🥌️Desc: 🇹🇷 Fotoğrafa negatif renk filtresi uygular.\n🇬🇧 Applies a negative color filter to the photo.\n\n🏓Usage: *.rainbowimage*\n🥌️Desc: 🇹🇷 Fotoğrafa gökkuşağı efekti uygular.\n🇬🇧 Applies rainbow effect to the photo.\n\n🏓Usage: *.colorimage*\n🥌️Desc: 🇹🇷 Fotoğrafın renklerini daha canlı ve çekici yapar.\n🇬🇧 It makes the colors of the photo more vivid and attractive.\n\n🏓Usage: *.artimage*\n🥌️Desc: 🇹🇷 Fotoğrafa çizim efekti uygular.\n🇬🇧 Applies a art effect to the photo\n\n '}, type: 1},

        {buttonId: 'id3', buttonText: {displayText: '✳️ GIT ✳️ \n\n🎯 *Creater Thinura (ᴀʟᴘʜᴀ ᴛᴇᴀᴍ)*\n\n🥎  Owner number wa.me/94711421243\n\n🥎 Owner Number wa.me/94711421243\n\n🥎 Whatsapp group : https://chat.whatsapp.com/LqqFmG64j5KFUxSje40UNz\n\n🥎 *Githublink       https://github.com/ALPHA-OFFICIAL-WA-TEAM/SL-BIXBY-BOT*\n\n🚢. ꜱᴘᴇᴄɪᴀʟ ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴀᴄʜɪ ʜɪʀᴜ ɴɪᴍᴀ\n'  }, type: 1},

      ]

      

      const buttonMessage = {

          contentText: ' ╔════════ʙɪxʙʏ════════╗\n\nᴡᴇʟᴄᴏᴍᴇ ᴛᴏ Qᴜᴇᴇɴ ʙɪxʙʏ ᴘᴜʙʟɪᴄ ʙᴏᴛ ᴍᴇɴᴜ\n\n🛢️. OWNER   ➢️ ᴅᴀʀᴋ ᴀʟᴘʜᴀ\n🛢️️. VERSION ➢️ 1.5.2\n🛢️. WORKTYPE ➢️ ᴘᴜʙʟɪᴄ \n🛢️. BASE ➢ ᴡʜᴀᴛꜱʙɪxʙʏ \n🛢️. BOT FOR ➢ ᴏɴʟʏ ꜱɪɴʜᴀʟᴀ \n\n Qᴜᴇᴇɴ ʙɪxʙʏ ᴘᴜʙʟɪᴄ ᴇᴅɪᴛɪᴏɴ\n',

          footerText: '❦ Qᴜᴇᴇɴ ʙɪxʙʏ ᴍᴀʏ ꜱᴛᴀʙʟᴇ ᴠᴇʀꜱɪᴏɴ ❦',

          buttons: buttons,

          headerType: 1

      }

      

      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
