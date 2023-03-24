const puppeteer = require('puppeteer');
const connect = require('../lib/dbconnection');
const rURL = require('../lib/requestURL');
const iphone = puppeteer.KnownDevices['iPhone SE'];
const config = {
    set: async () => {
        let browser, page, userID, connection,user;
    },
    before: async () => {
        browser = await puppeteer.launch({
            headless: false,
            devtools: true,
        });
        page = await browser.newPage();
        await page.emulate(iphone);
        await page.setRequestInterception(true);
        page.on('request', (request) => {
            if (request.url().includes(rURL.intercom_URL)) {
                request.abort();
            } else {
                request.continue();
            }
        });
        connection = await connect();
        await page.goto('https://staging.playgreen.com/');
    },
    after: async () => {
        connection.end();
        await browser.close();
    },
};

module.exports = config;
