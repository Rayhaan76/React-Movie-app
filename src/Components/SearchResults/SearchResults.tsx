import React, { useState } from "react"

import './SearchResults.css'

type MovieProps = {
    movies: any
    setMovies: any
    unsorted: any
}

export const SearchResults = (props: MovieProps) => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [toggle, setToggle] = useState<boolean | undefined>(undefined);

    const searchMovies = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        
    }

    const sortRating = () => {
        if(toggle === undefined) {
            const sorted = [...props.movies].sort((a, b) => b.vote_average - a.vote_average);
            props.setMovies(sorted);
            setToggle(true);
        } else if (toggle === true) {
            const sorted = [...props.movies].sort((a, b) => a.vote_average - b.vote_average);
            props.setMovies(sorted);
            setToggle(false);
        } else if (toggle === false) {
            props.setMovies(props.unsorted);
            setToggle(undefined);
        }
    }
    //console.log(toggle);
    //console.log(props.movies);

    let button;

    if(toggle === undefined) {
        button = <span>Sort Rating</span>
    } else if (toggle === true) {
        button = <span>Sort Rating: Asc</span>
    } else if (toggle === false) {
        button = <span>Sort Rating: Desc</span>
    }

    return (
        <div>
            <div className="Search-sort-header">
                <input 
                    type='text'
                    placeholder="Search..."
                    onChange={searchMovies}
                    className="Search-input"
                />

                <button className="Sort-button" onClick={sortRating}>{button}</button>
            </div>

            <div className="List-container">
                <table className="Movie-table">
                    <tbody>
                    <tr>
                        <th className="Image-header"></th>
                        <th className="Title-header">Title</th>
                        <th className="Rating-header" onClick={sortRating}>Rating</th>
                    </tr>

                    {props.movies.filter((movieList: { title: string; }) => {
                        if (searchTerm === '') {
                            return movieList;
                        } else if (movieList.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return movieList
                        } 
                        return console.log('no filter');
                    }).map((val: {id: number; title: string; poster_path: string;vote_average: number}, key: number) => {
                        return(
                            <tr key={val.id}>
                                <td className="Image-data"><img alt="Movie poster" src={`https://image.tmdb.org/t/p/w92/${val.poster_path}`}/></td>
                                <td className="Title-data" key={val.title}>{val.title}</td>
                                <td className="Rating-data" key={val.vote_average}>{val.vote_average}</td>
                            </tr>
                        )
                    })}
                    </tbody>        
                </table>
            </div>
        </div>
    )
}