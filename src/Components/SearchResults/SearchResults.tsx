import React, { ReactNode, useState } from "react"


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
    allComedyMovies: any
    setAllComedyMovies: any
}

export const SearchResults = (props: FullListProps) => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [toggle, setToggle] = useState<boolean>(false);

    const searchMovies = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        
    }

    const sortRating = () => {
        if(toggle === false) {
            const sorted = [...props.allComedyMovies].sort((a, b) => b.vote_average - a.vote_average);
            props.setAllComedyMovies(sorted);
            setToggle(true);
            console.log(toggle);
        } else if (toggle === true) {
            const sorted = [...props.allComedyMovies].sort((a, b) => a.vote_average - b.vote_average);
            props.setAllComedyMovies(sorted);
            setToggle(false);
            console.log(toggle);
        } 
    }

    console.log(props.allComedyMovies);

    return (
        <div>

            <input 
                type='text'
                placeholder="Search"
                onChange={searchMovies}
            />

            <button onClick={sortRating}> Sort by rating</button>

            <div>
                {props.allComedyMovies.filter((movieList: { title: string; }) => {
                    if (searchTerm === '') {
                        return movieList;
                    } else if (movieList.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return movieList
                    } 
                    return console.log('no filter');
                }).map((val: {title: string; vote_average: number}, key: number) => {
                    return(
                        <p>TITLE: {val.title} RATING: {val.vote_average}</p>
                    )
                })}
            </div>
            <div>
                {/* <h3>{props.fullList[1]}</h3> */}
            </div>
        </div>
    )
}