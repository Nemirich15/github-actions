import createAccaunt from "../pages/profile.page";

xdescribe('register Profile', () => {

    it(' open profile Page', async() => {
        createAccaunt.open();
        await browser.pause(2000);
    
    });

    it('set email', async() => {
        createAccaunt.emailAdress()
        await browser.pause(3000)
    });

    it('set first name', async() => {
        createAccaunt.firstname()
        await browser.pause(3000)
    });

    it('set last name', async() => {
        createAccaunt.lastname()
        await browser.pause(3000)

    });

    /*it(' set month', async() => {
        Profile.month()
        await browser.pause(2000)

    });

    it('set day', async() => {
        Profile.day()
        await browser.pause(2000)

    });

    it('set address', async() => {
        Profile.address()
        await browser.pause(2000)

    });

    it('set address two', async() => {
        Profile.address_two()
        await browser.pause(2000)

    });*/

    it('set country', async() => {
        createAccaunt.country()
        await browser.pause(3000)

    });

    /*it(' set state', async() => {
        Profile.state()
        await browser.pause(2000)

    });*/

    it('setn postcode', async() => {
        createAccaunt.postcode()
        await browser.pause(2000)

    });

    /*it('set phone number', async() => {
        Profile.phone_number()
        await browser.pause(2000)

    });

    it('click save changes', async() => {
        Profile.save_changes()
        await browser.pause(2000)

    });*/

    it('click private policy', async() => {
        createAccaunt.private_policy()
        await browser.pause(2000)

    });

    it('click terms of serves', async() => {
        createAccaunt.terms_of_servis()
        await browser.pause(2000)

    });

    it('click password', async() => {
        createAccaunt.password()
        await browser.pause(2000)

    });

    it('click favorites', async() => {
        createAccaunt.favorites()
        await browser.pause(2000)

    });

    /*it('click subscriptions', async() => {
        Profile.subscription()
        await browser.pause(2000)

    });*/

    it('click sing out', async() => {
        createAccaunt.sing_out()
        await browser.pause(2000)

    });


});

