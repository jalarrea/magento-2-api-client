const util = require('util');

class Order {
    constructor(core){
        this.core = core;
    }

    get(order, cb) {
        
        const endpointUrl = util.format('/orders/%s', order);
        console.log('endpointUrl:',endpointUrl)

        const options = {
            url: endpointUrl,
            order: order
        }
        return this.core.get(options, cb);
    }
}

module.exports = Order;