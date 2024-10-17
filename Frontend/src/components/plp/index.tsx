"use client";
import React from "react";
import { ProductItem } from "./ProductItem";
import { Hits, InstantSearch, useHits } from 'react-instantsearch-hooks-web';
import { redirect } from "next/navigation";
import algoliaSearch from 'algoliasearch';
import { Header } from "../header";
import { Banner } from "../banner/banner";
import { searchClient } from "../../../algolia/searchClient";
import { log } from "console";

// const searchClient = algoliaSearch("WQPTQU40BO", "b1f1abd73ab9a8c8ca5a11fd57fb840a")

export const Plp = () => {
  console.log("########searchClient",searchClient);
  
  return (
    <section>
      <Banner />
      <section>
        <section className="w-full mb-6">
          <Header />
        </section>
        <section className="md:mx-32">
          <InstantSearch searchClient={searchClient} indexName="Products">
            <ProductListingContent />
          </InstantSearch>
        </section>
      </section>
    </section>
  );
};

const ProductListingContent = () => {
  const { hits } = useHits();
  if (hits?.length === 1) {
    redirect(`/PLP/${hits[0].objectID}`);
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
