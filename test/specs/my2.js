xdescribe ( '', () => {

    beforeEach('', () => {
        browser.url('https://www.nhl.com')
    })

    xit('Schould demonstrait addValue command', async() => {

        let serch = await $('body > div.d3-l-wrap > header > div > a.nhl-c-header__btn.nhl-c-header__btn--search')
        await browser.pause(3000)
        serch.click()
        await browser.pause(3000)

       await $('#input-search-query').setValue(123)
       await browser.pause(3000)
       await $('#input-search-query').addValue(4567)
       await browser.pause(3000)

        let value = await $('#input-search-query').getValue()
        console.log('Value is' + value) 
        


    })

    it('Logo location', async() => {

        const logo = await $('body > div.d3-l-wrap > header > div > a.nhl-c-header__logo.-league.-hidden--mobile > img').getLocation('x,y')
        
        console.log('Logo location is:' + logo)

        //const locationx = logo.getLocation('x')
        //console.log('Location x:' + locationx);
    })

    xit('Get Atribute', async()=> {
        const text = await $('#leaders-b3c336b4-697e-4751-b91d-f222d1816b93 > div.sc-gjLLEI.ewRbxZ > div > div.sc-PlNur.fIhXru > div > button.sc-eTNRI.cOaAPF.MuiButtonBase-root.sc-AngWr.daOoDc.MuiToggleButtonGroup-grouped.MuiToggleButtonGroup-groupedHorizontal.MuiToggleButton-root.Mui-selected.MuiToggleButton-sizeSmall.MuiToggleButton-standard.sc-fhrDCu.dWfzhy.MuiToggleButtonGroup-firstButton').getAttribute('name')
        console.log('Atribute is: ' + text);
    })

    it('Get page title', async()=> {
        const newsLink = await $('body > div.d3-l-wrap > header > div > nav.nhl-c-header__nav.nhl-c-header__nav--primary > ul > li:nth-child(1) > a > span')
        newsLink.scrollIntoView()
        newsLink.click()
        await browser.pause(3000)
        const brtitle = await browser.getTitle()
        console.log('Pge title is:' + brtitle);
    })
    it('Print H1', async()=> {
        const header = await $('#main-content > section > div.nhl-l-section-bg__container.nhl-container > section:nth-child(1) > div > div.d3-l-col__col-4.-right > div.nhl-c-headlines > h5').getText()
        //const text = await header.getText()
        
        console.log('Text is: ' + header)
    })

    it('Set Add Value command', async()=> {
        const search = await $('body > div.d3-l-wrap > header > div > a.nhl-c-header__btn.nhl-c-header__btn--search')
        await browser.pause(3000)
        search.click()
        await browser.pause(3000)

        const dosearch = await $('#input-search-query')
        dosearch.setValue('hallo')
        await browser.pause(3000)
        dosearch.addValue(', How are you')
        await browser.pause(3000)
        
        console.log('Name is: ' + dosearch.getValue(''))
    })

    xit('isClickable', async()=> {
        const news = await $('body > div.d3-l-wrap > header > div > nav.nhl-c-header__nav.nhl-c-header__nav--primary > ul > li:nth-child(1) > a > span').isClickable();
        //const clickable = standing.isClickable()
        console.log('Is clickable: ' + news)
    })

    xit('isDisplayed', async()=> {
        const isDisplayed = await $('body > div.d3-l-wrap > footer > section > div > div:nth-child(1) > nav.nhl-c-footer__nav.nhl-c-footer__nav--primary.nhl-c-footer__nav--social > ul > li:nth-child(1) > a > span.nhl-o-menu__icon').isDisplayed()
        console.log('Is Displayed: '+ isDisplayed);
        const isDisplayedIntoView = await $('#aw0 > img').isDisplayed()
        console.log('Is Displayed in New port: ' + isDisplayedIntoView)
    })
    xit('isEnabled, isFocused', async()=> {
        const isEnabled = await $('body > div.d3-l-wrap > footer > section > div > div:nth-child(1) > nav.nhl-c-footer__nav.nhl-c-footer__nav--primary.nhl-c-footer__nav--social > ul > li:nth-child(1) > a > span.nhl-o-menu__icon').isEnabled()
        console.log('Is Enabled: '+ isEnabled);
        const isFocused = await $('body > div.d3-l-wrap > footer > section > div > div:nth-child(1) > nav:nth-child(2) > ul > li:nth-child(1) > a > span').isFocused()
        console.log('Is Focused: ' + isFocused)
    })


})