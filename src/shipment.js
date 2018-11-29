const util = require('util');

class Shipment {
    constructor(core){
        this.core = core;
    }

    create(order, body, cb) {
        
        const endpointUrl = util.format('/orders/%s/ship', order);
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