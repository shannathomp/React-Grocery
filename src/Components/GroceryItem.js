const GroceryItem = (props) => {
    const {item,brand,units,quantity}= props.grocerry
    return(
        <div>
    <h4>{item}</h4>
        <p>{brand}</p>
        <p>{units}</p>
        <p>{quantity}</p>
        <p>Purchased: false</p>

        </div>
    

    )
}

export default GroceryItem