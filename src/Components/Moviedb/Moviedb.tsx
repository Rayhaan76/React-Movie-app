
export const getComedyMovies = () => fetch('https://api.themoviedb.org/3/discover/movie?api_key=30681930d9f8a4d49ec75249be9647a1&with_genres=35&page=1')
    .then(result => result.json())
    .then(resp => {
        let array: any[]= [];
        array.push(...resp.results);
        console.log(array);
        //return array;
        return array;
    });

export const getComedyMovies2 = async (): Promise<any>  => {
    
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=30681930d9f8a4d49ec75249be9647a1&with_genres=35&page=1')
        .then(result => result.json())
        .then(resp => {
            return resp.results;
        });

}

// export const getComedyMovies3 = async () => {

//     let array42: any[] = [];

//     await getComedyMovies2(array42);

//     console.log(array42);

//     return array42;


// }