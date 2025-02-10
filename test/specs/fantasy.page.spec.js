import Fantasy from "../pages/fantasy.page";

xdescribe('Fantasy page', () => {

    it('Open fantasy page', async() => {
        Fantasy.open();
        await browser.pause(2000);
    });

    it('Apple podcast', async() => {
        Fantasy.apple_podcast()
    });

    it('Spotyfy', async() => {
        Fantasy.spotify_click()
    });

    it('Iheart', async() => {
        Fantasy.iheart_click()
    });

    it('Amazon podcast', async() => {
        Fantasy.amazon_podcast()
    });

});
