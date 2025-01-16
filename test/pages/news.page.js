import Page from "./page";

class News extends Page {

    get theGrEight() {return $('/html/body/div[1]/section/nav/div/div[1]/div/ul/li[1]/a/span')};
    get superSixteen() {return $('/html/body/div[1]/section/nav/div/div[1]/div/ul/li[2]/a/span')};
    get gameRecap() {return $('/html/body/div[1]/section/nav/div/div[1]/div/ul/li[3]/a/span')};
    get fourNations() {return $('/html/body/div[1]/section/nav/div/div[1]/div/ul/li[4]/a/span')};
    get prospects() {return $('/html/body/div[1]/section/nav/div/div[1]/div/ul/li[5]/a/span')};
    get playerSafely() {return $('/html/body/div[1]/section/nav/div/div[1]/div/ul/li[6]/a/span')};
    get more() {return $('/html/body/div[1]/section/nav/div/div[1]/button/span')};
    get situationRoom() {return $('/html/body/div[1]/section/nav/div/div[1]/ul/li/a/span')};

    open(url) {
        browser.url('https://www.nhl.com/news/')
    };


    clickTheGreatEight() {
        this.theGrEight.click()
    };

    clickSuperSixteen() {
        this.superSixteen.click()
    };

    clickGaneRecap(){
        this.gameRecap.click()
    };

    clickFourNations() {
        this.fourNations.click()
    };

    clickProspects() {
        this.prospects.click()
    };

    clickPlayerSafely() {
        this.playerSafely.click()
    };

    clickMore() {
        this.more.click()
    };

    clickSituationRoom() {
        this.situationRoom.click()
    };

    
}

export default new News();