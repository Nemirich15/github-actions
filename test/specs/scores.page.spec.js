import Scores from "../pages/scores.page";

xdescribe('Scores page', () => {

    it('Open scores', async() => {
        Scores.open();
        await browser.pause(2000);
    });

    it('Enter date', async () => {
        Scores.click_date();
        await browser.pause(2000);
    });

    it('Set time', async () => {
        Scores.set_time();
        await browser.pause(2000);
    });

    it('Click date before', async () => {
        Scores.date_before_weak();
        await browser.pause(2000);

    });

    it('Click date after', async () => {
        Scores.date_next_weak();
        await browser.pause(2000);
    });

    it('Time choise', async () => {
        Scores.choise_time();
        await browser.pause(2000);
    });
})