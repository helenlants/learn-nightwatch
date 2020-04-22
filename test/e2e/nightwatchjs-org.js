const conf = require('../../nightwatch.conf.js');

module.exports = {
  "API ref elements count": function (browser) {
    browser
      .url("https://www.nightwatchjs.org/")
      .waitForElementVisible("body", 2000)
      .resizeWindow(1200,800)
      .useXpath()
      .click('//div[@id="navbar"]//a[text()="API Reference"]') // xpath
      .useCss()
      .waitForElementVisible("body", 2000)
      .useXpath()
      .click('//*[@id="api-container"]/div[2]/div/div/div[1]/div/ul/li[2]/a') // xpath
      .click('//*[@id="api-container"]/div[2]/div/div/div[1]/div/ul/li[2]/ul/li[20]/a') // xpath
      .useCss()
      .assert.containsText('body', ".elements().count")
      .saveScreenshot(`${conf.imgpath(browser)}elementscount.png`)
      .pause(2000)
      .end();
  },
};