// import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
import GroceryList from './Components/GroceryList'
import groceryData from './Data/groceryData'
import Navbar from './Components/Navbar'

class App extends Component{
  state={
    items: ''
  }
  render(){
    return(
      <div className='app'>
        <Navbar className='bar'/>
<h1>Groceries List</h1>
<GroceryList grocer={groceryData}/>
      </div>
      
    )
  }

}

export default App;
