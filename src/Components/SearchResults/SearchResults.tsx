import React, { ReactNode, useState, useEffect } from "react"

import {getComedyMovies} from '../Moviedb/Moviedb'

type MovieProps = {
    movies: any
    setMovies: any
}

export const SearchResults = (props: MovieProps) => {
    
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
            const sorted = [...props.movies].sort((a, b) => b.vote_average - a.vote_average);
            props.setMovies(sorted);
            setToggle(true);
            console.log(toggle);
        } else if (toggle === true) {
            const sorted = [...props.movies].sort((a, b) => a.vote_average - b.vote_average);
            props.setMovies(sorted);
            setToggle(false);
            console.log(toggle);
        } 
    }

    console.log(props.movies);

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
                {/* {props.movies[1].title} */}
            </div>
            
            <div>
                {props.movies.filter((movieList: { title: string; }) => {
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