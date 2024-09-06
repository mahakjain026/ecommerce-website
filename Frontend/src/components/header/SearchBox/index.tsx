import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import  algoliasearch  from "algoliasearch";
import SearchIcon from "../../../../public/assets/search"
import AutoComplete from '../Autocomplete';
// import debounce from 'lodash.debounce';

const dotenv = require('dotenv');
const SearchBox = () => {

  dotenv.config({ path: '../.env' });
  const AppId = process.env.Algolia_ApplicationID
  const AppKey = process.env.Algolia_APIKey
  const [searchInput, setSearchInput] = useState('');
  const [productSearches, setProductSearches] = useState<any[]>([]);
  const [searchClient, setSearchClient] = useState<any>(null);
  const [recentSearches, setRecentSearches]: any = useState([]);
  const [matchedRecentSearches, setMatchedRecentSearches]: any = useState([]);
  const [openAutoComplete, setOpenAutoComplete]: any = useState(false);
  const [isDropdownVisible, setDropdownVisible]: any = useState(false);
  const [popularSearches, setPopularSearches]: any = useState([
    'Dresses',
    'Women',
    'New Balance',
    'Asics',
    'Skechers',
  ]);

  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleSearchChange = async (e: any) => {
    const searchQuery = e?.target?.value;
    if (searchQuery?.length) {
      if (searchQuery.length > 3) {
        setSearchInput(searchQuery);
        handleSearchAutoComplete(searchQuery)
      }
      else {
        setSearchInput('');
        setProductSearches([]);
      }
    } else {
      setSearchInput('');
      setProductSearches([]);
    }
  };

  const updateRecentSearches = (searchQuery: string) => {
    const updatedSearches = Array.from(new Set([searchQuery, ...recentSearches]));
    setRecentSearches(updatedSearches.slice(0, 5));
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches.slice(0, 5)));
  };

  const removeRecentSearch = (searchToRemove: string) => {
    const recentSearchesFromLocalStorage: string | null = localStorage.getItem('recentSearches');
    let recentList = recentSearches;
    if (recentSearchesFromLocalStorage) {
      recentList = JSON.parse(recentSearchesFromLocalStorage);
      const itemIndex = recentList.indexOf(searchToRemove);
      if (itemIndex !== -1) {
        recentList.splice(itemIndex, 1);
        setRecentSearches(recentList); // Update state
        localStorage.setItem('recentSearches', JSON.stringify(recentList)); // Update localStorage
      }
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput?.length >= 3) {
      router.push(`/search?q=${encodeURIComponent(searchInput)}`);
    }
  };


  useEffect(() => {
    if (!searchClient) {
      const client = algoliasearch('WQPTQU40BO', 'b1f1abd73ab9a8c8ca5a11fd57fb840a');
      const index = client.initIndex('Products');
      index.getSettings().then((result:any)=> console.log(result));
      
      setSearchClient(client);
    }
    const storedSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    setRecentSearches(storedSearches);
  }, [searchClient]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab' && isDropdownVisible && searchRef.current) {
        const focusableElements = searchRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        const lastFocusableElement = focusableElements[focusableElements.length - 1];
        if (document.activeElement === lastFocusableElement) {
          // If the focus is on the last focusable element inside the modal, close the modal
          setDropdownVisible(false);
        }
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDropdownVisible]);

  const handleSearchAutoComplete = async (searchQuery: string) => {
    const queries = [
      {
        query: searchQuery,
        params: {
          HitsPerPage: 5
        }
      }
    ]

    const responses = await searchClient?.search(queries);
    if (responses?.results[0]?.hits.length > 0) {
      updateRecentSearches(searchQuery);
      setProductSearches(responses?.results[0]?.hits);
      const filterRecentSearches = [...recentSearches].filter((recent: any) => recent.includes(searchQuery));
      setMatchedRecentSearches(filterRecentSearches);
    } else {
      setProductSearches([]);
    }
  }

  return (
    <section>
      <form method="get" onSubmit={handleSubmit} className='flex  p-1.5 bg-[#F5F5F6]' >
        <input className="bg-[#F5F5F6]"
          type="text"
          aria-label="search submit"
          autoComplete="off"
          onChange={handleSearchChange}
        ></input>
        <button
          aria-label="Search"
          type="submit"
          disabled={searchInput?.length === 0 || searchInput?.length < 3}
        >
          <SearchIcon />
        </button>
      </form>
      {isDropdownVisible && (
        <AutoComplete
          recentSearches={recentSearches}
          productSearches={productSearches}
          popularSearches={popularSearches}
          searchInput={searchInput}
          setMatchedRecentSearches={matchedRecentSearches}
          onRemoveRecentSearch={removeRecentSearch}
        />
      )}

    </section>
  )
};

export default SearchBox;





// import {
//   InstantSearch,
//   SearchBox,
//   Hits,
//   Highlight,
//   Configure,
//   HitsPerPage,
// } from "react-instantsearch-dom";


// const searchClient = algoliasearch(
//   "WQPTQU40BO",
//   "b1f1abd73ab9a8c8ca5a11fd57fb840a"
// );

// // interface HitP {
// //   name: string;
// //   description: string;
// //   price: string;
// //   quantity: string;
// //   category: string;
// //   imageUrl: string;
// // }

// // interface RecentSearchProps {
// //   hit: HitP;
// // }

// // const Hit = ({ hit }: RecentSearchProps) => (
// //   <div className="flex border-2">
// //     <p className="text-sm ">{hit.name}</p>
// //     <hr />
// //   </div>
// // );
// <InstantSearch searchClient={searchClient} indexName="Products">
//   <SearchBox
//       className='w-full gap-x-4 p-2 border border-gray-300 rounded'
//       translations={{
//         placeholder: 'Search for products...',
//       }}
//       debounce={300}
//     />
//   <Configure hitsPerPage={5} />
//   <Hits hitComponent={Hit}/>
// </InstantSearch>