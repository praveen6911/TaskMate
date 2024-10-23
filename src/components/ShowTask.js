export const ShowTask = ({tasklist,settasklist,task,settask}) => {
    /* const tasks = [
        {
            id: 1,
            name: "Task 1",
            time: new Date().toLocaleTimeString()
        },
        {
            id: 2,
            name: "Task 2",
            time: new Date().toLocaleTimeString()
        },
        {
            id: 3,
            name: "Task 3",
            time: new Date().toLocaleTimeString()
        }
    ] */

        const handleClearAll = () => {
            settasklist([]);  // Clear all tasks
        }

        const handleEdittask = (id) => {
            const selectedtask = tasklist.find((task) => task.id === id);
            settask(selectedtask);
            }

        const handleDeletetask = (id) => {
            const newTask = tasklist.filter((task) => task.id !== id);
            settasklist(newTask);
        }
    
    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Tasks</span>
                    <span className="count">{tasklist.length}</span>
                </div>
                <button  className="clearAll"  onClick={handleClearAll}>clear All</button>
            </div>

            <ul>
                {tasklist.length > 0 && tasklist.map((task) =>(
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>
                        <i onClick={()=>handleEdittask(task.id)} className="bi bi-pencil-square"></i>
                        <i onClick={()=>handleDeletetask(task.id)} className="bi bi-trash"></i>
                    </li>
                ))
                }
                {/* <li>
                    <p>
                        <span className="name">Task 1</span>
                        <span className="time">{new Date().toLocaleTimeString()}</span>
                    </p>
                    <i className="bi bi-pencil-square"></i>
                    <i className="bi bi-trash"></i>
                </li> */}

            </ul>
        </section>
    )
}