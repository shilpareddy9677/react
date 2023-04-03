
export const AddTask = ({tasklist,setTasklist,task,setTask}) => {

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(task.id){
            const date=new Date();
            const updatedTasklist=tasklist.map((todo)=>(
                todo.id===task.id ? {
                    id:task.id,
                    name:e.target.task.value,
                    time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}:
                    {id:todo.id,name:todo.name,time:todo.time}
            ))
            setTasklist(updatedTasklist);
            setTask({})
        }
        else
        {
        const date = new Date();
        
         const newTask={
            id: date.getTime(),
            name:e.target.task.value,
            time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
        setTasklist([...tasklist,newTask]);
        setTask({})
    }
    }

  return (
   <section className="addTask">
    <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="add task" value={task.name || ""} onChange={e=>setTask({...task,name:e.target.value})} autoComplete="off" maxLength="25"/>
        <button type="submit">{task.id ? "update":"Add"}</button>
    </form>
   </section>
  )
}


