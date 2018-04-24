var webdriver = require ('selenium-webdriver');

var driver = new webdriver.Builder().
           withCapabilities(webdriver.Capabilities.chrome()).build();

driver.get('https://www.nomissolutions.com');
driver.findElement(webdriver.By.name('search')).sendKeys('Nomis');
driver.findElement(webdriver.By.className('gsc-search-button gsc-search-button-v2')).click();
driver.wait(check_title, 5000);

function check_title() {
  var promise = driver.getTitle().then( function(title) {
    if (title === "Nomis Solutions | Bank Price Optimization Software")
    {
      console.log('success');
      return true;
    }
    else
    {
      console.log('fail --' + title);
      return false;
    }
});
return promise;
}
