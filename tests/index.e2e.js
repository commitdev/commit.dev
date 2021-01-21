import puppeteer from 'puppeteer'
import { config, PageObjectModel } from '../helpers/e2e'

class LandingPage extends PageObjectModel {
  async checkApplyButtonExists() {
    const buttonText = await this.getTextBySelector({
      selector: '[data-test-id="button"]',
    })
    await expect(buttonText).toBeTruthy()
  }
}

describe('LandingPage', () => {
  let browser
  let page
  let landingPage
  const filenamePrefix = 'landing'

  beforeAll(async () => {
    browser = await puppeteer.launch(config.puppeteer)
    page = await browser.newPage()
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
