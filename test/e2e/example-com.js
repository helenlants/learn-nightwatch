const config = require("../../nightwatch.conf.js");

module.exports = {
  "Example.com test": function (browser) {
    browser
      .url('http://example.com/')
      .waitForElementVisible("body", 2000) // css
      .assert.containsText('body', 'Example Domain') // assert body contains text
      //.url('https://www.iana.org/domains/example')
      .assert.containsText("body", "More information...") // xpath
      .saveScreenshot(`${config.imgpath(browser)}example-com.png`)
      .url('https://www.iana.org/domains/example')
      //.click('https://www.iana.org/domains/example')
      //.useCss()
      .waitForElementVisible("body", 500) // css
      .assert.containsText('body', 'IANA-managed Reserved Domains') // assert body contains text
      .saveScreenshot(`${config.imgpath(browser)}example-com_2.png`)
      .end();
  }
} 