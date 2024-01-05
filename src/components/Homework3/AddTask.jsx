import React, { useState } from 'react'

export default function AddTask({tasks, setTasks}) {
    const [newTask, setNewTask] = useState('')
    const handleTask =(e)=> {
        setNewTask(e.target.value)
    }
    const addNewTask =()=> {
        let payload = {
            id: tasks.length + 1,
            name: newTask
        }
        setTasks([...tasks, {...payload}])
    }
  return (
    <div className=' d-flex px-5'>
      <input type="text" className='form-control w-25 mx-3' placeholder='Add...' onChange={handleTask}/>
      <button className="btn btn-primary" onClick={addNewTask}>Add</button>
    </div>
  )
}
