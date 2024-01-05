import React from "react";

export default function TodoApp({ tasks }) {
  return (
    <div className="row">
      <div className="col-4 offset-3">
        <h1 className="text-center">Todo App</h1>
      </div>
      <div className="col-4">
        <h1 className="btn btn-success">{tasks.length}</h1>
      </div>
    </div>
  );
}
