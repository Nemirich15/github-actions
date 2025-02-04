import News from "../pages/news.page";

xdescribe('News Page work correctly', () => {

    it('Open Page', async() => {
        News.open();
        await browser.pause(1000);
    });

it('Open GrEight Page', async() => {
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

    it('FourNations page', async() => {
        News.clickFourNations();
        //await browser.newWindow('https://www.nhl.com/news/');
    });

    it('prospects', async() => {
        News.clickProspects();
        //await browser.newWindow('https://www.nhl.com/news/')
    });

    it('playerSafely', async() => {
        News.clickPlayerSafely();
        //await browser.newWindow('https://www.nhl.com/news/')
    });

    it('More', async() => {
        News.clickMore();
    });

    it('Situation Room', async() => {
        News.clickSituationRoom();
    });
})