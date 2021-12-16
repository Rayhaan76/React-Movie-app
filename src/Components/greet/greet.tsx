type FullListProps = {
    fullList: Object
}

export const Greet = (props: FullListProps) => {
    return (
        <div>
            <h2>hello</h2>
            {console.log(props.fullList)}
        </div>
    )
}

