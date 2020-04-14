const config = require("../../nightwatch.conf.js");

module.exports = {
  "Search kass": function (browser) {
    browser
      .url("https://www.neti.ee/")
      .waitForElementVisible("body", 2000) // css
      .setValue('input[type=text]', ['kass',browser.Keys.ENTER])
      .useXpath()
      .assert.containsText("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", "Koduloomad") // xpath
      .click("//a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']")
      .useCss()
      .waitForElementVisible("body", 500) // css
      .url("http://loomakaitse.eu/")
      .waitForElementVisible("body", 2000) // css
      browser.assert.urlEquals("http://loomakaitse.eu/")
      .saveScreenshot(`${config.imgpath(browser)}neti-ee-kass.png`)
      .end();
    }


}