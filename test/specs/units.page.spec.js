import Units from "../pages/units.page";

xdescribe('Open units page', () => {

it('Open page', async() => {
    
    Units.open();
    await browser.pause(1000);
});

it('open Indigenos', async() => {

    Units.indi();
    await browser.pause(2000);
});

it('open Hispanic', async() => {
    Units.hispanic();
    await browser.pause(2000);
});

it('open Hockey Fight', async() => {
    Units.fights();
    await browser.pause(2000);
});

it('open community hero', async() => {
    Units.community();
    await browser.pause(2000);
});

it('open more', async() => {
    Units.morePage();
    await browser.pause(2000);
});

it('open insta', async () => {
    Units.insta();
    await browser.pause(2000);
});

it('click playBtn', async () => {
    Units.play();
    await browser.pause(2000);
});

it('click right', async () => {
    Units.click_right();
    await browser.pause(2000);
});

it('click left', async () => {
    Units.click_left();
    await browser.pause(2000);
});


});