import {TaskItem} from "/src/TaskItem/TaskItem.jsx"

export const TaskList=({tasks,toggleTasks, deleteTask})=> {

    return <>
        {tasks.length === 0
            ? <p>Список задач пуст</p>
            : (
       <ul>
       {tasks.map((task) => (
           <TaskItem key = {task.id}
                     task = {task}
                     toggleTasks={toggleTasks}
                     deleteTask={deleteTask}/>

       ))}</ul>)}
    </>

}
