import Players from "../pages/players.page";

describe('Open page', () => {

    it('Open Page Players', async() => {
        Players.open();
        await browser.pause(2000);
    });

    it('Open Panarin', async() => {
        Players.artemi_panarin()
    });

    it('Open Mac Kinnon', async() => {
        Players.david_mac_kinnon()
    });

    it('Open Mc Davib', async() => {
        Players.connor_mc_david()
    });

    it('set Connor Bedard in search', async() => {
        Players.search_players()
    });
})