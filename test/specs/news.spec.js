import News from "../pages/news.page";

xdescribe('News Page work correctly', () => {

    it('Open Page', async() => {
        News.open();
        await browser.pause(1000);
    });

    xit('Open GrEight Page', async() => {
        News.clickTheGreatEight();
        await browser.pause(1000);
    });

    it('Open Sixteen page', async()=> {
        News.clickSuperSixteen();
        await browser.pause(1000);

    });

    it('game Recap page', async() => {
        News.clickGameRecap();
        await browser.pause(1000);
    });

    xit('FourNations page', async() => {
        News.clickFourNations();
        await browser.pause(1000);
        await browser.newWindow('https://www.nhl.com/news/')
    });

    it('prospects', async() => {
        News.clickProspects();
        //await browser.pause(2000);
        await browser.newWindow('https://www.nhl.com/news/')
    });

    xit('playerSafely', async() => {
        News.clickPlayerSafely();
        //await browser.pause(2000);
        await browser.newWindow('https://www.nhl.com/news/')
    });

    it('More', async() => {
        News.clickMore();
        //await browser.pause(2000);
    });

    it('Situation Room', async() => {
        News.clickSituationRoom();
        //await browser.pause(2000);
    });
})