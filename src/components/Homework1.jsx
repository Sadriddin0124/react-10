import React, { useState } from "react";
import { useEffect } from "react";
export default function Homework1() {
  const [users, setUsers] = useState([
    { id: 1, name: "Halimov Abdusobir", check: false },
    { id: 2, name: "Saidov Sirojiddin", check: false },
    { id: 3, name: "Sirojov Po'lat", check: false },
  ]);
  const [actives, setActives] = useState([
    {id: 4, name: "Salomov Abduqodir", check: false}
  ]);
  const handleCheck = (id) => {
    users.forEach((item,index)=> {
      if(item.id === id) {
        item.check = !item.check
      }
    })
  }
  const handleCheck2 = (id) => {
    actives.forEach((item,index)=> {
      if(item.id === id) {
        item.check = !item.check
      }
    })
  }
  const moveToActive = (value) => {
    if(value === "users") {
      users.forEach((item,index)=> {
        if(item.check === true) {
          actives.push({...item, check: false})
          users.splice(index, 1)
          setActives([...actives])
          setUsers([...users])
        }
      })
    }
    else{
      actives.forEach((item,index)=> {
        if(item.check === true) {
          users.push({...item, check: false})
          actives.splice(index, 1)
          setActives([...actives])
          setUsers([...users])
        }
      })
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              <h1>Users</h1>
            </div>
            <div className="card-body">
              {users.map((item, index) => {
                return (
                  <div className=" d-flex" key={index}>
                    <h4>
                      {item.id}. {item.name}
                    </h4>
                    <input type="checkbox" className="mx-4" onChange={()=>handleCheck(item.id)}/>
                  </div>
                );
              })}
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" onClick={()=>moveToActive("users")}>O'tkazish</button>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              <h1>Actives</h1>
            </div>
            <div className="card-body">
              {actives.map((item, index) => {
                return (
                  <div className=" d-flex" key={index}>
                    <h4>
                      {item.id}. {item.name}
                    </h4>
                    <input type="checkbox" className="mx-4" onChange={()=>handleCheck2(item.id)}/>
                  </div>
                );
              })}
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" onClick={()=>moveToActive("active")}>O'tkazish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
