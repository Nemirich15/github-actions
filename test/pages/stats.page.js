import Page from "./page";

class Stats extends Page {

    get homePage() {return $('#home')};
    get skatersPage() {return $('#skaters')};
    get goaliesPage() {return $('#goalies')};
    get teamsPage() {return $('#teams')};
    get glossaryPage() {return $('#glossary')};

    open(url) {
        super.open('https://www.nhl.com/stats')
    };

    home() {
        this.homePage.click();
    };

    skaters() {
        this.skatersPage.click();
    };

    goalies() {
        this.goaliesPage.click();
    };

    teams() {
        this.teamsPage.click();
    };

    glossary() {
        this.glossaryPage.click();
    };


}

export default new Stats();