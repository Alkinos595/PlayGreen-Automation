const pick = {
    loginButton: "//div[contains(text(),'Login')]",
    phoneButton: "//body//div[@id='portal-modal']//div//div//div[2]//button[1]",
    inputPhone: "input[placeholder='55 (11) 99999 9999']",
    submitButton: '#button-login',
    inputOTP: '#input-code-0',
    buttonXnotification: '#portal-modal > div > div > div > div > div:nth-child(2) > div > svg > g',
    googleEmail: "//div[normalize-space()='alkinos595@gmail.com']",
};
module.exports = pick;
