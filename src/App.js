import './App.css';
import {Header} from './components/Header'
import {ShowTask} from './components/ShowTask'
import {AddTask} from './components/AddTask'
import { useEffect, useState } from 'react';

function App() {
const [tasklist ,settasklist] = useState(JSON.parse(localStorage.getItem("tasklist"))||[])
const [task,settask] = useState({})
useEffect(() => {
  localStorage.setItem("tasklist",JSON.stringify(tasklist));
},[tasklist])
  return (
    <div className="App">
        <Header  />
        <AddTask tasklist={tasklist} settasklist={settasklist} task={task} settask={settask}/>
        <ShowTask tasklist={tasklist} settasklist={settasklist} task={task} settask={settask}/>

     </div>
  );
}

export default App;
