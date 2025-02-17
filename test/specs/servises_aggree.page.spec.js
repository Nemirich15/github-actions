import Servises from "../pages/servises_agreements.page";

xdescribe('Page Servises and Agreements', () => {

    it('Open page', async() => {
        Servises.open();
        await browser.pause(2000);
    });

    it('Open Terms', async() => {
        Servises.terms();
        await browser.pause(2000);
    });

    it('Open privacy policy', async() => {
        Servises.privasy();
        await browser.pause(2000);
    });

    it('Open cookie policy', async() => {
        Servises.cookie_pol();
        await browser.pause(2000);
    });

    it('Open cookie settings', async() => {
        Servises.cookie_set();
        await browser.pause(2000);
    });

    it('Open Copyright policy', async() => {
        Servises.copyright();
        await browser.pause(2000);
    });

    it('Open privasy choices', async() => {
        Servises.privasy_ch();
        await browser.pause(2000);
    });
});