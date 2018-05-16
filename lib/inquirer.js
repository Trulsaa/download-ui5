const inquirer = require('inquirer');
const files = require('./files');

module.exports = {

    askUI5Lib: () => {
        const questions = [
            {
                type: 'list',
                name: 'selectedLib',
                message: "What library do you want to use?",
                choices: [
                    'OpenUI5',
                    'SapUI5'
                ],
                default: [
                    'OpenUI5',
                    'SapUI5'
                ]
            }
        ];

        return inquirer.prompt(questions);
    },

    askOpenUI5Version: (versions) => {
        const questions = [
            {
                type: 'list',
                name: 'downloadUrl',
                message: "What version do you want to use?",
                choices: versions.map((data) => {
                    const v = {};
                    v.name = data.version;
                    v.value = data.url;
                    return v;
                 })
                ,
                default: versions.map((data) => {
                    const v = {};
                    v.name = data.version;
                    v.value = data.url;
                    return v;
                 })
            }
        ];  
        
        return inquirer.prompt(questions);
    }

};

