import {
    AnimalScraper,
    LocationScraper,
    CharacterScraper,
    ItemScraper,
    GenericApi
} from 'erbs-wiki-api';

const animalScraper = new AnimalScraper();
const locationScraper = new LocationScraper();
const characterScraper = new CharacterScraper();
const genericApi = new GenericApi();
const ItemScraper = new ItemSCraper();

const methods = [
    animalScraper.getAll(), // gets all animals
    locationScraper.getAll(), // gets all locations
    characterScraper.getAll(), // gets all characters
    itemScraper.getItem('Milk'), // get all data for any item called "Milk"
    itemScraper.getWeapons(false), // gets all weapon types and abilities with only the names of every weapon option
    itemScraper.getArmors(true), // gets all armor types and categories with all the item information
    genericApi.getAllItems() // gets all the item information from the generic public api
];
  
const results = await Promise.all(methods);
console.log(results)