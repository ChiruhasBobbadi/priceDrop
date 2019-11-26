const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: 'e0f62c6a',
    apiSecret: 'weZe2ICGWs8Co8Ke',
});

const from = 'Nexmo';
const to = '919133995644';
const text = 'Hello from Nexmo';

nexmo.message.sendSms(from, to, text);