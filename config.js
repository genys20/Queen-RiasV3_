require("dotenv").config(); // Load environment variables

module.exports = {
    prefix: process.env.PREFIX || ".", // Command prefix

    ownerName: process.env.OWNER_NAME || "Toxxic-Boy", // Owner name

    ownerNumber: process.env.OWNER_NUMBER || "256771975963", // Your WhatsApp number

    mode: process.env.MODE || "private", // Bot mode: 'public' or 'private'

    region: process.env.REGION || "Uganda", // Region

    botName: process.env.BOT_NAME || "Rias Gremory V3", // Bot name

    exifPack: process.env.EXIF_PACK || "RIAS V3 LOVES", // Sticker pack name

    exifAuthor: process.env.EXIF_AUTHOR || "Toxxic", // Author of the sticker pack

    timeZone: process.env.TIME_ZONE || "Africa/Kampala", // Time zone

    presenceStatus: process.env.PRESENCE_STATUS || "available", // Bot presence status

    autoRead: process.env.AUTO_READ === "false", // Auto-read messages (true or false)

    autoViewStatus: process.env.AUTO_VIEW_STATUS === "true", // Auto-view statuses (true or false)

    autoReact: process.env.AUTO_REACT === "false", // Auto-react (true or false)

    sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia05tSEpSbm1PVDdXT3EzWFE3L0xxcXRWQ1Z6dUZaZTl5Z1JCMjkxVEtsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidm83YzlVVDFRRTJHYlZjVFR4eGFwSFh4VHQ1VUUrSnJpSVJIalo3OUNuUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0QWVVV2VrcDVmT3BkVCtqTjUxZlMrdXVLSk1FbnVBelBCYWFZR1BjOTFrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5d3AwNWxhUlZlaWoySFVCaWVMeWVIaGx5NFNUL3QyMFAwd0tvc0N1R3cwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVOTDEzejdHS1FqbW5saUlYbTQzaWM4bnlvL0xpQ3E5TmlydnNWMDRNR0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhLQkU5YkF1Ymw5bU1KNWFDdTZOdzZLd29Id0FIMjdnN2FiaDY3VzYzeHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1BlMzEwTnhiQ1Vyb2ZPemlyV0ZwV0VDRTc0UEpFZ0ExcnBpT2tGYlZYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDZzMS9LT0w3N1dhaEUyR1JhL3B6bWxWWUdTcFFHSFoxQmNtTG5aM3Qydz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpERkFwTHdab1Q2c2J5VmNRNjh2cXl5aUJ4djRLdjQyN0xHUVFmaExnZU5zT1g1OVBoelE0KzNTSUVIeElWa2h3ZSsyNmJuejU0bzJrSTg1dTRIYkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6IkU3aS9FdTM0dEF6bFY0V3R2cWs0bnNqYTROS3FjYU1oMFVuRk91YTFUQkk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkQ2SFlaNlgyIiwibWUiOnsiaWQiOiIyNTY3NzE5NzU5NjM6NTBAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNjMyMzkzNTg5NDMyOTk6NTBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKS1kzSTRHRU1UcjByd0dHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJSSUV1REVjaHJMUjdEYWlCU3FVSjZSdmlPSk1oZ3Uzb2Z2bzVaOUJtRGdRPSIsImFjY291bnRTaWduYXR1cmUiOiJTVGRpTk91bkg4b2JDWlpPOUFvNWJ5M3hKQ0pYcjIvWGJoTEZmN1hTQzJGcklkdk5waWZPQW5PYW1ySzlPMU81b0psOEVuRWl1ZW1zbjZDOTlrajVCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoia3ZGbkk3VkVVUWhSWW9aMnF6TmJaNGRHd3ZZSExGT1Y5eUNNdUtuVTB1TlIrNEFhU3owaTE0cWJSeHVyWlErK0dOU1lvNEJlQ05zK3dDOElKbWkyQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTY3NzE5NzU5NjM6NTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVVNCTGd4SElheTBldzJvZ1VxbENla2I0amlUSVlMdDZINzZPV2ZRWmc0RSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM3Nzk5MTIxLCJsYXN0UHJvcEhhc2giOiIyUDFZaGYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUY4VCJ9", // Add Your Session ID here

    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "true", // Auto-reject calls feature (true or false)
};
