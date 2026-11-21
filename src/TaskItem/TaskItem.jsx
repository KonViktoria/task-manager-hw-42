export const TaskItem = ({task,toggleTasks,deleteTask}) => {
    return <>

    <li>
    <p>{task.title}</p>
    <p>{task.completed ? "Yes" : "No"}</p>
     
        <button onClick={()=>toggleTasks(task.id)}>Toggle</button>
        <button onClick={()=>deleteTask(task.id)}>Delete</button>
    </li>
         
        </>
}
