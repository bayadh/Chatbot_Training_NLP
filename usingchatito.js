const { NlpManager } = require('node-nlp');
//let data = fs.readFileSync('hotel.chatito');
//manager.load(data);
//print (data);
const manager = new NlpManager({ languages: ['en'] });
// Adds the utterances and intents for the NLP
    
    
manager.addDocument('en', 'The Alexander B&B', 'hotel.name');
manager.addDocument('en', 'The El Shadda', 'hotel.name');
manager.addDocument('en', 'The allenbell', 'hotel.name');
manager.addDocument('en', 'the gonville hotel', 'hotel.name');
manager.addDocument('en', 'city centre north b and b', 'hotel.name');
manager.addDocument('en', 'City Centre North B and B', 'hotel.name');
manager.addDocument('en', 'The Cambridge', 'hotel.name');
manager.addDocument('en', 'the Acorn', 'hotel.name');


manager.addDocument('en', 'guesthouse', 'hotel.type');
manager.addDocument('en', 'hotel', 'hotel.type');
manager.addDocument('en', 'Guest house ', 'hotel.type');

manager.addDocument('en', 'in the center', 'hotel.area');
manager.addDocument('en', 'near the centre of town', 'hotel.area');
manager.addDocument('en', 'in the east part of town', 'hotel.area');
manager.addDocument('en', 'near the airport', 'hotel.area');
manager.addDocument('en', 'in the east part of town', 'hotel.area');
manager.addDocument('en', 'in the west part of town ', 'hotel.area');
manager.addDocument('en', 'in the south part of town', 'hotel.area');
manager.addDocument('en', 'in the north part of town', 'hotel.area');
manager.addDocument('en', 'in cambridge ', 'hotel.area');


// Train also the NLG
manager.addAnswer('en', 'hotel.name', 'the gonville hotel');
manager.addAnswer('en', 'hotel.name', 'the Acorn');
manager.addAnswer('en', 'hotel.name', 'The Cambridge');
manager.addAnswer('en', 'hotel.type', 'hotel');
manager.addAnswer('en', 'hotel.type', 'guesthouse!');
manager.addAnswer('en',  'hotel.area', 'in the north part of town',);
manager.addAnswer('en',  'hotel.area', 'in cambridge ');
manager.addAnswer('en',  'hotel.area', 'in the east part of town');
manager.addAnswer('en', 'hotel.area', 'near the airport' );
// Train and save the model.
(async() => {
    await manager.train();
    manager.save();
    const response = await manager.process('en', 'I want to book a guesthouse near the airport');
    console.log(response);
})();