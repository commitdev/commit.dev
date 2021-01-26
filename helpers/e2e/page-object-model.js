import { config } from './config'

export default class PageObjectModel {
  constructor(page) {
    this.i = page
    this.config = config

    this.i.setDefaultTimeout(20000)
    this.i.setDefaultNavigationTimeout(30000)
  }

  async checkSelectorDoesNotExist({ selector }) {
    const result = await this.i.waitForSelector(selector, {
      hidden: true,
    })
    await expect(result).toBeFalsy()
  }

  async clickNavigationLink({ selector }) {
    await Promise.all([
      this.i.waitForSelector(selector),
      this.i.click(selector),
      this.i.waitForNavigation({
        waitUntil: 'networkidle0',
      }),
    ])
  }

  async clickSelector({ selector }) {
    await this.i.waitForSelector(selector)
    await this.i.click(selector)
  }

  async enterTextToSelector({ selector, text }) {
    await this.i.waitForSelector(selector)
    await this.i.click(selector)
    await this.i.type(selector, text)
  }

  async getNumOfElementsBySelector({ selector }) {
    await this.i.waitForSelector(selector)
    return this.i.$$eval(selector, (el) => el.length)
  }

  async getSelectorDataTestId({ selector }) {
    await this.i.waitForSelector(selector)
    return this.i.$eval(selector, (e) => e.getAttribute('data-test-id'))
  }

  async getSelectorId({ selector }) {
    await this.i.waitForSelector(selector)
    return this.i.$eval(selector, (e) => `#${e.id}`)
  }

  async getTextBySelector({ selector }) {
    await this.i.waitForSelector(selector)
    const result = await this.i.$eval(selector, (el) =>
      el.innerText.toUpperCase(),
    )
    return result
  }

  async goToUrl({ screenshotDir = this.config.screenshotDir, url }) {
    await Promise.all([this.i.goto(url)])
    await this.i.screenshot({
      path: `${screenshotDir}/${url.split('/').pop()}-visit.png`,
    })
  }

  async saveScreenshot({ filename }) {
    await this.i.screenshot({
      path: `${this.config.screenshotDir}/${filename}.png`,
      fullPage: true,
    })
  }
}
