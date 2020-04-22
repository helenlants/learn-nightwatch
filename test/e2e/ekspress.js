const config = require("../../nightwatch.conf.js");

module.exports = {
  "Ekspress test": function (browser) {
    browser
      .url('https://ekspress.delfi.ee/')
      .waitForElementVisible("body", 2000)
      .resizeWindow(1200,800)
      .useXpath()
      .click("//a[@href='areen']")
      .click("//a[@href='/teema/kirjandus']")
      .useCss()
      .waitForElementVisible("body", 2000)
      .click("a.pager__button--next")
      .waitForElementVisible("div.pager-container", 2000)
      .useXpath()
      .click('//a[@href="?page=3"]')
      .useCss()
      .waitForElementVisible("body", 2000)
      .useXpath()
      .moveToElement('(//div[@class="headline"])[last()]',0,0)
      .pause(3000)
      .click('(//div[@class="headline"])[last()]')
      .pause(3000)
      .saveScreenshot(`${config.imgpath(browser)}ekspress.png`)
      .end();
  }
} 