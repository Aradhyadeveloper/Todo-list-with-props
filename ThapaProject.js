//ISKI SECOND FILE TODOLIST HAI PASS DATA AS A PROPS,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

import React,{useState} from 'react'
import './App.css'
import TodoList from './TodoList'
const ThapaProject = () => {
  const[inputList,setInputList] = useState('')
  const[Items,setItems] = useState([])
  function itemEvent(e){
    setInputList(e.target.value)
  }

  function listOfItems(){
      setItems((oldItems)=>{
        return[...oldItems,inputList];
      })
      setInputList("")
  }

  const deleteItem=(id)=>{
    console.log("delete")

    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !==id;
      })
    })
  }

  return (
    <div className="main_div">
      <div className="center_div">
        <h1>To Do List</h1>
        <br/>
        <input type="text" placeholder = "Add a Items" onChange={itemEvent} value={inputList }/>
        <button onClick={listOfItems}> + </button>

     <ol>
       

          {Items.map((itemval,index)=>{

        return <TodoList key={index} id={index} text={itemval} onSelect={deleteItem}/>
             
            
          })}
      
        </ol>
      </div>

    </div>
  )
}

export default ThapaProject