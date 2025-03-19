import Page from './page';

class videoEdit extends Page {

    get video_edit() {return $('//*[@id="main-content"]/section/div[3]/section[3]/div/div/section[2]/div/div[1]/section/div[1]/h2/a/span[1]')};

    open(){
        super.open('nhl.com');
    };


    click_video_edit() {
        this.video_edit.click()
    };

}

export default new videoEdit();