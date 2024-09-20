// "use client"
// import React from "react";
// import { ProductItem } from "./ProductItem";
// import { Hits, InstantSearch, useHits } from 'react-instantsearch';
// import { redirect } from "next/navigation";
// import {searchClient} from "../../../algolia/searchClient"

// export const Plp = () => {
//   const { items } = useHits();

//   if (items?.length === 1) {
//     redirect(`/product/${items[0].objectID}`);
//   }
//   console.log("searchClient",searchClient)

//   return (
//     <>
//       <InstantSearch searchClient={searchClient} indexName="your_index_name">
//         <ProductListingContent />
//       </InstantSearch>
//     </>
//   )
// }

// const ProductListingContent = () => {
//   <section>
//     <MainContentSection />
//   </section>
// }

// const MainContentSection = () => (
//   <main className="w-full">
//     <ProductGrid />
//   </main>
// );

// const ProductGrid = () => (
//   <section >
//     <Hits hitComponent={ProductItem} />
//   </section>
// );


"use client";
import React from "react";
import { ProductItem } from "./ProductItem";
import { Hits, InstantSearch, useHits } from 'react-instantsearch-hooks-web';
import { redirect } from "next/navigation";
import algoliaSearch from 'algoliasearch';
import { Header } from "../header/header";
import { Banner } from "../banner/banner";
// import { searchClient } from "../../../algolia/searchClient";

const searchClient = algoliaSearch("WQPTQU40BO", "b1f1abd73ab9a8c8ca5a11fd57fb840a")

export const Plp = () => {
  return (
    <section>
      <Banner />
      <section className="md-mx-32">
        <section className="w-full">
          <Header />
        </section>
        <hr className="my-8" />
      <InstantSearch searchClient={searchClient} indexName="Products">
        <ProductListingContent />
      </InstantSearch>
      </section>
    </section>
  );
};

const ProductListingContent = () => {
  const { hits } = useHits();

  if (hits?.length === 1) {
    redirect(`/product/${hits[0].objectID}`);
  }

  return (
    <section>
      <MainContentSection />
    </section>
  );
};

const MainContentSection = () => (
  <main className="w-full">
    <ProductGrid />
  </main>
);

const ProductGrid = () => (
  <section>
    <Hits hitComponent={ProductItem} className="plp" />
  </section>
);
