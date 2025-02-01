import Teams from "../pages/teams.page";

describe ('Teams page', () => {

    it('Open page', async() => {
        Teams.open()
        await browser.pause(2000)
    });

    it('Rangers', async() => {
        Teams.rangers();
        await browser.pause(2000);
    });

    it('Canadiens', async() => {
        Teams.canadiens();
        await browser.pause(2000);
    });

    it('Jersey', async() => {
        Teams.jersey();
        await browser.pause(2000);
    });

    it('Red Wings', async() => {
        Teams.red_wings();
        await browser.pause(2000);
    });
});