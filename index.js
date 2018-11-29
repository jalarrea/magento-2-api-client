'use strict';

const Core = require('./src/core');
const Order = require('./src/order');
const Shipment = require('./src/shipment');

const MAGENTO_API_VERSION = 'V1';



module.exports = (options)=>{
    let instance = {};

    options.version = MAGENTO_API_VERSION;
    
    const coreClient = new Core(options);

    instance.order = new Order(coreClient);
    instance.shipment = new Shipment(coreClient);

    return instance;
}
