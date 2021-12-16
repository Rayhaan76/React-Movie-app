import React, {FC} from "react"

import './SearchResults.css'

type FullList = {
    id: number,
    title: string,
    rating: number
}

interface FullListProps {
    movie: FullList,
}

const SearchResults = (props: FullList) => {
    return (
        <div className="SearchResults">
            Results
            {}
        </div>
    )
}

export default SearchResults;