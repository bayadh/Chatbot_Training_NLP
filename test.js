const { NlpManager } = require('node-nlp');
const fs = require('fs');

let data = fs.readFileSync('training_dataset_1579048294.json');
const manager = new NlpManager({ languages: ['en'] });
manager.load(data);


// Train and save the model.
(async() => {
    await manager.train();
    manager.save();
    const response = await manager.process('en', 'I should go now');
    console.log(response);
})();