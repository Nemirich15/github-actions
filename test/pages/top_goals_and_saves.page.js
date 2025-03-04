import Page from './page';

class Top extends Page {

    get top_scores_saves() {return $('//*[@id="main-content"]/section/div[3]/section[4]/div/div/section/div/div/section[4]/div[1]/h2/a/span[1]')};

    open(){
        super.open('nhl.com')
    };

    click_top(){
        this.top_scores_saves.click();
    };

}

export default new Top();