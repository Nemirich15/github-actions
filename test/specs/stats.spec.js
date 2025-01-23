import Stats from "../pages/stats.page";

describe('Open stats Page', () => {

    it('Open page', async() => {
        Stats.open();
        await browser.pause(3000);
    });

    it('home pafge', async() => {
        Stats.home();
        await browser.pause(3000);
    });

    it('open scaters', async() => {
        Stats.skaters();
        await browser.pause(3000);
    });

    it('open goalies', async() => {
        Stats.goalies();
        await browser.pause(3000);
    });

    it('open glossary page', async() => {
        Stats.glossary();
        await browser.pause(3000);
    });
});