# Generating Training Data and Developing a Virtual Assistant for Tourism
The goal of this project is to generate  a reference corpus related to the Tourism domain for training NLU engines using the [MultiWOZ 2.0](http://dialogue.mi.eng.cam.ac.uk/index.php/corpus/) dataset. <br />
The detailed [report](https://www.overleaf.com/read/nykmttgstkvs) for this project.

## Structure of this project:

#### Notebooks
This folder contains: 
* Read_MultiOwz_data: Allows to read the [MultiWOZ 2.0](http://dialogue.mi.eng.cam.ac.uk/index.php/corpus/) dataset
* NER_NLTK_Multiwoz: Recognizing default entities in our dataset using NLTK and writing the obtained results into Chatito format
* NER_Spacy_Multiwoz: Recognizing default entities in our dataset using default model in spaCy and writing the obtained results into Chatito and Chatette formats
* Custom_NER_Spacy: Customizing the model to recognize our own entities present in the dataset by adding the labels and training the model. We then tested and evaluated the model. The results are writting into chatito and chatette formats 
* Custom_NER_Spacy_v2: This is the updated version of Custom_NER_Spacy (fixing errors)

#### Trained model:
This folder contains the trained model. We customized to recognize entities present in our dataset. 

#### Results:
This folder contains the results we obtained throught out the experiments:
###### *Using NLTK. <br />
![picture](/Results/ScreenShots/using_NLTK.png?raw=true "Identifying locations")

###### *Using default model in spaCy. <br />
![Alt text](/Results/ScreenShots/using_spacy3.png?raw=true "Identifying default entities")
The highlited words represent the identified entities by the default model which are then generated into Chatito/Chatette files <br />
![Alt text](/Results/ScreenShots/chatito_spacy2.png?raw=true "Chatito version")<br />
![Alt text](/Results/ScreenShots/chatette_spacy2.png?raw=true "Chatette version")<br />


###### *Using custom spaCy. <br />
These are the results given by our model after training
![Alt text](/Results/ScreenShots/custom_spacy3.png?raw=true "Custom_spaCy")<br />

#### Chatito_files:
Contains the chatito files used to generate the final dataset.



#### Generated_dataset:
Contains the generated training and test sets.


