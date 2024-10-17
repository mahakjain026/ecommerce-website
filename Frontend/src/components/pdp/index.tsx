'use client'
import React from "react";
import {Header} from "../header"
import { Banner } from "../banner/banner";
import { Hits ,InstantSearch } from 'react-instantsearch-hooks-web';
import algoliaSearch from 'algoliasearch';
import { ProductDetails } from "./productDetails/index";
import { useParams } from 'next/navigation';

const searchClient = algoliaSearch("WQPTQU40BO", "b1f1abd73ab9a8c8ca5a11fd57fb840a")

export const Pdp=()=>{
    const params = useParams(); 
    const id: any = params.productId;
    console.log("####PDP id----------",id);
    
    return(
        <>
            <section>
                <Banner/>
            </section>
            <section>
                <Header />
            </section>
            <section>
                <section>
                <InstantSearch searchClient={searchClient} indexName="Products">
                    <Hits hitComponent={ProductDetails} id={id} />
                </InstantSearch>
                </section>  
            </section>
        </>
    )
}
