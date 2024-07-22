const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_11_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjE4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODksXG4gICAgICAgIDYxLFxuICAgICAgICAxMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIsXG4gICAgICAgIDUsXG4gICAgICAgIDExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgODIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDMxLFxuICAgICAgICA0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNixcbiAgICAgICAgMTE2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDM3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc5LFxuICAgICAgICA3NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzLFxuICAgICAgICA5NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDY2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDYxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDUzLFxuICAgICAgICA2MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDczLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDg3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxODMsXG4gICAgICAgIDcwLFxuICAgICAgICA1MixcbiAgICAgICAgMjQwLFxuICAgICAgICA4MixcbiAgICAgICAgMjAwLFxuICAgICAgICA1NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0ZFdlem9KVG9EQ05KemJDZ0htQVhDTGpzeW4rQTVpMU9QVjVybE9pYTQwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTMmIySFJyS1JRcS1sRE5SSEdJVDVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ4MzBjMDhjLTg0MmMtNGU3Mi1iODI0LWU5MGQ2NDM1ZWE1ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTAsXG4gICAgICAxODksXG4gICAgICAyMzQsXG4gICAgICAyNDAsXG4gICAgICA5MixcbiAgICAgIDQ3LFxuICAgICAgMjMyLFxuICAgICAgMTQ2LFxuICAgICAgMjE3LFxuICAgICAgNjIsXG4gICAgICAxOTIsXG4gICAgICAxODQsXG4gICAgICA3OSxcbiAgICAgIDE4MixcbiAgICAgIDYyLFxuICAgICAgMTI2LFxuICAgICAgMjE0LFxuICAgICAgMTI3LFxuICAgICAgMzgsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAyMCxcbiAgICAgIDEzOCxcbiAgICAgIDI0MyxcbiAgICAgIDIyNCxcbiAgICAgIDE3MCxcbiAgICAgIDEwMixcbiAgICAgIDg3LFxuICAgICAgNyxcbiAgICAgIDEwNSxcbiAgICAgIDEyOSxcbiAgICAgIDExMCxcbiAgICAgIDgyLFxuICAgICAgMjQwLFxuICAgICAgMjEyLFxuICAgICAgMzIsXG4gICAgICAxOTQsXG4gICAgICAxMyxcbiAgICAgIDIsXG4gICAgICAyMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTkRSNllKVkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNzAzNDY3OTY2MDozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIDwnZCb8J2QofCdkKLwnZCn8J2QmvCdkKfwnZCdXCIsXG4gICAgXCJsaWRcIjogXCIyMjUyNTM5NzIyOTk5OTM6MzFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHFXbE9FR0VQdlQ5N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoem9rQmdTYmkrSDA1cWdZVHVFclpKMnNkLzZ5K1c0Qy8rQkJrOTB1dFFrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlMwU3c2V2tQMHBKdHpCOWtuUzRKOEQrNnhINHFjakFFVWxmVS80MHhuVUJRcXZ2bldUM0RBcTdzVkFyVW1uMmJvTjhxbDRqUHRuZjJPS0Fsa1QrbERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkEydWFleFdjZ1VselRuWURWMGlzblQ4L3FUOTQyRGxob2lsa1I3ZjI3cmxUS0RYOWJaczFXU0twZ29rSVloZGF6dEorRkN5cHdQR3d5MTRieGt3aEFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzAzNDY3OTY2MDozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTYyNTA4N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝘼𝙗𝙝𝙞𝙭𝙣𝙙🌝❤️‍🔥",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "𝘼𝙗𝙝𝙞𝙭𝙣𝙙",
  ownername:process.env.OWNER_NAME|| "𝙎𝙖𝙘𝙝𝙪🥹💖",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
