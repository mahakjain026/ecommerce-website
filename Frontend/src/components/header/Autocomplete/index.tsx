import Link from 'next/link';
import CrossIcon from "../../../../public/assets/cross";

interface Props {
    recentSearches: any;
    productSearches: any;
    popularSearches: any;
    searchInput: string;
    setMatchedRecentSearches: any;
    onRemoveRecentSearch: (searchToRemove: string) => void;
}

const AutoCompleteComponent: React.FC<Props> = ({
    recentSearches,
    productSearches,
    popularSearches,
    searchInput,
    setMatchedRecentSearches,
    onRemoveRecentSearch,
}) => {
    const handleRemoveRecentSearch = (event: any, searchToRemove: string, index: number) => {
        event.preventDefault();
        onRemoveRecentSearch(searchToRemove);
    };
    console.log("productSearches", productSearches)
    return (
        <div className="relative z-30 mr-4 w-full md:mr-0 md:w-full lg:mr-0">
            <div
                className={
                    'absolute top-full max-h-[430px] w-full overflow-y-auto border-x border-b border-foggyGray bg-white shadow-md'
                }
            >
                {searchInput ? (
                    setMatchedRecentSearches?.length ? (
                        <>
                            <p>recent searches</p>
                            <ul>{
                                setMatchedRecentSearches?.map((searches: any, index: any) => {
                                    return (
                                        <li>
                                            <Link
                                                href={`/search?q=${encodeURIComponent(searches)}`}
                                                className="flex items-center justify-between p-2">
                                                {searches}
                                            </Link>
                                            <button type="button" onClick={(event) => handleRemoveRecentSearch(event, searches, index)}>
                                                <CrossIcon />
                                            </button>
                                        </li>
                                    );
                                })
                            }</ul>
                        </>
                    ) : (
                        ''
                    )
                ) : recentSearches?.length ? (
                    <ul className="m-2.5">
                        {recentSearches?.map((searches: any, index: any) => {
                            return (
                                <li key={index} className="flex justify-between">
                                    <Link
                                        href={`/search?q=${encodeURIComponent(searches)}`}
                                        className="flex items-center justify-between p-2"
                                    >
                                        <div className="flex items-center gap-2">
                                            {searches}
                                        </div>
                                    </Link>
                                    <button type="button" onClick={(event) => handleRemoveRecentSearch(event, searches, index)}>
                                        <CrossIcon />
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    ''
                )}

                {searchInput.length >= 3 && productSearches?.length ? (
                    <ul className="m-2.5">
                        {productSearches?.map((product: any, index: any) => {
                            console.log("index",index);
                            return (
                                <li key={product?.objectID + index}>
                                    <Link href={`/product/${product.slug}/${product._id}`} className="flex items-center gap-2 p-2">
                                        {product?.displayName}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                ) : searchInput.length >= 3 ? (
                    <div className="mx-2.5 mt-4">
                        <p className="mb-5">Sorry, there are no results for “{searchInput}”</p>
                        <p className="mb-7">Please check spelling, try a more general search, or use fewer keywords.</p>
                    </div>
                ) : (
                    ''
                )}

                {popularSearches?.length ? (
                    <>
                        <p className="m-3 mt-0 pt-2 font-medium text-grayDark">Popular Searches</p>
                        <div className="m-2 flex flex-wrap gap-2.5">
                            {popularSearches?.map((popular: any, index: any) => {
                                return (
                                    <div key={index} className="flex gap-1.5 rounded-md border border-foggyGray p-2">
                                        <Link href={`/search?q=${encodeURIComponent(popular)}`}>{popular}</Link>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                ) : (
                    '4'
                )}
            </div>
        </div >
    )
}

export default AutoCompleteComponent