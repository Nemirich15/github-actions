import Page from "./page";

class Password extends Page {

    get current() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[1]/div/input')};
    get new() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[3]/input')};
    get retype() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[4]/input')};
    get fogot() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[2]/a')};
    get save() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/button')};
    get policy() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/div[2]/span/a[1]')};
    get terms() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/div[2]/span/a[2]')};


    open() {
        super.open('https://account.nhl.com/ui/change-password?lang=en')
    };

    current_pass() {
        this.current.setValue('15nemira15')
    };

    new_pass() {
        this.new.setValue('15nemira15')
    };

    retype_pass() {
        this.retype.setValue('15nemira15')
    };

    fogot_pass() {
        this.fogot.click()
    };

    save_pass() {
        this.save.click()
    };

    policy_page() {
        this.policy.click()
    };

    terms_page() {
        this.terms.click()
    };


}

export default new Password();