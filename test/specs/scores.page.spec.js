import Scores from "../pages/scores.page";

describe('Scores page', () => {

    it('Open scores', async() => {
        Scores.open()
    });

    it('Enter date', async () => {
        Scores.click_date()
    });

    it('Set time', async () => {
        Scores.set_time()
    });

    it('Click date before', async () => {
        Scores.date_before_weak()
    });

    it('Click date after', async () => {
        Scores.date_next_weak()
    });

    it('Time choise', async () => {
        Scores.choise_time()
    });
})