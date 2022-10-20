/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
import "./App.css";
import React,{useState} from "react"

function App() {


  //react hooks use state
  const [newItem,setNewItem]=useState("")
  const [items,setItems]=useState([])


    //helper functions
    function addItem(){
      if(!newItem){
        alert("enter an item")
        return;
      }

      const item= {
        id:Math.floor(Math.random() * 1000),
        value:newItem
      };
      setItems(oldList=>[...oldList,item]);
      setNewItem("");

    }

    function deleteItem(id){
        const newArray = items.filter(item=>item.id !==id);
        setItems(newArray);
    }

  return (
    <div className="App">
      {/* 1.header */}
      <h1>Todo-List App</h1>

      {/* 2.input  */}
      <input type="text" 
      placeholder="add an item"
       value={newItem} 
       onChange={e=>setNewItem(e.target.value)}
       />

      <button onClick={()=>addItem()}>Add</button>

      {/* 3.list of items */}
    <ul>
      {items.map(item=>{
        return(
          <li key={item.id}>{item.value} <button onClick={()=>deleteItem(item.id)}>X</button></li>
        )
      })}
    </ul>

    </div>
  );
}

export default App;
