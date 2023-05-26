require('dotenv').config();
const pick = require('../lib/selectors');
const make = require('../lib/helpers');
const config = require('../lib/config');
const rURL = require('../lib/requestURL');
const query = require('../lib/queries');

describe('Login with phone test', () => {
    config.set;
    beforeAll(config.before, 60000);
    afterAll(config.after);
    test('Go to Page Validation', async () => {
        const url = await make.getUrl();
        expect(url).toMatch('https://staging.playgreen.com/');
    }, 60000);

    test('Open the login by phone form', async () => {
        await make.wait(5000);
        await make.clickX(page, pick.loginButton);
        await make.clickX(page, pick.phoneButton);
    }, 60000);
    
    test('Fill the form', async () => {
        await make.click(page, pick.inputPhone);
        await make.eraseChar(3);
        await make.type(page, pick.inputPhone, process.env.PHONE);
        await make.click(page, pick.submitButton);
        await make.click(page, pick.inputOTP);
        await make.type(page, pick.inputOTP, process.env.OTP, { delay: 100 });
        await make.click(page, pick.buttonXnotification);
        userID = await make.getRequestID(rURL.userID_URL);
        user = await query.getUserById(connection, userID);
        console.log(`El userID del miembro es ${userID}, sus datos son: `);
        console.log(user);
        await make.wait(5000);
    }, 350000);
    
    test('Logout process', async () => {
        await make.click(page, pick.profileButton);
        await make.wait(2000);
        await make.click(page, pick.editProfileButton);
        await make.wait(2000);
        await make.clickX(page, pick.logoutButton);
        await make.wait(5000);
    }, 60000);
});
