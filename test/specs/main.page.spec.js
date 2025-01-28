import mainPage from "../pages/main.page";

describe('open NHL main Page', () => {

    it('Open', async() => {

        mainPage.open();
        await browser.pause(5000);
    });

    it('click News', async() => {

        mainPage.pageNews();
        await browser.pause(2000);
    });
    
    it('click Video', async() => {

        mainPage.pageVideo();
        await browser.pause(2000);
    });

    it('click Scores', async() => {

        mainPage.pageScores();
        await browser.pause(2000);
    });

    it('click Shedule', async() => {

        mainPage.pageShedule();
        await browser.pause(2000);
    });

    it('click Stat', async() => {

        mainPage.pageStat();
        await browser.pause(2000);
    });
    
    it('click Standings', async() => {

        mainPage.pageStandings();
        await browser.pause(2000);
    });

    it('click Players', async() => {

        mainPage.pagePlayers();
        await browser.pause(2000);
    });

    it('click Fantasy', async() => {

        mainPage.pageFantasy();
        await browser.pause(2000);
    });

    it('click NHL Units', async() => {

        mainPage.pageNHLUnits();
        await browser.pause(2000);
    });

    it('click Teams', async() => {

        mainPage.pageTeams();
        await browser.pause(2000);
    });

    it('click Shop', async() => {

        mainPage.pageShop();
        await browser.pause(2000);
    });

    it('click Tickets', async() => {

        mainPage.pageTickets();
        await browser.pause(2000);
    });

    it('click mainpageBtn', async() => {

        mainPage.mainPageBtn();
        await browser.pause(2000);
    });

    it('click Serch', async() => {

        mainPage.pageSerch();
        await browser.pause(2000);
    });

    it('click singIn', async() => {

        mainPage.pageSignIn();
        await browser.pause(2000);
    });

    it('click Language', async() => {

        mainPage.pageLanguage();
        await browser.pause(2000);
    });



})