const Form = (props) => {
    return(

        <form onSubmit={props.handleSubmit}>
        <label htmlFor='groceryitem'>Grocery Item</label>
<input type="text" value={props.groceryitem} onChange={props.handleChange} id='groceryitem'/>

<label htmlFor="grocerybrand"> Brand </label>
<input type='text' value={props.grocerybrand} onChange={props.handleChange} id={'grocerybrand'}/>

<label htmlFor='groceryunits'> units</label>
<input type='text' value={props.groceryunits} onChange={props.handleChange} id={'groceryunits'}/>

<label htmlFor='groceryquantity'> Quantity </label>
<input type='text' value={props.groceryquantity} onChange={props.handleChange} id={'groceryquantity'}/>

<input type='submit' />
      </form>
    
    )
}

export default Form