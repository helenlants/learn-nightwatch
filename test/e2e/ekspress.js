const config = require("../../nightwatch.conf.js");

module.exports = {
  "Ekspress test": function (browser) {
    browser
      .url('https://ekspress.delfi.ee/')
      .pause(3000)
      .useXpath()
      .click("//*[@id='header']/div[1]/div[2]/div[2]/div[1]/ul/li[5]/a")
      .click("//*[@id='header']/div[1]/ul/li[3]/a")
      .useCss()
      .pause(3000)
      .useXpath()
      .click("//*[@id='main']/section/div[1]/div[1]/ul/li[6]")
      .useCss()
      .pause(3000)
      .assert.urlEquals('https://ekspress.delfi.ee/teema/kirjandus?page=3')
      .useXpath()
      .waitForElementVisible("//*[@id='main']/section/div[11]/div[1]/div/div[5]/div/a/figure/div/img")
      .click("//*[@id='main']/section/div[11]/div[1]/div/div[5]/div/a/figure/div/img")
      .useCss()
      .pause(4000)
      .useXpath()
      .assert.elementPresent("//*[@id='article-82101687']/div[1]/div/div/div[1]/div[1]/div[3]/div/div[2]/ul/li[3]/a/i", "Kuula nupp on olemas")
      .moveToElement("//*[@id='article-82101687']/div[1]/div/div/div[1]/div[2]/div[3]/div[4]/div/div/div[2]", 10, 10)
      .pause(5000)
      .saveScreenshot(`${config.imgpath(browser)}testEkspress.png`)
      .useXpath()
      .click("//*[@id='article-82101687']/div[1]/div/div/div[1]/div[2]/div[3]/div[4]/div/div/div[2]/div[1]/article/div/div/h1/a")
      .useCss()
      .pause(4000)
      .useXpath()
      .assert.elementPresent("//*[@id='article-80187142']/div[1]/div/div/div[1]/div[1]/div[3]/div/div[2]/ul/li[3]/a/i", "Kuula nupp teisel artiklil on olemas")
      .assert.elementPresent("//*[@id='article-80187142']/div[1]/div/div/div[1]/div[1]/div[3]/div/div[1]/div/a/div[2]/div[1]", "Autor on olemas")
      .pause(5000)
      .saveScreenshot(`${config.imgpath(browser)}ekspress.png`)
      .end();
  }
} 