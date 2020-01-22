// const { NlpManager } = require('node-nlp');
// const fs = require('fs');

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
/// hotel
manager.addNamedEntityText('hotel-type', 'guesthouse',['en'], ['guesthouse', 'Guest house', 'guest-house']);
manager.addNamedEntityText('hotel-type', 'hotel' ,['en'], ['Hotel', 'hotel', 'place to stay']);
manager.addNamedEntityText('hotel-area', 'hotel-area',['en'], ['in the center', 'in Cambridge', 'near the centre of town', 'in the east part of town', 'near the airport', 'in the north', 'in the south ', 'in the east ', 'in the west ', 'in the north part of town', 'in the south part of town', 'in the east part of town','in the west part of town ' ,'southern aylesbray','peterborough', 'stevenage', 'bishops stortford'    ]);
manager.addNamedEntityText('hotel-parking', 'name',['en'], ['free parking', 'Free parking', 'parking']);
manager.addNamedEntityText('hotel-internet', 'internet',['en'], ['internet', 'wifi ', 'free-wif', 'Free wifi', 'Wifi', 'free internet']);
manager.addNamedEntityText('hotel-book-day', 'hotel-book-day',['en'], ['tuesday', 'friday', 'monday', 'wednesday', 'saturday', 'thursday', 'sunday', 'Tuesday', 'Friday', 'Monday', 'Wednesday', 'Saturday', 'Thursday', 'Sunday']);
manager.addNamedEntityText('hotel-name', 'hotel-name',['en'], ['city centre north b and b', 'express by holiday inn cambridge', "el shaddai","a and b guest house","arbury lodge guest house","university arms hotel","kirkwood house","autumn house","gonville hotel","leverton house","acorn guest house","the cambridge belfry","ashley hotel","the lensfield hotel","finches bed and breakfast","worth house","wandlebury coutn","allenbell","rosa's bed and breakfast","home from home","avalon","alpha-milton guest house","alexander bed and breakfast","cityroomz","limehouse","archway house","warkworth house","lovell lodge","aylesbray lodge guest house","carolina bed and breakfast","huntingdon marriott hotel","hobsons house","hamilton lodge","cambridge belfry","bridge guest house","gonville","acorn  house","city center north","express by","clare","acorn","north b and b","lensfield","city stop rest","kirkwood","levert","anatolia","huntingdon marriot hotel","cherr","huntingd","nusha","aylesbray lodge","royal spice","la margherit","the gall","city roomz","alexander", "caridge belfrey", "alexander bed & breakfast","the allenbell.","the allenbell","lensfield hotel","tandoori palace","huntingdon hotel","autumn house.","doubletree by hilton cambridge"]);
manager.addNamedEntityText('hotel-stars', 'hotel-stars',['en'], ['4 stars ', '2 stars', '1 star', '3 stars', '5 stars', '0 rating']);
manager.addNamedEntityText('hotel-book-stay', 'hotel-book-stay',['en'], ['1 night','2 nights','3 nights','4 nights','5 nights','6 nights','7 nights','8 nights','9 nights','1 day','2 days','3 days','4 days','5 days','6 days','7 days','8 days','9 days',]);
manager.addNamedEntityText('hotel-book-people', 'hotel-book-people',['en'], ['3 people','2 people','4 people', '5 people', '6 people', '7 people', '8 people', '9 people', 'three people','two people','four people', 'five people', 'six people', 'seven people', 'eight people', 'nine people']);
manager.addNamedEntityText('hotel-price-range', 'hotel-price-range',['en'], ['cheap place to stay','moderate','expensive','moderatly priced hotel ','moderate place to stay', 'expensive place to stay','moderatly priced guesthouse' ]);


/// restaurant
manager.addNamedEntityText('restaurant-book-people', 'restaurant-book-people',['en'], [ 'a table for 2',  'a table for 3',  'a table for 4',  'a table for 5',  'a table for 6',  'a table for 7',  'a table for 8',  'a table for 9', 'a table for two',  'a table for three',  'a table for four',  'a table for five',  'a table for six',  'a table for seven',  'a table for eight',  'a table for nine']);
manager.addNamedEntityText('restaurant-price-range', 'price-range',['en'], ['cheap place to dine', 'in the moderate price range', 'expensive', 'moderately priced']);
manager.addNamedEntityText('restaurant-name', 'restaurant-name',['en'], ["meze bar restaurant","pizza hut city centre","the good luck chinese food takeaway","caffe uno","the gardenia","the oak bistro","sala thong","thanh binh","riverside brasserie","cambri","pizza express","yippee noodle bar","curry prince","midsummer house restaurant","restaurant alimentum","nandos city centre","chiquito restaurant bar","maharajah tandoori restaurant","yu garden","bangkok city","copper kettle","backstreet bistro","the golden curry","don pasquale pizzeria","sesame restaurant and bar","charlie","the cow pizza kitchen and bar","india house","loch fyne","eraina","royal spice","prezzo","curry king","the nirala","curry garden","zizzi cambridge","da vinci pizzeria","jinling noodle bar","la raza","the river bar steakhouse and grill","pipasha restaurant","golden curry","saigon city","pizza express fen ditton","little seoul","meghna","saffron brasserie","j restaurant","la margherita","the lucky star","lan hong house","hotpot","the gandhi","cocum","golden house","la tasca","shanghai family restaurant","worth house","wagamama","galleria","travellers rest","mahal of cambridge","archway","molecular gastonomy","saint johns chop house","anatolia and efes restaurant","shiraz restaurant","nirala","cambridge chop house","bridge","lucky star","tang chinese","rice house","limehouse","clowns","restaurant","parkside pools","the dojo noodle bar","nusha","hobson house","curry queen","el shaddai","old school","gardenia","slug and lettuce","camboats","missing sock","grafton","cambridge lodge","fitzbillies","hamilton lodge","gastropub","funky","cow pizza","ashley","ros","hobso","kitchen and bar","pipasha","seasame restaurant and bar","the alex","one seven","shanghi family restaurant","cambridge be","margherita","adden","ian hong house"]);
manager.addNamedEntityText('restaurant-food', 'food',['en'], ['Spanish cuisine', 'Mediterranean restaurant', ' Turkish food', 'Indian food', 'indian restaurant', 'Indian restaurant', 'Turkish restaurant', 'aisian food', 'mexican food']);
manager.addNamedEntityText('restaurant-book-day', 'rastaurant-book-day',['en'], ['tuesday', 'friday', 'monday', 'wednesday', 'saturday', 'thursday', 'sunday', 'Tuesday', 'Friday', 'Monday', 'Wednesday', 'Saturday', 'Thursday', 'Sunday']);
manager.addNamedEntityText('restaurant-book-time', 'restaurant-book-time',['en'], ['at 14:45','at 10:30','at 18:45','at 13:30','at 15:00','at 11:45','at 12:00','at 15:15','at 16:45','at 15:45','at 19:30','at 14:00','at 10:45','at 17:30']);
manager.addNamedEntityText('restaurant-area', 'area',['en'], ['in the center', 'in Cambridge', 'near the centre of town', 'in the east part of town', 'near the airport', 'in the north', 'in the south ', 'in the east ', 'in the west ', 'in the north part of town', 'in the south part of town', 'in the east part of town','in the west part of town '     ]);

/// train
manager.addNamedEntityText('train-day', 'train-day',['en'], ['tuesday', 'friday', 'monday', 'wednesday', 'saturday', 'thursday', 'sunday', 'Tuesday', 'Friday', 'Monday', 'Wednesday', 'Saturday', 'Thursday', 'Sunday']);
manager.addNamedEntityText('train-destination', 'train-destination',['en'], ['to Bishops Stortford', 'to Leicester', 'to Cambridge','london kings cross','stansted airport','to stevenage','lecester','bishop stortford','to north','to willi','to curry prince','to bournemouth']);
manager.addNamedEntityText('train-departure', 'train-departure',['en'], ['from Cambridge', 'from Norwich', 'from London Kings Cross ', 'broxbourne', 'london liverpool street','from leicester','stansted airport','kings lynn','london kings cross','birmingham']);
manager.addNamedEntityText('train-leave-at', 'train-leave-at',['en'], ['after 15:30', 'at 17:29', 'after 21:00', 'after 20:45','at 21:17 ','at 15:15','at 16:45','at 15:45', 'at 19:30', 'at 14:00','at 10:45','at 17:30']);
manager.addNamedEntityText('train-arrive-by', 'train-arrive-by',['en'], ['by 18:00', 'by 22:35', 'at the booked time of 11:30.','by 03:15','arrive by 22:08']);
manager.addNamedEntityText('train-book-people', 'train-book-people',['en'], [ ' 1 ticket', '2 tickets','3 tickets','4 tickets','5 tickets','6 tickets','7 tickets','8 tickets','9 tickets']);


/// attraction



manager.addNamedEntityText('attraction-name', 'attraction-name',['en'], ['the corpus christi college', 'Corpus Christi College', 'Saint Mary s Church', 'the whipple museum', ' Saint Catharines College', ' Downing college', 'Kings College', 'the holy trinity church','The junction theatre', 'Little Saint Marys Church ', 'Wandlebury country park', 'riverboat georgin', 'byard art','soul tree nightclub', 'club salsa', 'cherry hinton hall and grounds', 'museum of archaelogy and anthropology','castle galleries', 'regency gallery','whipple museum of the history of science', ' churchill college','holy trinity church','cambridge artworks','cambridge arts theatre','scott polar museum','scudamores punting co','clare college','saint barnabas press gallery','cambridge and county folk museum','kettles yard']);
manager.addNamedEntityText('attraction-type', 'attraction-type',['en'], ['museum','architecture','colleges','in the type of college','swimming pool','college','theate' ,'multiple sports']);
manager.addNamedEntityText('attraction-area', 'attraction-area',['en'], ['the town centre', ' in the centre', 'in the east', 'on the south side of town','in the city centre','in the south']);

    
//manager.addNamedEntityText('food', 'pasta', ['en'], ['Pasta', 'spaghetti']);
const entity = manager.addNamedEntity('email', 'regex');
entity.addRegex('en', /\b(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})\b/gi);

var stdin = process.openStdin();
let content = '';

stdin.addListener('data', d => {
  content += d.toString();

  manager.findEntities(
    //'I saw spiderman eating speghetti in the city and his mail is spiderman@gmial.com',
    //'I am looking for a place to stay called autumn house in the east part of town',
    //Yes I am looking for architecture and will need the address, postcode and phone number of the attraction.
    content,
    'en',
  ).then(entities => console.log(entities));

});



