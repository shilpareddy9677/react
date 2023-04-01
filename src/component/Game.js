import { useState } from "react";
import { Card } from "./Card";
import '../App.css';

export const Game = () => {
  const [items,setItems]=useState(
    [
      {id: 1, value: "image10.png", state:""},
      {id: 1, value: "image10.png", state:""},
      {id: 2, value: "image11.png", state:""},
      {id: 2, value: "image11.png", state:""},
      {id: 3, value: "image12.png", state:""},
      {id: 3, value: "image12.png", state:""},
      {id: 4, value: "image13.png", state:""},
      {id: 4, value: "image13.png", state:""},
      {id: 5, value: "image14.png", state:""},
      {id: 5, value: "image14.png", state:""},
      {id: 6, value: "image15.png", state:""},
      {id: 6, value: "image15.png", state:""},
      {id: 7, value: "image16.png", state:""},
      {id: 7, value: "image16.png", state:""},
      {id: 8, value: "image17.png", state:""},
      {id: 8, value: "image17.png", state:""},
    ].sort(()=>Math.random()-0.5))

    
    const [prev, setPrev]=useState(-1)
    const [count,setCount]=useState(0)

    function check(current){
      if((items[current].id===items[prev].id) && (current!==prev)){
        items[current].state="correct";
        items[prev].state="correct";
        setPrev(-1);
        setCount(count=>count+1);
      }
      else{
        items[current].state="wrong"
        items[prev].state="wrong"
        setItems([...items])
        setCount(count=>count+1);
        setTimeout(()=>{
          items[current].state=""
          items[prev].state=""
          setItems([...items])
          setPrev(-1)
        },300)
      }
    }

    function handleClick(id){
     /* items[id].state="active";
      setItems([...items])*/
      if(prev===-1 && items[id].state!=="correct"){
        items[id].state="active"
        setItems([...items])
        setPrev(id);
      }
      else{
        check(id)
      }
    }

    function Reset(){
      setPrev(-1);
      setCount(0);
      items.map((it)=>it.state="");
      items.sort(()=>Math.random()-0.5)
    }
  return (
    <>
    <div className="container">
    { items.map((item, index)=>(
      <Card item={item} 
      key={index}
      id={index}
      handleClick={handleClick}
      />
     ))}
    </div>
    <div class="end">
      <h3>Total Score : {count}</h3>
      <button onClick={Reset}>Reset</button>
     </div>
    
    </>
  )
}

