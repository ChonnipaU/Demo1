/*
* Carry out a Amazon Search
*/

"use strict";
require('geckodriver');
var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
 
function logTitle() {
    browser.getTitle().then(function(title) {
        console.log('Current Page Title: ' + title);
    });
}
 
function clickLink(link) {
    link.click();
}

//function closeBrowser() {
   // browser.quit();
//}
 
browser.get('https://www.amazon.com');
//browser.findElement(webdriver.By.name('field-keywords')).sendKeys('Star Wars: The Complete Saga');
//browser.findElement(webdriver.By.className('nav-input')).click();
//browser.findElement(webdriver.By.id('issDiv0')).click();
browser.findElement(webdriver.By.className('nav-search-scope nav-sprite')).click(); //เลือก dropdown category
browser.findElement(webdriver.By.css('#searchDropdownBox > option:nth-child(5)')).click();
browser.findElement(webdriver.By.name('field-keywords')).sendKeys('Star Wars: The Complete Saga');
browser.findElement(webdriver.By.className('nav-input')).click();


//browser.findElement(webdriver.By.xpath("//option[@value='search-alias=beauty-intl-ship']")).click();


//(By.xpath("//input[@value='Google Search']"));

//browser.wait(findTutsPlusLink, 2000).then(clickLink).then(logTitle).then(closeBrowser, handleFailure);
