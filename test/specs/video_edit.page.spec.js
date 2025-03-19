import videoEdit from "../pages/video-edit.page";

describe('video_edit Page', () => {

    it('Open page', async() => {
        videoEdit.open();
        await browser.pause(3000);
    });

    it('Click video_edit link', async() => {
        videoEdit.click_video_edit();
        await browser.pause(3000);
    });
});