
// export const getData = async () => fetch('https://api.themoviedb.org/3/discover/movie?api_key=30681930d9f8a4d49ec75249be9647a1&with_genres=35')
//     .then(result => result.json());


export const getComedyMovies = async () => fetch('https://api.themoviedb.org/3/discover/movie?api_key=30681930d9f8a4d49ec75249be9647a1&with_genres=35')
    .then(result => result.json())
    .then(resp => {
        //console.log(resp.results)
        return resp.results});
