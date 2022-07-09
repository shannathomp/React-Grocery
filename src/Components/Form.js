const Form = () => {
    return(
        <form>
<label htmlFor="groceryitems">Grocery Item</label>
<input type='text' value={this.state.groceryitems} onChange={this.handleChange} id='groceryitems'/>
        </form>
    )
}

export default Form