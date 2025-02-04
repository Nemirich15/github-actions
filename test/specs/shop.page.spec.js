import Shop from "../pages/shop.page";

describe('Shop page', () => {
    
    it('Open page', async () => {
        Shop.open();
        await browser.pause(2000);
    });

    it('Click nations', async () => {
        Shop.nations()
    });

    it('View all', async() => {
        Shop.view_all_click()
    });

    it('Register_sale', async () => {
        Shop.register_discount()
    });

});