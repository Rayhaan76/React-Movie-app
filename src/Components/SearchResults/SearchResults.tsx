import React, { ReactNode, useState, useEffect } from "react"

import {getComedyMovies} from '../Moviedb/Moviedb'

export const SearchResults = () => {
    
    const [allComedyMovies, setAllComedyMovies] = useState<any>([]);

    const loadData = async () => {
      const testing = await getComedyMovies();
      console.log(testing);
      setAllComedyMovies(testing);
      console.log(testing);
    }
    
    useEffect(() => {
        loadData();
    }, [])

    const [searchTerm, setSearchTerm] = useState('');
    const [toggle, setToggle] = useState<boolean>(false);

    const searchMovies = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        
    }

    const sortRating = () => {
        if(toggle === false) {
            const sorted = [...allComedyMovies].sort((a, b) => b.vote_average - a.vote_average);
            setAllComedyMovies(sorted);
            setToggle(true);
            console.log(toggle);
        } else if (toggle === true) {
            const sorted = [...allComedyMovies].sort((a, b) => a.vote_average - b.vote_average);
            setAllComedyMovies(sorted);
            setToggle(false);
            console.log(toggle);
        } 
    }

    console.log(allComedyMovies);

    // if (allComedyMovies.length === 0) {
    //     return (
    //         <div>
    //             loading
    //         </div>
    //     )
    // }

    return (
        <div>

            <input 
                type='text'
                placeholder="Search"
                onChange={searchMovies}
            />

            <button onClick={sortRating}> Sort by rating</button>

            <div>
                {allComedyMovies.length}
            </div>
            
            <div>
                {allComedyMovies.filter((movieList: { title: string; }) => {
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
        </div>
    )
}