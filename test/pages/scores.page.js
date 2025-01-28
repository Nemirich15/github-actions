import Page from "./page";

class Scores extends Page {

    get date() {return $('//*[@id="root"]/div[2]/div/div/div/div[2]/div/div[1]/div/div[1]/div/button[2]')};
    get time() {return $('//*[@id=":r0:"]')};
    get date_turne_left() {return $('//*[@id="root"]/div[2]/div/div/div/div[2]/div/div[1]/div/div[1]/div/button[1]/svg/path')};
    get date_turne_right() {return $('//*[@id="root"]/div[2]/div/div/div/div[2]/div/div[1]/div/div[1]/div/button[3]/svg/path')}
    get time_choise() {return $('//*[@id="root"]/div[2]/div/div/div/div[2]/div/div[1]/div/div[2]/div/div/div/div/div/div/button/svg/path')};
    


    open() {
        super.open('https://www.nhl.com/scores')
    };

    click_date() {
        this.date.click()
    };

    set_time() {
        this.time.setValue('Eastern time')
    };

    date_before_weak() {
        this.date_turne_left.click()
    };

    date_next_weak() {
        this.date_turne_right.click()
    };

    choise_time() {
        this.time_choise.click()
    };

}

export default new Scores();