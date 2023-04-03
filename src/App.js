import "./App.css";
import { Header } from "./component/Header";
import { ShowTask } from "./component/ShowTask";
import { AddTask } from "./component/AddTask";
import { useEffect, useState } from "react";


export const App = () => {

    const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem('tasklist')) || [])
  const [task,setTask]=useState('');

  useEffect(()=>{
    localStorage.setItem('tasklist',JSON.stringify(tasklist))
  },[tasklist]);

  return (
    <div className="App container">
      <Header/>
      <AddTask 
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask  
        tasklist={tasklist} 
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  )
}


