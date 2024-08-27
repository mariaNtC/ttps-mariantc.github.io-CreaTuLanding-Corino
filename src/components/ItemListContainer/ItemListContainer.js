const ItemListContainer = ({greeting, color}) => {
    return (
        <div>
            <h1 style={{color: color}}>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer