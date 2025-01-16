import Page from "./page";

class mainPage extends Page {
    
    get news() {return $('/html/body/div[1]/header/div/nav[1]/ul/li[1]/a/span')};
    get video() {return $('/html/body/div[1]/header/div/nav[1]/ul/li[2]/a/span')};
    get scores() {return $('/html/body/div[1]/header/div/nav[1]/ul/li[3]/a/span')};
    get shedule() {return $('//*[@id="hamburger-menu"]/ul[1]/li[1]/a')};
    get stat() {return $('//*[@id="hamburger-menu"]/ul[1]/li[2]/a')};
    get standings() {return $('//*[@id="hamburger-menu"]/ul[1]/li[3]/a')};
    get players() {return $('//*[@id="hamburger-menu"]/ul[1]/li[4]/a')};
    get fantasy() {return $('//*[@id="hamburger-menu"]/ul[1]/li[5]/a')};
    get nhlUnites() {return $('//*[@id="hamburger-menu"]/ul[1]/li[6]/a')};
    get teames() {return $('//*[@id="hamburger-menu"]/ul[1]/li[7]/a')};
    get shop() {return $('//*[@id="hamburger-menu"]/ul[1]/li[8]/button/span[1]')};
    get tickets() {return $('//*[@id="hamburger-menu"]/ul[1]/li[9]/a')};

    get mainPageBtn() {return $('/html/body/div[1]/header/div/a[1]/img')};
    get search() {return $('/html/body/div[1]/header/div/a[3]')};
    get signIn() {return $('//*[@id="hamburger-menu"]/ul[2]/li[2]/a')};
    get language() {return $('//*[@id="hamburger-menu"]/ul[2]/li[1]/button')};

    open() {
        super.open('https://www.nhl.com/');
    };
        

    pageNews() {
        this.news.click();
    };

    pageVideo() {
        this.video.click();
    };

    pageScores() {
        this.scores.click();
    };

    pageShedule() {
        this.shedule.click();
    };

    pageStat() {
        this.stat.click();
    };

    pageStandings() {
        this.standings.click();
    };

    pagePlayers() {
        this.players.click();
    };

    pageFantasy() {
        this.fantasy.click();
    };

    pageNHLUnits() {
        this.nhlUnites.click();
    };

    pageTeams() {
        this.teames.click();
    };

    pageShop() {
        this.shop.click();
    };

    pageTickets() {
        this.tickets.click();
    };

    mainPageBtn() {
        this.mainPageBtn.click();
    };

    pageSerch() {
        this.search.click();
    };

    pageSignIn() {
        this.signIn.click();
    };

    pageLanguage() {
        this.language.click();
    };
}

export default new mainPage();

   