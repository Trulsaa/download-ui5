const axios = require('axios');
const files = require('./files');
const fs = require('fs');

module.exports = {
    downloadOpenUI5: async(url) => {

        let percentCompleted = 0;

        const response = await axios({
            method: 'GET',
            url: url,
            responseType: 'stream'
        }
        )

        files.createTempDir(files.getCurrentDirectoryBase());
        const filename = url.split('/').reverse()[0];

        response.data.pipe(fs.createWriteStream('./tmp/' + filename));
        return new Promise((resolve, reject) => {
            response.data.on('end', () => {
            resolve()
            console.log('Done')
            })

            response.data.on('downloadProgress',(e) => {
                console.log(e)
            })

            response.data.on('error', () => {
            reject()
            })
        })

    }
}