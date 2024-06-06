// import puppeteer from 'puppeteer';
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.connect({
        browserWSEndpoint: 'ws://localhost:9222/devtools/browser/0b8d077f-0166-4923-b07e-e97449544589'
    });

    const page = await browser.newPage();
    await page.goto('https://example.com');
    console.log(await page.title());

    await browser.disconnect();
})();




