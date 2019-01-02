const util = require('util');

class Track {
    constructor(core){
        this.core = core;
    }

    create(body, cb) {
        
        const endpointUrl = util.format('/shipment/track');
        console.log('endpointUrl:',endpointUrl)

        const options = {
            url: endpointUrl,
            body
        }
        return this.core.post(options, cb);
    }

    del(track, cb) {
        
        const endpointUrl = util.format('/shipment/track/%s',track);
        console.log('endpointUrl:',endpointUrl)

        const options = {
            url: endpointUrl
        }
        return this.core.post(options, cb);
    }

}

module.exports = Track;