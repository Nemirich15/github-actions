import Page from "./page";

class Standings extends Page {

    get division() {return $('//*[@id="division"]')};
    get wild_card() {return $('//*[@id="wildcard"]')};
    get conference() {return $('//*[@id="conference"]')};
    get league() {return $('//*[@id="league"]')};
    get playoff_format() {return $('//*[@id="playoffFormat"]/div[1]/button')};
    get breaking_procedure() {return $('//*[@id="tieBreaking"]/div[1]/button')};

    open() {
        super.open('https://www.nhl.com/standings')
    };

    openDivision() {
        this.division.click()
    };

    openWildCard() {
        this.wild_card.click()
    };

    openConference() {
        this.conference.click()
    };

    openLeague() {
        this.league.click()
    };

    openPlayOffFormat() {
        this.playoff_format.click()
    };

    openProcedure() {
        this.breaking_procedure.click()
    };
}

export default new Standings();

