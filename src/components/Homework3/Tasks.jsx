import React from "react";

export default function Tasks({ tasks }) {
  
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          {tasks.map((item, index) => {
            return (
              <div className="d-flex " key={index}>
                <input type="checkbox" className="mx-2"/>
                <h4>
                  {item.name} {item.id}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
