import Page from "./page.js";

class Fantasy extends Page {

    get apple() {return $('//*[@id="main-content"]/section/div[3]/section[3]/div/div/article/div[1]/a[1]')};
    get spotify() {return $('//*[@id="main-content"]/section/div[3]/section[3]/div/div/article/div[1]/a[2]')};
    get iheart() {return $('//*[@id="main-content"]/section/div[3]/section[3]/div/div/article/div[1]/a[3]')};
    get amazon() {return $('//*[@id="main-content"]/section/div[3]/section[3]/div/div/article/div[1]/a[4]')};

    open() {
        super.open('https://www.nhl.com/fantasy/')
    };

    apple_podcast() {
        this.apple.click()
    };

    spotify_click() {
        this.spotify.click()
    };

    iheart_click() {
        this.iheart.click()
    };

    amazon_podcast() {
        this.amazon.click()
    };
}

export default new Fantasy();