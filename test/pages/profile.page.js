import Page from "./page";

class createAccaunt extends Page {

    get emailAdress() {return $('//*[@id="main-content"]/div/div[3]/div[2]/div[2]/form/div[1]/div/input')};
    get firstname() {return $('//*[@id="main-content"]/div/div[3]/div[2]/div[2]/form/div[2]/input')};
    get lastname() {return $('//*[@id="main-content"]/div/div[3]/div[2]/div[2]/form/div[3]/input')};
    //get month() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[5]/div[2]/div[1]/div/div[1]/div[2]')};
    //get day() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[5]/div[2]/div[2]/div/div[1]/div[2]')};
    get country() {return $('//*[@id="main-content"]/div/div[3]/div[2]/div[2]/form/div[6]/div[1]/div/div[1]/div[2]')};
    //get address() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[7]/input')};
    //get address_two() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[8]/input')};
   // get city() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[9]/input')};
   // get state() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[10]/input')};
    get postcode() {return $('//*[@id="main-content"]/div/div[3]/div[2]/div[2]/form/div[7]/input')};
    //get phone_number() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[12]/input')};
    //get save_changes() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/button')};
    get nhl_com_privacy() {return $('//*[@id="main-content"]/div/div[3]/div[2]/div[2]/form/div[9]/span/a')};
    get terms_of_servis() {return('//*[@id="main-content"]/div/div[3]/div[2]/div[2]/form/div[11]/span/a')};

    get password() {return $('//*[@id="main-content"]/div/div[3]/div[2]/div[2]/form/div[4]/input')};
    get confirmPassword() {return $('//*[@id="main-content"]/div/div[3]/div[2]/div[2]/form/div[5]/input')};
    get favoriteTeam() {return $('//*[@id="main-content"]/div/div[3]/div[2]/div[2]/form/div[8]/div[1]/div/div[1]/div[2]')};
    get register() {return $('//*[@id="main-content"]/div/div[3]/div[2]/div[2]/form/button')};
    //get subscription() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[1]/a[4]')};
    get sing_in() {return $('//*[@id="main-content"]/div/div[3]/div[2]/div[2]/div[3]/a')};

    open() {
        super.open('https://account.nhl.com/ui/register?client_id=a2nhl&redirect_uri=https%3A%2F%2Faccount.nhl.com%2Fui%2F');
    }

    emailAdress () {
        this.emailAdress.setValue('nemirich15')
    };

    firstname() {
        this.firstname.setValue('Constantin')
    };

    lastname() {
        this.lastname.setValue('Nemirka')
    };

    /*month() {
        this.month.setValue('01-April')
    };

    day() {
        this.day.setValue('11')
    };*/

    country() {
        this.country.setValue('Belarus')
    };
    
    /*address() {
        this.address.setValue('Minsk, Shpilevsky str.')
    };

    address_two() {
        this.address_two.setValue('Minsk')
    };

    city() {
        this.city.setVanlue('Minsk')
    };

    state() {
        this.state.setValue('Minsk region')
    };*/

    postcode() {
        this.postcode.setValue(220160)
    };

    /*phone_number() {
        this.phone_number.setValue('+375259015155');
    };

    save_changes() {
        this.save_changes.click()
    };*/

    private_policy() {
        this.nhl_com_privacy.click()
    };

    terms_of_servis() {
        this.terms_of_servis.click()
    };

    password() {
        this.password.click()
    };

    favorites() {
        this.favoriteTeam.click()
    };

    /*subscription() {
        this.subscription.click()
    };*/

    sing_out() {
        this.sing_in.click()
    };


}

export default new createAccaunt();