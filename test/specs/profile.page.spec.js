import createAccaunt from "../pages/profile.page";

describe('register Profile', () => {

    it(' open profile Page', async() => {
        createAccaunt.open();
        await browser.pause(2000);
    
    });

    it('set email', async() => {
        createAccaunt.email()
        await browser.pause(3000)
    });

    it('set first name', async() => {
        createAccaunt.name()
        await browser.pause(3000)
    });

    it('set last name', async() => {
        createAccaunt.second_name()
        await browser.pause(3000)

    });

    it(' set month', async() => {
        createAccaunt.month_birth()
        await browser.pause(2000)

    });

    it('set day', async() => {
        createAccaunt.day_birth()
        await browser.pause(2000)

    });

    it('set address', async() => {
        createAccaunt.set_address()
        await browser.pause(2000)

    });

    it('set address two', async() => {
        createAccaunt.set_address_two()
        await browser.pause(2000)

    });

    it('set country', async() => {
        createAccaunt.native_country()
        await browser.pause(3000)

    });

    it(' set state', async() => {
        createAccaunt.set_state()
        await browser.pause(2000)

    });

    it('set postcode', async() => {
        createAccaunt.code()
        await browser.pause(2000)

    });

    it('set phone number', async() => {
        createAccaunt.phone()
        await browser.pause(2000)

    });

    it('click save changes', async() => {
        createAccaunt.save()
        await browser.pause(2000)

    });
    
    it('click favorites', async() => {
        createAccaunt.favorites()
        await browser.pause(2000)

    });

    it('click subscriptions', async() => {
        createAccaunt.subscribe()
        await browser.pause(2000)

    });

    it('click password', async() => {
        createAccaunt.valid_password()
        await browser.pause(2000)

    });

    it('click sing out', async() => {
        createAccaunt.singIn_click()
        await browser.pause(2000)

    });

    it('click terms of serves', async() => {
        createAccaunt.servis()
        await browser.pause(2000)

    });

    it('click private policy', async() => {
        createAccaunt.private_policy()
        await browser.pause(2000)

    });


});

