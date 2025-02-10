import Page from "./page";

class Tickets extends Page {

    get four()  {return $('//*[@id="main-content"]/section/div[2]/section[1]/div/div/section/div/div[1]')};
    get stadium()  {return $('//*[@id="main-content"]/section/div[2]/section[1]/div/div/section/div/div[2]')};
    get winter()  {return $('//*[@id="main-content"]/section/div[2]/section[1]/div/div/section/div/div[3]')};
    get stadium_next()  {return $('//*[@id="main-content"]/section/div[2]/section[1]/div/div/section/div/div[4]')};

    open() {
        super.open('https://www.nhl.com/tickets/')
    };

    four_nations() {
        this.four.click()
    };

    stadium_series() {
        this.stadium.click();
    };

    winter_classic() {
        this.winter.click()
    };

    stadium_next_series() {
        this.stadium_next.click()
    };
} 

export default new Tickets();