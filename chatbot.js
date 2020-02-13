// const { NlpManager } = require('node-nlp');
 const fs = require('fs');

// let data = fs.readFileSync('training_dataset_1579048294.json');
// const manager = new NlpManager({ languages: ['en'] });
// manager.load(data);


// // Train and save the model.
// (async() => {
//     await manager.train();
//     manager.save();
//     const response = await manager.process('en', 'I should go now');
//     console.log(response);
// })();
const { NerManager } = require('node-nlp');
const manager = new NerManager({ threshold: 0.8 });

// Get content from file
 var data = fs.readFileSync("nlp-3.json");

// Define to JSON type
 var jsonContent = JSON.parse(data);
// Get Value from JSON
var areas =[], prices=[], days=[], h_names=[], h_type=[], h_park=[], h_net=[], h_stars=[], h_book_day=[], h_book_people=[], r_book_people=[], r_food=[], r_names=[], r_book_time=[], t_dest=[], t_depart=[], t_leave_at=[], t_arrive_by=[], t_book_people=[], a_names=[], a_type=[]
// Get all  value from JSON
 for (var j in jsonContent.area){
 	areas.push(jsonContent.area[j])}
 for (var j in jsonContent.day){
 	days.push(jsonContent.day[j])}
 for (var j in jsonContent.pricerange){
 	prices.push(jsonContent.pricerange[j])}
 for (var j in jsonContent.hotelname){
 	h_names.push(jsonContent.hotelname[j])}
 for (var j in jsonContent.hoteltype){
 	h_type.push(jsonContent.hoteltype[j])}
 for (var j in jsonContent.hotelparking){
 	h_park.push(jsonContent.hotelparking[j])}
 for (var j in jsonContent.hotelinternet){
 	h_net.push(jsonContent.hotelinternet[j])}
 for (var j in jsonContent.hotelstars){
 	h_stars.push(jsonContent.hotelstars[j])}
 for (var j in jsonContent.hotelbookstay){
 	h_book_day.push(jsonContent.hotelbookstay[j])}
 for (var j in jsonContent.hotelbookpeople){
 	h_book_people.push(jsonContent.hotelbookpeople[j])}
 for (var j in jsonContent.restaurantbookpeople){
 	r_book_people.push(jsonContent.restaurantbookpeople[j])}
 for (var j in jsonContent.restaurantfood){
 	r_food.push(jsonContent.restaurantfood[j])}
 for (var j in jsonContent.restaurantname){
 	r_names.push(jsonContent.restaurantname[j])}
 for (var j in jsonContent.restaurantbooktime){
 	r_book_time.push(jsonContent.restaurantbooktime[j])}
 for (var j in jsonContent.traindestination){
 	t_dest.push(jsonContent.traindestination[j])}
 for (var j in jsonContent.traindeparture){
 	t_depart.push(jsonContent.traindeparture[j])}
 for (var j in jsonContent.trainleaveat){
 	t_leave_at.push(jsonContent.trainleaveat[j])}
 for (var j in jsonContent.trainarriveby){
 	t_arrive_by.push(jsonContent.trainarriveby[j])}
 for (var j in jsonContent.trainbookpeople){
 	t_book_people.push(jsonContent.trainbookpeople[j])}
 for (var j in jsonContent.attractionname){
 	a_names.push(jsonContent.attractionname[j])}
 for (var j in jsonContent.attractiontype){
 	a_type.push(jsonContent.attractiontype[j])}
/// hotel
manager.addNamedEntityText('hotel-type', 'hotel-type',['en'], h_type);
manager.addNamedEntityText('hotel-parking', 'hotel-parking',['en'], h_park);
manager.addNamedEntityText('hotel-internet', 'internet',['en'], h_net);
manager.addNamedEntityText('hotel-name', 'hotel-name',['en'], h_names);
manager.addNamedEntityText('hotel-stars', 'hotel-stars',['en'], h_stars);
manager.addNamedEntityText('hotel-book-stay', 'hotel-book-stay',['en'], h_book_day);
manager.addNamedEntityText('hotel-book-people', 'hotel-book-people',['en'], h_book_people);


manager.addNamedEntityText('day', 'day',['en'], days);
manager.addNamedEntityText('area', 'area',['en'], areas   ]);
manager.addNamedEntityText('price-range', 'price-range',['en'], prices);


/// restaurant
manager.addNamedEntityText('restaurant-book-people', 'restaurant-book-people',['en'], r_book_people);
manager.addNamedEntityText('restaurant-name', 'restaurant-name',['en'], r_names);
manager.addNamedEntityText('restaurant-food', 'food',['en'], r_food);
manager.addNamedEntityText('restaurant-book-time', 'restaurant-book-time',['en'], r_book_time);

/// train
manager.addNamedEntityText('train-destination', 'train-destination',['en'], t_dest);
manager.addNamedEntityText('train-departure', 'train-departure',['en'], t_depart);
manager.addNamedEntityText('train-leave-at', 'train-leave-at',['en'], t_leave_at);
manager.addNamedEntityText('train-arrive-by', 'train-arrive-by',['en'], t_arrive_by);
manager.addNamedEntityText('train-book-people', 'train-book-people',['en'], t_book_people);


/// attraction


manager.addNamedEntityText('attraction-name', 'attraction-name',['en'], a_names);
manager.addNamedEntityText('attraction-type', 'attraction-type',['en'], a_type);


const entity = manager.addNamedEntity('email', 'regex');
entity.addRegex('en', /\b(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})\b/gi);




var stdin = process.openStdin();
let content = '';

stdin.addListener('data', d => {
  content = d.toString();

  manager.findEntities(
    //'I am looking for a place to stay called autumn house in the east part of town',
    //Yes I am looking for architecture and will need the address, postcode and phone number of the attraction.
    content,
    'en',
  ).then(entities => console.log(entities));
  

});

 