import Page from './page';

class Subscribe extends Page {

    get weekly() {return $('//*[@id="NHL_NEWSLETTERS"]')};
    get daily() {return $('//*[@id="NHL_POSTGAME_NEWSLETTERS"]')};
    get members() {return $('//*[@id="CLUB_OFFERS"]')};
    get partners() {return $('//*[@id="NHL_PARTNERS"]')};

    open() {
        super.open('https://account.nhl.com/ui/subscriptions?lang=en');
    };

    weekly_news() {
        this.weekly.click();
        browser.pause(2000);
    };

    daily_news() {
        this.daily.click();
        browser.pause(2000);
    };

    members_hall() {
        this.members.click();
        browser.pause();
    };

    partners_busines() {
        this.partners.click();
        browser.pause(2000);
    };
}

export default new Subscribe();