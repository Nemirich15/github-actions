/*describe('Locators Demo', () => {

    before(async()=> {

        await browser.url('https://demoqa.com/links')
    
    })

    it('CSS Example', async() => {

        const createLink = await $('#created')
        const linkResponse = await $('#linkResponse')

        createLink.scrollIntoView()
        createLink.click()

        linkResponse.scrollIntoView()
        await expect(linkResponse).toHaveText('Link has responded with staus 201 and status text Created')
    })

    it('Css by Index', async () => {

        const noContentLink = await $('#linkWrapper p:nth-child(6) a')
        const linkResponse = await $('#linkResponse')

        noContentLink.scrollIntoView()
        noContentLink.click()

        linkResponse.scrollIntoView()
        await expect(linkResponse).toHaveText('Link has responded with staus 201 and status text Created')

    })
    it('Purtial Text link', async()=> {

        const movedLink = await $('*=Mov')
        const linkResponse = await $('#linkResponse')

        movedLink.scrollIntoView()
        movedLink.click()

        linkResponse.scrollIntoView()
        await expect(linkResponse).toHaveText('Link has responded with staus 301 and status text Moved Permanently')
    })

    it('Bad request Link', async() => {

        const badRequestLink = await $('a=Bad Request')
        const linkResponse = await $('#linkResponse')

        badRequestLink.scrollIntoView()
        badRequestLink.click()

        linkResponse.scrollIntoView()
        await expect(linkResponse).toHaveText('Link has responded with staus 400 and status text Bad Request')
    })

    it('Xpath Example', async() => {

        const unauthorized = await $('//*[@id="unauthorized"]')
        const linkResponse = await $('#linkResponse')

        unauthorized.scrollIntoView()
        unauthorized.click()

        linkResponse.scrollIntoView()
        await expect(linkResponse).toHaveText('Link has responded with staus 401 and status text Unauthorized')
    })
})*/

xdescribe('Locators Demo', ()=> {

    before(async()=> {

        await browser.url('https://demoqa.com/links')
    })

    it('CSS Example', async()=> {

        const createLink = await $('#created')
        const linkResponse = await $('#linkResponse')

        createLink.scrollIntoView()
        createLink.click()
        await browser.pause(3000)


        linkResponse.scrollIntoView()
        await expect(linkResponse).toHaveText('Link has responded with staus 201 and status text Created')
        await browser.pause(3000)
    })

    it('CSS by Index', async()=> {

        const noContentLink = await $('#linkWrapper p:nth-child(6) a')
        const linkResponse = await $('#linkResponse')

        noContentLink.scrollIntoView()
        noContentLink.click()
        await browser.pause(3000)

        linkResponse.scrollIntoView()
        await expect(linkResponse).toHaveText('Link has responded with staus 201 and status text Created')
        await browser.pause(3000)
    })

    it('Purtial text Link', async()=> {

        const movedLink = await $('*=Mov')
        const linkResponse = await $('#linkResponse')

        movedLink.scrollIntoView()
        movedLink.click()
        await browser.pause(3000)

        linkResponse.scrollIntoView()
        await expect(linkResponse).toHaveText('Link has responded with staus 301 and status text Moved Permanently')
        await browser.pause(3000)
    })

    it('Bad request Link', async()=> {

        const badRequest = await $('a= Bad Request')
        const linkResponse = await $('#linkResponse')

        badRequest.scrollIntoView()
        badRequest.click()
        await browser.pause(3000)

        linkResponse.scrollIntoView()
        await expect(linkResponse).toHaveText('Link has responded with staus 301 and status text Moved Permanently')
        await browser.pause(3000)
    })

    it('Xpath Example', async()=> {

        const unautorized = await $('//*[@id="unauthorized"]')
        const linkResponse = await $('#linkResponse')

        unautorized.scrollIntoView()
        unautorized.click()
        await browser.pause(3000)

        linkResponse.scrollIntoView()
        await expect(linkResponse).toHaveText('Link has responded with staus 401 and status text Unauthorized')
        await browser.pause(3000)


    })


})