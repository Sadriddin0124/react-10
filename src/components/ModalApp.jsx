import React from "react";
import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
export default function ModalApp({ visible, toggle, users, setUsers }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const handleFirstname = (e) => {
    let result = e.target.value;
    setFirstname(result);
    console.log(result);
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const addUser = (e) => {
    e.preventDefault()
    let newUser = {
      id: users.length + 1,
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      status: false,
      count: 0,
    };
    setUsers([...users, { ...newUser }]);
  };
  return (
    <div>
      <Modal isOpen={visible} toggle={toggle}>
        <ModalHeader>
          <h1>Add New User</h1>
        </ModalHeader>
        <ModalBody>
          <div className=" mt-5">
            <form onSubmit={addUser} id="form">
              <input
                type="text"
                className="form-control my-3"
                placeholder="Firstname"
                onChange={handleFirstname}
              />
              <input
                type="text"
                className="form-control my-3"
                placeholder="Lastname"
                onChange={handleLastname}
              />
              <input
                type="text"
                className="form-control my-3"
                placeholder="Phone number"
                onChange={handlePhone}
              />
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <button type="submit" form="form" className="btn btn-success">
            Add new user
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
