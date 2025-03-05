import Page from './page';

class Upcoming extends Page {

    get events() {return $('//*[@id="main-content"]/section/div[3]/section[5]/div/div/section[1]/div/div[1]/section/div[1]/h2/a/span[1]')};

    open() {
        super.open('https://www.nhl.com/')
    };

    upcoming_events() {

        this.events.click()
    };
};

export default new Upcoming();
