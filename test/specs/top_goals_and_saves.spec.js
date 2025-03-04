import Top from '../pages/top_goals_and_saves.page';

describe('Top page', () => {
    
    it ('Open page Top', async() => {

        Top.open();
        await browser.pause(2000);
    });

    it('Open top scores and saves', async() => {
        Top.click_top();
        await browser.pause(3000);
    });
    
});