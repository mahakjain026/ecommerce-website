import algoliaSearch from 'algoliasearch';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });


export const searchClient = algoliaSearch(
    process.env.Algolia_ApplicationID as string,
    process.env.Algolia_APIKey as string,
);
console.log(searchClient,"searchClient")