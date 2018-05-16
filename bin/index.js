#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('../lib/inquirer');
const scrape = require('../lib/scrape')
const download = require('../lib/download')


// Clear screen
clear();

// Display header
const displayHeader = () => {
    console.log(
        chalk.yellow
        (
            figlet.textSync('Download UI5', {
                font: "Small"
            })
        )
    )
}

const run = async() => {
    displayHeader();
    const selectedLib = await inquirer.askUI5Lib();
    switch (selectedLib.selectedLib) {
        case 'OpenUI5':
            const availableVersions = await scrape.getOpenui5Versions();
            const selectedVersion = await inquirer.askOpenUI5Version(availableVersions);
            const downloadStatus= await download.downloadOpenUI5(selectedVersion.downloadUrl);
            break;
 
        case 'SapUI5':
            console.log(chalk.yellow('Retrieving SapUI5 versions'));
            break;

        default:
            break;
    }
}

run();