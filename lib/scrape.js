const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
    getOpenui5Versions: async() => {
        let versions = await axios.get('https://openui5.org/OpenUI5Downloads.json')
            .then((response)=> {
                if (response.status === 200) {
                    const v = response.data.map((data)=>{
                            let version = {};
                            version.version = data.version;
                            version.url = `https://openui5.hana.ondemand.com/downloads/openui5-runtime-${data.version}.zip`
                            return version;
                        });
                    return v;
                }

            }, (error) => {
                console.log(error);
            })
        return versions;     
    },
    getSapui5Versions: async() => {
       
    }

}
