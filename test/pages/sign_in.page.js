import Page from "./page";

class signIn extends Page {

    get email() {return $('//*[@id="main-content"]/div/div[2]/div[2]/form/div[1]/div/input')};
    get password() {return $('//*[@id="main-content"]/div/div[2]/div[2]/form/div[2]/input')};
    get fogotPass(){return $('//*[@id="main-content"]/div/div[2]/div[2]/form/div[3]/a')};
    get signIn() {return $('//*[@id="main-content"]/div/div[2]/div[2]/form/button')};
    get signUp() {return $('//*[@id="main-content"]/div/div[2]/div[3]/button')};

    open() {
        super.open('https://account.nhl.com/ui/?client_id=a2nhl&lang=en&redirect_uri=https%3A%2F%2Faccount.nhl.com%2Fui%2F&returnUrl=https%3A%2F%2Fwww.nhl.com%2Fsearch%2F')
    };

    emaiUserIn() {
        this.email.setValue('nemirka15@gmail.com')
    };

    passUserIn() {
        this.password.setValue('15nemira15')
    };

    fogotPassUserIn() {
        this.fogotPass.click()
    };

    signInBtn() {
        this.signIn.click()
    };

    signUpBtn() {
        this.signUp.click()
    };


}

export default new signIn();