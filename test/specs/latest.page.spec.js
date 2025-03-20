import Latest from "../pages/latest.page";

describe('Latest page', () => {

    it('Open page', async() => {
        Latest.open();
        await browser.pause(2000);
    });

    it('Click latest link', async() => {
        Latest.latest_click();
        await browser.pause();
    });
});