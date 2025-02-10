import Page from "./page";

class Players extends Page {

    get search() {return $('//*[@id="root"]/div[2]/div/div/div[1]/div/div/input')};
    get panarin() {return $('//*[@id="root"]/div[2]/div/div/div[3]/a[9]')};
    get mac_kinnon() {return $('//*[@id="root"]/div[2]/div/div/div[3]/a[7]')};
    get mc_david() {return $('//*[@id="root"]/div[2]/div/div/div[3]/a[3]')};

    open() {
        super.open('https://www.nhl.com/player')
    };

    search_players() {
        this.search.setValue('Connor Bedart');
        browser.pause(3000);
    };

    artemi_panarin() {
        this.panarin.click();
        browser.pause(3000);

    };

    david_mac_kinnon() {
        this.mac_kinnon.click();
        browser.pause(3000);
    };

    connor_mc_david() {
        this.mc_david.click();
        browser.pause(3000);
    };
}

export default new Players();