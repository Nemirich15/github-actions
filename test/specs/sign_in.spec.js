import signIn from "../pages/sign_in.page";

describe('Open email and password area', () => {

    it('Open page', async() => {
        signIn.open();
        await browser.pause(3000)
    });

    it('Enter email', async() => {
        signIn.emaiUserIn();
        await browser.pause(2000)
    });

    it('Enter password', async() => {
        signIn.passUserIn();
        await browser.pause(5000)
    });

    xit('Enter fogot password', async () => {
        signIn.fogotPassUserIn();
        await browser.pause(2000)
    });

    it('Klick singIn Btn', async () => {
        signIn.signInBtn();
        await browser.pause(2000)
    });

    it('Klick singUp Btn', async () => {
        signIn.signUpBtn();
        await browser.pause(2000)
    });


});

