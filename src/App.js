// import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
import GroceryList from './Components/GroceryList'
import groceryData from './Data/groceryData'
import Navbar from './Components/Navbar'
// import Form from './Components/Form';

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

  render(){
    return(
      <div className='app'>
        <Navbar className='bar'/>
        <form>
          <label htmlFor='groceryitem'>Grocery Item</label>
  <input type="text" groceryitem={this.state.groceryitem} onChange={this.handleChange} id='groceryitem'/>
        </form>
      
     
        {/* <Form /> */}
<h1>Groceries List</h1>
<GroceryList grocer={this.state.groceryData}/>
      </div>
      
    )
  }

}

export default App;
