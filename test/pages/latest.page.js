import Page from './page';

class Latest extends Page {

     get latest() {return $('//*[@id="main-content"]/section/div[3]/section[4]/div/div/section/div/div/section[2]/div[1]/h2/a/span[1]')};

     open() {
        super.open('nhl.com');
     };

     latest_click() {
        this.latest.click();

     };
};

export default new Latest();