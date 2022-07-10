// import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
import GroceryList from './Components/GroceryList'
import groceryData from './Data/groceryData'
import Navbar from './Components/Navbar'
import Form from './Components/Form';

class App extends Component{
 
  state={
    groceryData: groceryData,
    groceryitem:'',
    grocerybrand: '',
    groceryunits: '',
    groceryquantity:''

 
  }
handleChange = (event) => {
  // console.log(event.target.value);
this.setState({[event.target.id] : event.target.value})
}

handleSubmit= (event) => {
event.preventDefault()

const newProduct = {
  item: this.state.groceryitem,
brand: this.state.grocerybrand,
units: this.state.groceryunits,
quantity: this.state.groceryquantity

}

this.setState({
  groceryData: [newProduct, ...this.state.groceryData],
groceryitem: '',
grocerybrand: '',
groceryunits: '',
groceryquantity:''
})
}

  render(){
    return(
    <div className='pre'>
      <div className='app'>
        <Navbar className='bar'/>

        <Form handleSubmit={this.handleSubmit} 
        handleChange={this.handleChange} 
        groceryitem={this.state.groceryitem} 
        grocerybrand={this.state.grocerybrand}
        groceryunits={this.state.groceryunits}
        groceryquantity={this.state.groceryquantity}/>

<h1>Groceries List</h1>
<GroceryList grocer={this.state.groceryData}/>
      </div>
      </div>
    )
  }

}

export default App;
