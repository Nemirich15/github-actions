/*import Page from "./.page";

class Profile extends Page {

    get username() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[2]/input')};
    get firstname() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[3]/input')};
    get lastname() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[4]/input')};
    get month() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[2]/form/div[5]/div[2]/div[1]/div/div[1]/div[2]')};
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
    get sing_out() {return $('//*[@id="main-content"]/div/div[5]/div[2]/div[1]/a[5]')};

    open() {
        super.open('https://account.nhl.com/ui/?lang=en');
    }

    username() {
        this.username.setValue('nemirich15')
    };

    firstname() {
        this.firstname.setValue('Constantin')
    };

    lastname() {
        this.lastname.setValue('Nemirka')
    };

    month() {
        this.month.setValue('01-April')
    };

    day() {
        this.day.setValue('11')
    };

    country() {
        this.country.setValue('Belarus')
    };
    
    address() {
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
    };

    postcode() {
        this.postcode.setValue('220160')
    };

    phone_number() {
        this.phone_number.setValue('+375259015155');
    };

    save_changes() {
        this.save_changes.click()
    };

    private_policy() {
        this.private_policy.click()
    };

    terms_of_servis() {
        this.terms_of_servis.click()
    };

    password() {
        this.password.click()
    };

    favorites() {
        this.favorites.click()
    };

    subscription() {
        this.subscription.click()
    };

    sing_out() {
        this.sing_out.click()
    };


}

export default new Profile();*/