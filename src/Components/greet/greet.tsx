type FullListProps = {
    fullList: any
}



export const Greet = (props: FullListProps) => {
    const name = props.fullList.id;

    return (
        <div>
            <h2>hello {props.fullList[1].title}</h2>
            {console.log(props.fullList)}
        </div>
    )
}

