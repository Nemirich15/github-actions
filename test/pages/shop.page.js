import Page from "./page";

class Shop extends Page {

    get picture() {return $('/html/body/div[2]/div/div[4]/div')};
    get view_all() {return $('/html/body/div[2]/div/div[5]/div/div/div[1]/a')};
    get register() {return $('//*[@id="global-footer"]/div[1]/div/div[2]/div/div[1]/div/button')};

    open () {
        super.open('https://shop.international.nhl.com/stores/nhl/default.aspx?portal=DOWR8775&CMP=PSC-DOWR8775');
    };

    nations () {
        this.picture.click()
    };

    view_all_click() {
        this.view_all.click()
    };

    register_discount() {
        this.register.click()
    };
}

export default new Shop();