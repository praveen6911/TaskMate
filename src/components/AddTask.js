export const AddTask = ({ tasklist, settasklist, task, settask }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (task.id) {
            const date = new Date();
            const updatedTasklist = tasklist.map((t) => (
                t.id === task.id 
                    ? { ...t, name: e.target[0].value, time: `${date.toLocaleTimeString()} ,${date.toLocaleDateString()}` } 
                    : t
            ));
            settasklist(updatedTasklist);
            settask({}); 
            e.target[0].value = ""; 
        } else {
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: e.target[0].value,
                time: `${date.toLocaleTimeString()} ,${date.toLocaleDateString()}`
            };
            settasklist([...tasklist, newTask]);
        }
        settask({});
        e.target[0].value = ""; 

    };

    return (
        <div>
            <div className="addTask">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={task.name || ""} 
                        autoComplete="off" 
                        placeholder="Add Task" 
                        onChange={(e) => settask({ ...task, name: e.target.value })} 
                    />
                    <button type="submit">{task.id ? "Update" : "Add"}</button>
                </form>
            </div>
        </div>
    );
};
