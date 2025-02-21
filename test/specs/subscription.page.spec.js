import Subscription from "../pages/subscription.page";

xdescribe (' Subscribe page', () => {

    it('Open page', async()=> {
        Subscription.open()
    });

    it('Click daily', async() => {
        Subscription.daily_news()
    });

    it('Click weekly', async() => {
        Subscription.weekly_news()
    });
    
    it('click memvers', async()=> {
        Subscription.members_hall()
    });

    it('click bussines', async() => {
        Subscription.partners_busines()
    });
});