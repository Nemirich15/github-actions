import Page from "./page";

class Teams extends Page {

    get ny_rangers() {return $('//*[@id="main-content"]/section/div[2]/div/div[1]/div[1]/div/div[5]/div/h3/a')};
    get montreal() {return $('//*[@id="main-content"]/section/div[2]/div/div[1]/div[2]/div/div[5]/div/h3/a')};
    get new_jersey() {return $('//*[@id="main-content"]/section/div[2]/div/div[1]/div[1]/div/div[3]/div/h3/a')};
    get detroit() {return $('//*[@id="main-content"]/section/div[2]/div/div[1]/div[2]/div/div[3]/div/h3/a')};

    open() {
        super.open('https://www.nhl.com/info/teams/')
    };

    rangers() {
        this.ny_rangers.click()
    };

    canadiens() {
        this.montreal.click()
    };

    jersey() {
        this.new_jersey.click()
    };

    red_wings() {
        this.detroit.click()
    }    


}

export default new Teams ();