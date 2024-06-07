const puppeteer = require('puppeteer');
// import creds from './creds.js';
const creds = require('./creds.js');

(async () => {
    // Launch a new browser
    const browser = await puppeteer.launch({ headless: false }); // Set headless to false to see the browser
    const page = await browser.newPage();

    // Navigate to the WordPress login page
    await page.goto('https://paulastgeorge.com/wp-login.php', { waitUntil: 'networkidle2' });

    // Enter username
    await page.type('#user_login', creds.user); // Replace with your username

    // Enter password
    await page.type('#user_pass', creds.pass); // Replace with your password

    // Click the login button
    await page.click('#wp-submit');

    // Wait for navigation after login
    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    // Optionally, you can take a screenshot to verify the login
    await page.screenshot({ path: 'dashboard.png' });

    // Close the browser
    // await browser.close();
})();

