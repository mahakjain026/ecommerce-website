import algoliaSearch from 'algoliasearch';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
console.log("process.env.NEXT_PUBLIC_ALGOLIA_APP_ID","process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY",process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY)
const appId: string = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? '';
const apiKey: string = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY ?? ''
console.log("###########", appId, apiKey)
export const searchClient = algoliaSearch(
    appId,
    apiKey);
console.log(searchClient, "searchClient")