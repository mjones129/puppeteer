# Automate WordPress Logins

Tired of manually looking up usernames and passwords and login URLs from a database? Can't remember the URL of that site exactly? What if you could open `/wp-admin` with a one-liner right from the terminal? Well now you can.

## Prerequisites

**NodeJS**: >=18

## Installation

1. Clone the repository:

`git clone https://github.com/mjones129/puppeteer.git`

2. Install the dependencies:

`npm install`

3. Make the WP Login file executable `chmod +x /path/to/puppeteer/WPlogin.mjs` 

4. Add this repo to your `$PATH` and create an alias for the wp login file by adding the following lines to your `.bashrc` or `.zshrc` file.

    4a. `export PATH="$PATH:/path/to/puppeteer"`

    4b. `alias login='node /path/to/puppeteer/WPlogin.mjs`

    4c. Save your file and reload it with `source ~/.bashrc` or `source ~/.zshrc`

## Basic Usage

1. Add real credentials to a new `.mjs` file. Use the `example-creds.mjs` file as a reference.

2. Import your new creds file at the top of `WPlogin.mjs` (line 2)

3. Save your new creds file and any modifications you might have made to `WPlogin.mjs`.

Call the main program and pass in the site alias that you defined in your creds file. An example login might look like this:

`login site-alias1`
