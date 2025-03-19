import Upcoming from "../pages/upcoming.page";

xdescribe('Upcoming Page', () => {

    it('Open Page', async() => {
        Upcoming.open();
        await browser.pause(2000);
    });

    it('Click upcoming events', async() => {
        Upcoming.upcoming_events();
        await browser.pause(2000);
    });
});