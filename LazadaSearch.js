/*
* Carry out a Lazada Search
รันรอบแรกไม่ได้รอบสองได้
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
 
browser.get('https://www.lazada.co.th');
browser.findElement(webdriver.By.name('q')).sendKeys('lego');
browser.findElement(webdriver.By.className('search-box__button--1oH7')).click();

//browser.wait(findTutsPlusLink, 2000).then(clickLink).then(logTitle).then(closeBrowser, handleFailure);
