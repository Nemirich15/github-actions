import Page from "./page";

class Units extends Page {

    get indiPeoples() {return $('/html/body/div[1]/section/nav/div/div[1]/div/ul/li[1]/a/span')};
    get hispanicPeoples() {return $('/html/body/div[1]/section/nav/div/div[1]/div/ul/li[2]/a/span')};
    get hockeyFights() {return $('/html/body/div[1]/section/nav/div/div[1]/div/ul/li[3]/a/span')};
    get communityHero() {return $('/html/body/div[1]/section/nav/div/div[1]/div/ul/li[4]/a/span')};
    get more() {return $('/html/body/div[1]/section/nav/div/div[1]/button/span/span[1]')};
    get instaBtn() {return $('//*[@id="main-content"]/section/div[2]/section[2]/div/div/section[2]/div/a')};
    get playBtn() {return $('//*[@id="b82fdb1b-51f2-4355-a4f0-bb3c8c98b438"]/button')};

    get clickRight() {return $('//*[@id="main-content"]/section/div[2]/section[2]/div/div/section[3]/div[2]/div/div/div/div[2]/button[2]')};
    get clickLeft() {return $('//*[@id="main-content"]/section/div[2]/section[2]/div/div/section[4]/div[2]/div/div/div/div[2]/button[1]')};

    open(url) {
        super.open('https://www.nhl.com/community/')
    };

    indi() {
        this.indiPeoples.click()
    };
    
    hispanic() {
        this.hispanicPeoples.click()
    };

    fights() {
        this.hockeyFights.click()
    };

    community() {

        this.communityHero.click()
    };

    morePage() {
        this.more.scrollInToView();
        this.more.click()
    };

    insta() {
        this.instaBtn.scrollInToView();
        this.instaBtn.click();
    };

    play() {
        this.playBtn.scrollInToView();
        this.playBtn.click();
    }

    click_right() {
        this.clickRight.scrollInToView()
        this.clickRight.click()
    };

    click_left() {
        this.clickLeft.scrollInToView()
        this.clickLeft.click()
    };


}

export default new Units();