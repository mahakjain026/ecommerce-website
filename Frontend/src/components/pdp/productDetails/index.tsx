"use client"
import React from 'react';
import { HitProps } from '@/components/types/index';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export const ProductDetails = ({ hit }: HitProps) => {
  const params = useParams();
  const id = params.productId;

  return (
    <>
      {
        hit.objectID === id &&
        <main className="flex gap-4 py-6 md:flex-col md:gap-0 md:py-0">
          <ProductImageSection
            hit={hit}
          />
          <ProductDetailsSection
            hit={hit}
          />
        </main>
      }
    </>
  )
}

const ProductImageSection = ({
  hit
}: {
  hit: HitProps['hit']
}) => {
  console.log("hit.objectID", hit.objectID);

  return (
    <Link href={`/PLP/${hit.objectID}`}>
      <Image
        loader={({ src }) => src}
        src={hit?.imageUrl}
        alt={hit?.name}
        width={332}
        height={332}
        className={'w-40 sm:w-48 md:w-full md:h-96 sm:h-48'}
      />
    </Link>)
}

const ProductDetailsSection = ({
  hit
}: {
  hit: HitProps['hit']
}) => {
  console.log("hit.objectID", hit.objectID);
  return (
    <section className="md:my-3">
      <section className={'flex flex-col'}>
        <Link href={`/PLP/${hit?.objectID}`}>
          <b className="min-h-10 mt-3 line-clamp-2 break-words text-xl font-large leading-[21px] text-black">
            {hit?.name}
          </b>
          <p className="min-h-10 line-clamp-2 break-words text-base font-large leading-[21px] text-black">{hit?.description}</p>
        </Link>
      </section>
      <PriceSection hit={hit} />
      {/* {productToWishlistLineItem && (
        <>
          <section className="my-3 flex items-center gap-1">
            <Rating />
            (14)
          </section>
          <AddToCartButton hit={hit} />
        </>
      )} */}
    </section>
  )
}

const PriceSection = ({
  hit
}: {
  hit: HitProps['hit']
}) => {
  return (
    <div className="mt-3 min-h-[50px]">
      {hit?.price ? (
        <p className="break-words text-sm font-normal text-[#666666]">
          <strong className="break-words pr-2 text-base font-extrabold ">
            ${hit?.price}
          </strong>
          {hit?.discountedPrice ? (
            <em className="break-words not-italic line-through">
              ${hit?.discountedPrice}
            </em>
          ) : null}
        </p>
      ) : (
        <></>
      )}
    </div>
  )
}
