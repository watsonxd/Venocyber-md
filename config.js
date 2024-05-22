//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/dc5a14b479f7ed0271769.png";
global.devs = "255625774543";
global.sudo = process.env.SUDO || "263781330745";
global.owner = process.env.OWNER_NUMBER || "263781330745";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 2;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "true";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJyMHdjRnZiUnY2L0tseDhpQkNrY3JhRW9jMDJuMXMvRndCM2pFazkwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjNzMVQ3V2toeVREUDhVb0NJQnNIcUtONU93QUtIZzZtRTBFUFdsd3QxMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1R0loUWFNTWVpMmxXWm5wV3BCUzRnUFFRYWRWeGs5MngrMjI3SW5yTGtBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJabE5pdmRQcThCYkFKaXh0U3lqY3YybkFuWVI3TnVBWmJNZGxuVW5LdjFZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktHcy9wQVpaNFoxYUVSR2FOWmhmb1NaaExLbzQxYTU0QzlEUStGLzlOVUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQ1aG1ZYlBNNW1JWVpsUStxTlNUQXhHK0tVa3o4NTI2a200aG9xaUF0QWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUxMUXJLSjAvelBPTjVkbUplMVZhdnFOUWRMWjFuL2daZVRKS2JCNGVVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNENMSHZOUWtjZVN3dVdjb2dIS042eFZtUldITTFhZC9ZMFpaWU1jSW9qcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFzeGloN1hocGtPSlY2VUE2aWtLdGFlc1ArOGtvUEFZQVF0QWtHM0hoeVN0Mkx5TnUxb2lDdk12aFJ0a2VtWjAyTWhsNFF1bWZZN1BTWXk1MGt6ekFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYyLCJhZHZTZWNyZXRLZXkiOiJUZXRmdHZtNXlkRnJVT2VFYm1qK25Cc2RxaFNXc3NUN3VIS0lDSTUrZlc4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc4MTMzMDc0NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2Mzk3NDhBNUNCM0IzMjRFQkU1ODM0MjA1NDVEM0RBNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE2MzYyNTIxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkN0Ewd2hhaFNOT1RvX29RS29TVkZnIiwicGhvbmVJZCI6ImNmYmQ5YjhkLWFjNTktNDU5ZS04ZDBlLTRiNDhlZWQwNmZmNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyNHUwMjNYemVUT2Zxc2pGTnRqT2ZsQitWVUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU9ZTFRqdUVFcUMzcllNVGdUc3Zmay9sMWR3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRYWDdXM0xKIiwibWUiOnsiaWQiOiIyNjM3ODEzMzA3NDU6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZmS8J2ek/CdmY/wnZmO8J2el/Cdnpwg8J2epvCdmL/wn5OhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQS3A4TllGRUllNnRySUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5R1NVQ0YyVktnNUVrL3lUd3hDRnBRNkVhb0R4Rm54c1dDN3Jma1BTV0drPSIsImFjY291bnRTaWduYXR1cmUiOiJEejVlUk8yOVZxOWpBcHdZR3FyZGhNMGdoVU5UeEVXdElSdVlIOVhhWWU0eUxqVERuMDR5NmNxam43T1RPd2Q5VysyRTR1Tyt4L3RZZDIwODg2a1hCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoib3lWWHgrY1hzaUpRdnl6cW9LbTgyOW5vSVJZcVRPYXUxNzRKbVpjTzJsSm1LMEVVd0dpNkRhTjVKTTVEendWSDFPSkcxMnVvY0xpZU1sOVdrdzFkQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3ODEzMzA3NDU6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmUmtsQWhkbFNvT1JKUDhrOE1RaGFVT2hHcUE4Ulo4YkZndTYzNUQwbGhwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE2MzYyNTE2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVNQiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝙒𝞓𝙏𝙎𝞗𝞜 -𝞦𝘿 ╠════ need support then ☞ https://github.com/Watsonxd",
  author: process.env.PACK_AUTHER || "𝙒𝞓𝙏𝙎𝞗𝞜 -𝞦𝘿",
  packname: process.env.PACK_NAME || "𝙒𝞓𝙏𝙎𝞗𝞜 -𝞦𝘿",
  botname: process.env.BOT_NAME || "𝙒𝞓𝙏𝙎𝞗𝞜 -𝞦𝘿",
  ownername: process.env.OWNER_NAME || "𝙒𝞓𝙏𝙎𝞗𝞜 -𝞦𝘿",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-359b93b3-403f-4456-847e-3accc1bea732",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "watsonxd",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "𝙒𝞓𝙏𝙎𝞗𝞜 -𝞦𝘿").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
