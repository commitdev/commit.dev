import puppeteer from 'puppeteer'

import { config, PageObjectModel } from '../helpers/e2e'

const APPLY_SELECTOR = '[href="/apply"]'
const SUBMIT_APPLICATION_SELECTOR = 'form button'
class LandingPage extends PageObjectModel {
  async checkApplyButtonExists() {
    const buttonText = await this.getTextBySelector({
      selector: APPLY_SELECTOR,
    })
    await expect(buttonText).toBeTruthy()
  }
}

describe('LandingPage', () => {
  let browser
  let context
  let page
  let landingPage
  const filenamePrefix = 'landing'

  beforeAll(async () => {
    browser = await puppeteer.launch(config.puppeteer)
    context = await browser.createIncognitoBrowserContext()
    page = await context.newPage()
    console.log('Host: ', config.host)
    landingPage = new LandingPage(page)
  })

  afterAll(async () => {
    await browser.close()
  })

  it('renders the apply button', async () => {
    await landingPage.goToUrl({ url: config.host })
    await landingPage.checkApplyButtonExists()
    await landingPage.saveScreenshot({
      filename: `${filenamePrefix}_00_landing_page_button`,
    })
  })

  it('it goes to the apply page on click of apply button', async () => {
    await landingPage.clickSelector({
      selector: APPLY_SELECTOR,
    })
    const buttonText = await landingPage.getTextBySelector({
      selector: SUBMIT_APPLICATION_SELECTOR,
    })
    expect(buttonText).toBeTruthy()
    await landingPage.saveScreenshot({
      filename: `${filenamePrefix}_00_landing_page_navigate_to_apply_page`,
    })
  })
})
