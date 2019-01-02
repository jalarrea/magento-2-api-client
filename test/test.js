const MagentoAPI = require('./../');

const options = {
        'url': 'http://localhost/index.php/rest',
        'consumerKey': 'dst2ag7ynj5boonui5jljsk5f0cgdxyl',
        'consumerSecret': 'al6vc3ws5fw5yn9ll04ywod68xpsyav6',
        'accessToken': '6g2kydow8es9cojsw1hvr4299o1tba4y',
        'accessTokenSecret': '21kaex839htujavarouhx2lmbun6y6th'
};

const rest = MagentoAPI(options);


// // //Get order
// rest.order.get(3, (err, data)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log('ORDERS:',JSON.stringify(data, null, 2))
// });


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

const data = {
    "entity": {
        "items": [
            {
                "order_item_id":  5,
                "qty": 1
            },
            {
                "order_item_id": 6,
                "qty": 1
            }
        ],
        "tracks": [
            {
                "track_number": "https://api.shippify/track/t-shisd-56565",
                "title": "Shippify"
            }
        ],
        "appendComment": false
    }
  }
rest.shipment.create(3, data, (err, data)=>{
    if(err){
        return console.log(err);
    }
    console.log('ORDERS:',JSON.stringify(data, null, 2))
});