const MagentoAPI = require('./../');

const options = {
        'url': 'https://53e3591c.ngrok.io/index.php/rest',
        'consumerKey': '966d0bc8hva67iwknj9q5bptxtig4ofr',
        'consumerSecret': '4y6g5to1d07qnfs07749ij64vw5a0cx2',
        'accessToken': '4obq0ws9j8t9cm076iykb0gwimifk45l',
        'accessTokenSecret': '5agpjsrdeo9rlttpsxcvgnlaiv6mhe7f'
};

const rest = MagentoAPI(options);


// //Get order
rest.order.test((err, data)=>{
    if(err){
        return console.log(err);
    }
    console.log('ORDERS:',JSON.stringify(data, null, 2))
});


// //Get shipment
// rest.shipment.get(5, (err, data)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log('SHIPMENT:',JSON.stringify(data, null, 2))
// });



// const track = {
//     "entity": {
//         "order_id": 4,
//         "parent_id": 8,
//         "extension_attributes": {},
//         "description": "Shippify Tracking Page",
//         "track_number": "https://api.shippify.co/track/t-shiinc-345454",
//         "title": "Shippify Tracking Code",
//         "carrier_code": "custom"
//       }
// }
// //Create track
// rest.track.create(track, (err, data)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log('TRACK:',JSON.stringify(data, null, 2))
// });


//Create shipment

// const data = {
//     "entity": {
//         "items": [
//             {
//                 "order_item_id":  5,
//                 "qty": 1
//             },
//             {
//                 "order_item_id": 6,
//                 "qty": 1
//             }
//         ],
//         "tracks": [
//             {
//                 "track_number": "https://api.shippify/track/t-shisd-56565",
//                 "title": "Shippify"
//             }
//         ],
//         "appendComment": false
//     }
//   }
// rest.shipment.create(3, data, (err, data)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log('ORDERS:',JSON.stringify(data, null, 2))
// });