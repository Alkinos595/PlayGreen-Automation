const pick = {
    //-----------------Login-----------------
    loginButton: "//div[contains(text(),'Login')]", //Xpath
    phoneButton: "//body//div[@id='portal-modal']//div//div//div[2]//button[1]", //Xpath
    inputPhone: "input[placeholder='55 (11) 99999 9999']", //CSS Selector
    submitButton: '#button-login', //CSS Selector
    inputOTP: '#input-code-0', //CSS Selector
    buttonXnotification: '#portal-modal > div > div > div > div > div:nth-child(2) > div > svg > g', //CSS Selector
    googleEmail: "//div[normalize-space()='alkinos595@gmail.com']", //Xpath
    //-----------------Register-----------------
    cadastrarButton: '//body[1]/div[1]/main[1]/header[1]/div[2]', //Xpath
    inputCPF: "input[placeholder='Digite seu CPF']", //CSS Selector
    inputDate: "input[placeholder='dd/mm/yyyy']", //CSS Selector
    submitRegisterButton: "button[type='submit']", //CSS Selector
    termsCheckbox: "body div[id='portal-modal'] div div div:nth-child(2) input:nth-child(1)", //CSS Selector
    googleButton: "div[id='portal-modal'] div div div div button span", //CSS Selector
    followButton1: "(//p[contains(text(),'Seguir')])[1]", //Xpath
    nextButton: "//button[normalize-space()='Próximo']", //Xpath
    startWinningButton: "//button[normalize-space()='Comece a ganhar!']", //Xpath
    continuarButton: "//button[normalize-space()='Continuar']", //Xpath
    profileButton: "//body/div[@id='app']/main/header/div[1]", //Xpath Selector
    editProfileButton: "body div[id='app'] header div div div div div:nth-child(2)", //CSS Selector
    logoutButton: "//p[normalize-space()='Sair da sessão']",//Xpath
    
};
module.exports = pick;
