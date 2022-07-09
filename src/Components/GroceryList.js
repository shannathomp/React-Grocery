import GroceryItem from './GroceryItem'



const GroceryList = (props) => {
    return(
        <div>
 
        {props.grocer.map((theList, idx) => <GroceryItem grocerry={theList} key={idx}/>)}
       

        </div>
       
    )
}
export default GroceryList

