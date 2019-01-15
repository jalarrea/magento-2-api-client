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

    last(cb) {
        const endpointUrl = util.format('/orders?searchCriteria[pageSize]=1&searchCriteria[currentPage]=1&searchCriteria[sortOrders][0][field]=created_at&searchCriteria[sortOrders][0][direction]=DESC');
        console.log('endpointUrl:',endpointUrl)

        const options = {
            url: endpointUrl
        }
        return this.core.get(options, cb);
    }
}

module.exports = Order;