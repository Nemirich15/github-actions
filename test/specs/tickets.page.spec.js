import Tickets from "../pages/tickets.page";

describe('Tickets page', () => {

    it('Open', async() => {
        Tickets.open()
    });

    it('Open four nations', async() => {
        Tickets.four_nations()
    });

    it('Open stadium', async() => {
        Tickets.stadium_series()
    });

    it('Open winter classic', async() => {
        Tickets.winter_classic()
    });

    it('Open next stadium series', async() => {
        Tickets.stadium_next_series()
    });
})