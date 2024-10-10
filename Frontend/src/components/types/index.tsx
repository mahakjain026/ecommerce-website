import { BaseHit, Hit } from 'instantsearch.js';
export interface AlgoliaProductTypes extends BaseHit {
    objectID: string;
    name: string;
    description: string;
    price: string;
    quantity: string;
    category: string;
    imageUrl: string;
}

export type HitProps = {
    hit: Hit<AlgoliaProductTypes>;
};

export interface ProductDetailsSectionProps {
    hit: HitProps['hit'];
}