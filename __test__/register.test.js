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

    test('Open the register form', async () => {
        await make.wait(5000);
        await make.clickX(page, pick.cadastrarButton);
    }, 60000);
    test('Filling the register form', async () => {
        await make.click(page, pick.inputCPF);
        await make.KeyboardType(process.env.CPF);
        await make.click(page, pick.inputDate);
        await page.keyboard.press('ArrowLeft');
        await page.keyboard.press('ArrowLeft');
        await make.KeyboardType(process.env.CPFDATE);
    }, 60000);
    test('Moving to Onboarding', async () => {
        await make.click(page, pick.submitRegisterButton);
        await make.click(page, pick.termsCheckbox);
        await make.click(page, pick.googleButton);
        userID = await make.getRequestID(rURL.userID_URL);
        user = await query.getUserById(connection, userID);
        console.log(`El userID del miembro es ${userID}`);
        await make.wait(2000);
    }, 60000);
    test('Onboarding process', async () => {
        await make.clickX(page, pick.followButton1);
        await make.wait(2000);
        await make.clickX(page, pick.nextButton);
        await make.wait(2000);
        await make.clickX(page, pick.startWinningButton);
        await make.wait(2000);
        await make.clickX(page, pick.continuarButton);
        await make.wait(2000);
    }, 60000);
    test('Logout process', async () => {
        await make.clickX(page, pick.profileButton);
        await make.wait(2000);
        await make.click(page, pick.editProfileButton);
        await make.wait(2000);
        await make.clickX(page, pick.logoutButton);
    }, 60000);
    test('Erasing the user from MySQL', async () => {
        await query.deleteUserById(connection, userID);
    }, 60000);
    test('Erasing the user from Firebase', async () => {
        await query.deleteUserFirebaseByEmail(connectionfb,process.env.EMAIL);
    }, 60000);
});
