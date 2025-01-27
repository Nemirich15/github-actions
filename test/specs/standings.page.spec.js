import Standings from "../pages/standings.page"

describe('Open page Standings', () => {

    it('Open Page', async() => {
        Standings.open();
        await browser.pause(3000);
    });

    it('Open Division', async() => {
        Standings.openDivision();
        await browser.pause(3000);
    });

    it('open wild card', async() => {
        Standings.openWildCard();
        await browser.pause(3000);
    })

    it('open Conference', async() => {
        Standings.openConference();
        await browser.pause(3000);
    });

    it('open League', async() => {
        Standings.openLeague();
        await browser.pause(3000);
    });

    it('open play-off format', async() => {
        Standings.openPlayOffFormat();
        await browser.pause(3000);
    });

    it('open Tie-breaking procedure', async() => {
        Standings.openProcedure();
        await browser.pause(3000);
    });
})

