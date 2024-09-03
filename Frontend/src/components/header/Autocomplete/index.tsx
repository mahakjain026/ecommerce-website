import Link from 'next/link';

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
    return (
        <section>
            {/* <div>
                {searchInput ? (
                    setMatchedRecentSearches?.length ? (
                        <>
                            <p>recent search</p>
                        </>
                    ))
                }
            </div> */}
            <p>helloo</p>
        </section>
    )
}

export default AutoCompleteComponent