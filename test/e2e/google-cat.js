const config = require("../../nightwatch.conf.js");

module.exports = {
  "Google cat": function (browser) {
    browser
      .url("https://www.google.com/")
      .waitForElementVisible("body", 2000) // css
      .setValue('input[type=text]', ['cat',browser.Keys.ENTER])
      .getTitle(function (title) {
        this.assert.ok(title.includes("cat"));
      })
      .saveScreenshot(`${config.imgpath(browser)}google-cat.png`)
      .assert.containsText('body', "Wikipedia")
      .useXpath()
      .click("//*[contains(text(), 'Wikipedia')]")
      .useCss()
      .assert.containsText('body', "Felis catus")
      .saveScreenshot(`${config.imgpath(browser)}google-felis.png`)
      .end();
  }
}   