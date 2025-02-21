import Page from './page';

class TopStories extends Page {

    get store_one() {return $('//*[@id="main-content"]/section/div[3]/section[1]/div/div[2]/section/div/div/div[1]/ul/li[1]/a/span')};
    get store_two() {return $('//*[@id="main-content"]/section/div[3]/section[1]/div/div[2]/section/div/div/div[1]/ul/li[2]/a/span')};
    get store_three() {return $('//*[@id="main-content"]/section/div[3]/section[1]/div/div[2]/section/div/div/div[1]/ul/li[3]/a/span')};
    get store_four() {return $('//*[@id="main-content"]/section/div[3]/section[1]/div/div[2]/section/div/div/div[1]/ul/li[4]/a/span')};

    open() {
        super.open('nhl.com');
    };

    top_stor_one() {
        this.store_one.click();
        browser.pause(2000);
    };

    top_stor_two() {
        this.store_two.click();
        browser.pause(2000);
    };

    top_stor_three() {
        this.store_three.click();
        browser.pause(2000);
    };

    top_stor_four() {
        this.store_four.click();
        browser.pause(2000);
    };

}

export default new TopStories();