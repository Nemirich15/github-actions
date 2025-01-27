import Password from "../pages/password.page";

describe('Password page', () => {

    it('Open page', async() => {
        Password.open();
        await browser.pause(3000);
    });

    it('current pass', async() => {
        Password.current_pass()
    });

    it('new pass', async() => {
        Password.new_pass();
    });

    it('retype pass', async() => {
        Password.retype_pass();
    });

    it('fogot pass', async() => {
        Password.fogot_pass();
    });

    it('save pass', async() => {
        Password.save_pass();
    });

    it('policy', async() => {
        Password.policy_page();
    });

    it('terms', async() => {
        Password.terms_page();
    });

});
