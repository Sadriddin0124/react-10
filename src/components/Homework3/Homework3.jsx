import React, { useState } from "react";
import TodoApp from "./TodoApp";
import AddTask from "./AddTask";
import Tasks from "./Tasks";

export default function Homework3() {
  const [tasks, setTasks] = useState([{ id: 1, name: "Task" }]);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <div className="card-header">
              <TodoApp tasks={tasks} />
            </div>
            <div className="card-body">
              <AddTask tasks={tasks} setTasks={setTasks} />
            </div>
            <div className="card-footer">
              <Tasks tasks={tasks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
