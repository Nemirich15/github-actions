import Page from './page';

class Servises extends Page {

    get terms_of_servise() {return $('/html/body/div[1]/footer/section/div/div[1]/nav[2]/ul/li[1]')};
    get privasy_policy() {return $('/html/body/div[1]/footer/section/div/div[1]/nav[2]/ul/li[2]')};
    get cookie_policy() {return $('/html/body/div[1]/footer/section/div/div[1]/nav[2]/ul/li[3]')};
    get cookie_settings() {return $('/html/body/div[1]/footer/section/div/div[1]/nav[2]/ul/li[4]')};
    get copyright_policy() {return $('/html/body/div[1]/footer/section/div/div[1]/nav[2]/ul/li[5]')};
    get privacy_choices() {return $('/html/body/div[1]/footer/section/div/div[1]/nav[2]/ul/li[6]')};

    open() {

        super.open('https://www.nhl.com/')
    };

    terms() {
        this.terms_of_servise.click()
    };

    privasy() {
        this.privasy_policy.click()
    };

    cookie_pol() {
        this.cookie_policy.click()
    };

    cookie_set() {
        this.cookie_settings.click()
    };

    copyright() {
        this.copyright_policy.click()
    };

    privasy_ch() {
        this.privacy_choices.click()
    };
}

export default new Servises();