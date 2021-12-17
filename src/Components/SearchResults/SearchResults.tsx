
type FullListProps = {
    fullList: {
        id: number
        title: string
        rating: number
    }[]
}

export const FullList = (props: FullListProps) => {
    

    return (
        <div>
            {props.fullList.map(movie => {
                return(
                    <p>id: {movie.id} Title: {movie.title} Rating: {movie.rating}</p>
                )
            })}
        </div>
    )
}