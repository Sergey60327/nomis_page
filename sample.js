var webdriver = require ('selenium-webdriver');

var driver = new webdriver.Builder().
           withCapabilities(webdriver.Capabilities.chrome())
           .build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('Wiki');
driver.findElement(By.name('btnG')).click();
driver.wait(check_title, 1000);

function check_title() {
  var promise = driver.getTitle().then( function(title) {
    if (title === "wiki - Google Search")
    {
      consol.log('success');
      return true;
    }
    else
    {
      console.log('fail --' + title);
    }
});
return promise;
}
