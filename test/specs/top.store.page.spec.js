import TopStories from "../pages/top.stories";

xdescribe('Top stories', () => {

    it('Open Page', async() => {
        TopStories.open();
        await browser.pause(3000);
    });

    it('Open store one', async() => {
        TopStories.top_stor_one();
        await browser.pause(3000);
    });

    it('Open top stor two', async() => {
        TopStories.top_stor_two();
        await browser.pause(3000);
    });

    it('Open top stor three', async() => {
        TopStories.top_stor_three();
        await browser.pause(3000);
    });

    it('Open top store four', async() => {
        TopStories.top_stor_four();
        await browser.pause(3000);
    
    });
});