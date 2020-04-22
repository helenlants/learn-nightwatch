const config = require("../../nightwatch.conf.js");

module.exports = {
  "Tantsugeen test": function (browser) {
    browser
      .url('https://tantsugeen.ee/')
      .waitForElementVisible("body", 2000)
      .resizeWindow(1200,800)
      .assert.containsText('body', 'Tantsu- ja fitnessiklubi TantsuGeen on hubane trennikodu Tallinna südalinnas')
      .useXpath()
      .click('(//div[@class="grid trainings"])//a[text()="Tants"]') // xpath
      .useCss()
      .waitForElementVisible("body", 2000)
      .useXpath()
      .moveToElement('//div[@class="grid styles"]//a[text()="Tantsuline/ Tantsutehnika"]',0,0)
      .pause(3000)
      .click('//div[@class="grid styles"]//a[text()="Tantsuline/ Tantsutehnika"]')
      .pause(3000)
      .useXpath()
      .moveToElement('//div[@class="grid-inner"]//span[text()="Club Freestyle (CFS)"]',0,0)
      .pause(3000)
      .click('//div[@class="grid-inner"]//span[text()="Club Freestyle (CFS)"]')
      .pause(3000)
      .saveScreenshot(`${config.imgpath(browser)}tantsugeen.png`)
      .end();
  }
} 

