const util = require('util');

class Shipment {
    constructor(core){
        this.core = core;
    }

    get(shipment, cb) {
        
        const endpointUrl = util.format('/shipment/%s', shipment);
        console.log('endpointUrl:',endpointUrl)

        const options = {
            url: endpointUrl
        }
        return this.core.get(options, cb);
    }

    create(order, body, cb) {
        
        const endpointUrl = util.format('/order/%s/ship', order);
        console.log('endpointUrl:',endpointUrl)

        const options = {
            url: endpointUrl,
            order: order,
            body
        }
        return this.core.post(options, cb);
    }
}

module.exports = Shipment;