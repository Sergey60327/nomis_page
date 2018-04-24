var webdriver = require ('selenium-webdriver');
var assert = require('assert');

var driver = new webdriver.Builder().
           withCapabilities(webdriver.Capabilities.chrome()).build();

driver.get('https://www.nomissolutions.com');
var URL = driver.getCurrentUrl();
Assert.assertEquals(URL, "https://www.nomissolutions.com" );
