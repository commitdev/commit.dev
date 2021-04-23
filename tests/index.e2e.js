import puppeteer from 'puppeteer'

import { config, PageObjectModel } from '../helpers/e2e'

const APPLY_SELECTOR = '[type="applicationButton"]'
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
})
