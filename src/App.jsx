import {Header}  from '../src/Header/Header.jsx'
import {Footer}  from '../src/Footer/Footer.jsx'
import './App.css'
import {useState} from "react";
import{TaskList} from "../src/TaskList/TaskList.jsx"
 import {initialTasks} from './servises/getInitialTask.js'
import {TaskItem} from "./TaskItem/TaskItem.jsx";
import {TaskStatistics} from "./TaskStatistics/TaskStatistics.jsx";


function App() {
const [tasks, setTasks]=useState(initialTasks)
     const  newTask={
         id: crypto.randomUUID(),
         title: "Learn JavaScript",
         completed: true
     }
    function toggleTasks(id) {
        setTasks(prevState => prevState.map(task =>
            task.id === id ?
                { ...task, completed: !task.completed } : task))
    }
    function deleteTask(id) {
        setTasks(prevState => prevState.filter(task => task.id !== id)
        )
    }
     function addNewTask(){
         const  newTask={
             id: crypto.randomUUID(),
             title: "Learn JavaScript",
             completed: false
         }
         setTasks(prevState => [...prevState, newTask])
     }
     function clearAllTasks(){
    setTasks([])
     }

    function deleteAllTasksTrue(){
    setTasks(prevState => prevState.filter(task => task.completed == false))
    }

  return <><Header/>
        <TaskStatistics tasks={tasks}/>
     <TaskList tasks={tasks}
               toggleTasks={toggleTasks}
               deleteTask={deleteTask}
     />
      <button onClick={addNewTask}>Add</button>
      <button onClick={clearAllTasks}>Clear All Tasks</button>
      <button onClick={deleteAllTasksTrue}> Clear All Tasks True</button>
     


  <Footer/>

 </>
}

export default App
