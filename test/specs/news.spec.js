import News from "../pages/news.page";

describe('News Page work correctly', () => {

    it('Open Page', async() => {
        News.open();
        await browser.pause(5000);
    });

    xit('Open GrEight Page', async() => {
        News.clickTheGreatEight();
        await browser.pause(1000);
    });

    it('Open Sixteen page', async()=> {
        News.clickSuperSixteen();
        await browser.pause(5000);

    });

    it('game Recap page', async() => {
        News.clickGaneRecap();
        await browser.pause(5000);
    });

    it('FourNations page', async() => {
        News.clickFourNations();
        await browser.pause(5000);
        await browser.newWindow('https://www.nhl.com/news/')
    });

    it('prospects', async() => {
        News.clickProspects();
        await browser.pause(2000);
        await browser.newWindow('https://www.nhl.com/news/')
    });

    it('playerSafely', async() => {
        News.clickPlayerSafely();
        await browser.pause(5000);
        await browser.newWindow('https://www.nhl.com/news/')
    });

    it('More', async() => {
        News.clickMore();
        await browser.pause(5000);
    });

    it('Situation Room', async() => {
        News.clickSituationRoom();
        await browser.pause(5000);
    });
})