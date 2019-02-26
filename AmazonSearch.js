/*
* Carry out a Amazon Search
ได้บ้างไม่ได้บ้าง
*/

"use strict";
 
var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'firefox' }).build();
 
function logTitle() {
    browser.getTitle().then(function(title) {
        console.log('Current Page Title: ' + title);
    });
}
 
function clickLink(link) {
    link.click();
}
 
function handleFailure(err) {
    console.error('Something went wrong\n', err.stack, '\n');
    closeBrowser();
}
 
function findTutsPlusLink() {
    return browser.findElements(webdriver.By.css('[href="http://code.tutsplus.com/"]')).then(function(result) {
        return result[0];
    });
}
 
//function closeBrowser() {
   // browser.quit();
//}
 
browser.get('https://www.amazon.com');
browser.findElement(webdriver.By.name('field-keywords')).sendKeys('Evan');
//browser.findElement(webdriver.By.className('nav-input')).click();
browser.findElement(webdriver.By.id('issDiv0')).click();
//browser.findElement(webdriver.By.css('#issDiv0 > .s-suggestion')).click();
//*[@id="issDiv0"]


//browser.findElement(webdriver.By.xpath("//*[@id='issDiv0']")).click();;
//browser.wait(findTutsPlusLink, 2000).then(clickLink).then(logTitle).then(closeBrowser, handleFailure);
