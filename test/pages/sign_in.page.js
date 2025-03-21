import Page from "./page";

class signIn extends Page {

    get email() {return $('//*[@id="main-content"]/div/div[2]/div[2]/form/div[1]/div/input')};
    get password() {return $('//*[@id="main-content"]/div/div[2]/div[2]/form/div[2]/input')};
    get fogotPass(){return $('//*[@id="main-content"]/div/div[2]/div[2]/form/div[3]/a')};
    get signIn() {return $('//*[@id="main-content"]/div/div[2]/div[2]/form/button')};
    get signUp() {return $('//*[@id="main-content"]/div/div[2]/div[3]/button')};

    get username() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[2]/input')};
    get firstname() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[3]/input')};
    get lastname() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[4]/input')};
    /*get month() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[5]/div[2]/div[1]/div/div[1]/div[2]')};
    get day() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[5]/div[2]/div[2]/div/div[1]/div[2]')};
    get country() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[6]/div[1]/div/div[1]/div[2]')};
    get address() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[7]/input')};
    get address_two() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[8]/input')};
    get city() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[9]/input')};
    get state() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[10]/input')};
    get postcode() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[11]/input')};
    get phone_number() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[12]/input')};
    get save_changes() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/button')};
    get private_policy() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/div[3]/span/a[1]')};
    get terms_of_servis() {return('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/div[3]/span/a[2]')};

    get password() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[1]/a[2]')};
    get favorites() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[1]/a[3]')};
    get subscription() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[1]/a[4]')};
    get sing_out() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[1]/a[5]')};*/

    open() {
        super.open('https://account.nhl.com/ui/?client_id=a2nhl&lang=en&redirect_uri=https%3A%2F%2Faccount.nhl.com%2Fui%2F&returnUrl=https%3A%2F%2Fwww.nhl.com%2Fsearch%2F')
    };

    emaiUserIn() {
        this.email.setValue('nemirka15@gmail.com');
    };

    passUserIn() {
        this.password.setValue('15nemira15');
    };

    fogotPassUserIn() {
        this.fogotPass.click();
    };

    signInBtn() {
        this.signIn.click();
    };

    signUpBtn() {
        this.signUp.click();
    };

}

export default new signIn();