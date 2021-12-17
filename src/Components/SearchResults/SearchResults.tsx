import React, { useState } from "react"

type FullListProps = {
    fullList: {
        id: number
        title: string
        rating: number
    }[]
    setFullList: React.Dispatch<React.SetStateAction<{
        id: number;
        title: string;
        rating: number;
    }[]>>
}

export const SearchResults = (props: FullListProps) => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [toggle, setToggle] = useState<boolean>(false)


    const searchMovies = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
        
    }

    const sortRating = () => {
        if(toggle === false) {
            const sorted = [...props.fullList].sort((a, b) => b.rating - a.rating);
            props.setFullList(sorted);
            setToggle(true);
            console.log(toggle);
        } else if (toggle === true) {
            const sorted = [...props.fullList].sort((a, b) => a.rating - b.rating);
            props.setFullList(sorted);
            setToggle(false);
            console.log(toggle);
        } 
    }

    return (
        <div>

            <input 
                type='text'
                placeholder="Search"
                onChange={searchMovies}
            />

            <button onClick={sortRating}> Sort by rating</button>

            <div>
                {props.fullList.filter((movieList) => {
                    if (searchTerm === '') {
                        return movieList;
                    } else if (movieList.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return movieList
                    } 
                    return console.log('error')
                }).map((val, key) => {
                    return(
                        <p>ID: {val.id} TITLE: {val.title} RATING: {val.rating}</p>
                    )
                })}
            </div>
        </div>
    )
}