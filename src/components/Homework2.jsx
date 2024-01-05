import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
import ModalApp from "./ModalApp";
export default function Homework2() {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstname: "Mark",
      lastname: "Otto",
      phone: "+998882133234",
      status: false,
      count: 0,
    },
    {
      id: 2,
      firstname: "Jacob",
      lastname: "Throton",
      phone: "+998992133234",
      status: false,
      count: 0,
    },
    {
      id: 3,
      firstname: "Larry",
      lastname: "theBird",
      phone: "+998502133234",
      status: false,
      count: 0,
    },
  ]);
  const [visible, setVisible] = useState(false)
  const increase =(index)=> {
    users[index].count += 1
    setUsers([...users])
  }
  const decrease =(index)=> {
    users[index].count -= 1
    setUsers([...users])
  }
  const check =(index)=> {
    if(users[index].status === false) {
      users[index].status = true
      setUsers([...users])
    } else {
      users[index].status = false
      setUsers([...users])
    }
  }
  
  const removeUser =(index)=> {
    users.splice(index, 1)
    setUsers([...users])
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2 mt-5">
          <ModalApp visible={visible} toggle={()=>setVisible(false)} users={users} setUsers={setUsers}/>
          <button className="btn btn-success" onClick={()=>setVisible(true)}>Add</button>
          <table className="table table-bordered table-hovered my-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Phone</th>
                <th>Active</th>
                <th>Count</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.phone}</td>
                    <td>
                      <h6>{item.status ? "True" : "False"}</h6>
                      <input type="checkbox"  onClick={()=>check(index)} checked={item.status}/>
                    </td>
                    <td>
                      <button className="btn btn-warning" onClick={()=>decrease(index)}>-</button>
                      <span>{item.count}</span>
                      <button className="btn btn-info" onClick={()=>increase(index)}>+</button>
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={()=>removeUser(index)}>
                        <FontAwesomeIcon icon={faUserMinus} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
       
      </div>
    </div>
  );
}
