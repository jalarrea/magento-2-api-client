const MagentoAPI = require('./../');

const options = {
        'url': 'http://localhost/index.php/rest',
        'consumerKey': 'nc4jcwtkhtd1bfz8om1o37of8ubwczsi',
        'consumerSecret': '7i08ndzucu6w3rxfoy8bqkrseihudlm8',
        'accessToken': 'rfqfqbkkma9i8qbqpcevuv8mvx3jz30a',
        'accessTokenSecret': '9eldz5b6ny0wud5vw9cup7aijjfj06vf'
};

const rest = MagentoAPI(options);


// //Get order
// rest.order.get(3, (err, data)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log('ORDERS:',JSON.stringify(data, null, 2))
// });


//Create shipment

const data = {
    "items": [
      {
        "order_item_id":  3,
        "qty": 1
      },
      {
        "order_item_id": 4,
        "qty": 1
      }
    ],
    "tracks": [
      {
        "track_number": "https://api.shippify/track/t-shisd-56565",
        "title": "Shippify"
      }
    ]
  }
rest.shipment.create(4, data, (err, data)=>{
    if(err){
        return console.log(err);
    }
    console.log('ORDERS:',JSON.stringify(data, null, 2))
});