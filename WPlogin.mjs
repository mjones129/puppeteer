import Creds from "./example-creds.mjs"; //replace this import with your real creds file
import puppeteer from 'puppeteer';
import {program} from 'commander'; //commander is used to accept command line arguments

program
  .version('0.1.0')
  .argument('<siteID>', 'Site ID required to login')
  .action((siteID) => {
    console.log(`site ID: ${siteID}`);
    console.log(`site URL: ${Creds[siteID].url}`);

    (async () => {
    // Launch a new browser
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null }); // Set headless to false to see the browser. defaultViewport:null ensures that the browser window behaves normally and can be scaled to any size.
    const page = await browser.newPage();

    // Navigate to the WordPress login page
    await page.goto(Creds[siteID].url, { waitUntil: 'networkidle2' });

    // Enter username
    await page.type('#user_login', Creds[siteID].user); // Username corresponds with whatever site ID you passed when executing this file 

    // Enter password
    await page.type('#user_pass', Creds[siteID].pass); // Password corresponds with whatever site ID you passed when exectuing this file 

    // Click the login button
    await page.click('#wp-submit');

    // Wait for navigation after login
    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    // Optionally, you can take a screenshot to verify the login
    // await page.screenshot({ path: 'dashboard.png' });

    // Close the browser
    // await browser.close();
})()

  });

program.parse();


