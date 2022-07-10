import GroceryItem from './GroceryItem'



const GroceryList = (props) => {
    return(
        <div className='glist'>
 
        {/* {props.grocer.map((theList, idx) => <GroceryItem grocerry={theList} key={idx}/>)} */}
       
{
    props.grocer.map((groc,idx) => !groc.purchased ? <GroceryItem grocerry={groc} key={idx} /> : <h3 key={idx}> {groc.item} already in cart!</h3>)
}


        </div>
       
    )
}
export default GroceryList
