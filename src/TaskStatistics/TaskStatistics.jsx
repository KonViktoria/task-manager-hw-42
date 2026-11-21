
export const TaskStatistics=({tasks})=>{
    return (   <>
           <p> Общее количество задач: {tasks.length}</p>
            <p>Kоличество выполненных задач: {tasks.filter(task=>task.completed === true).length}</p>

        </>

    )
}
