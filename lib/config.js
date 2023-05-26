require('dotenv').config();
const puppeteer = require('puppeteer');
const connect = require('../lib/dbconnection');
const connectfb = require('../lib/dbconnectionFB');
const rURL = require('../lib/requestURL');
const iphone = puppeteer.KnownDevices['iPhone SE'];
const config = {
    set: async () => {
        let browser, page, userID, user, connection, browserWSEndpoint, connectionfb;
    },
    before: async () => {
        browser = await puppeteer.launch({
            headless: true,
            devtools: false,
        });
        //* IMPORTANTE Recordar cambiar el browserWSEndpoint antes de cada sesion de pruebas o fallaran los test
        browserWSEndpoint = process.env.BROWSER_WS_ENDPOINT;
        browser = await puppeteer.connect({ browserWSEndpoint });
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
        connectionfb = await connectfb();
        await page.goto('https://staging.playgreen.com/');
    },
    after: async () => {
        connection.end();
        console.log('La conexión a la base de datos MySQL ha sido cerrada');
        connectionfb.app().delete();
        console.log('La conexión a la base de datos Firebase ha sido cerrada');
        await page.close();
    },
};

module.exports = config;
