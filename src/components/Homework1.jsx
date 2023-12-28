import React, { useState } from "react";
import { useEffect } from "react";
export default function Homework1() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [user1, setUser1] = useState("Halimov Abdusobir");
  const [user2, setUser2] = useState("Saidov Sirojiddin");
  const [user3, setUser3] = useState("Sirojov Po'lat");
  const [activated, setActivated] = useState("");
  useEffect(()=> {
    if(check1 === true && check2 === true && check3 === true) {
      let arr1 = user1.split('') 
      let arr2 = user2.split('') 
      let arr3 = user3.split('') 
      let result = [...arr1, " ", ...arr2," ", ...arr3]
      console.log(result);
      setActivated(result.join(""))
    }
    else if(check1 === true && check2 === true) {
      let arr1 = user1.split('') 
      let arr2 = user2.split('') 
      let result = [...arr1, " ", ...arr2]
      setActivated(result.join(""))
    }
    else if(check1 === true && check3 === true) {
      let arr1 = user1.split('') 
      let arr2 = user3.split('') 
      let result = [...arr1, " ", ...arr2]
      setActivated(result.join(""))
    }
    else if(check2 === true && check3 === true) {
      let arr1 = user2.split('') 
      let arr2 = user3.split('') 
      let result = [...arr1, " ", ...arr2]
      setActivated(result.join(""))
    }
    else if(check1 === true) {
      setActivated(user1)
    }
    else if(check2 === true) {
      setActivated(user2)
    }
    else if(check3 === true) {
      setActivated(user3)
    }
    else {
      setActivated("")
    }
  })
  return (
    <div className="container">
      <div className="row border border-3 border-black p-2">
        <div className="col-6 border-3 border-black border p-3">
          <div className="row border border-3 border-black">
            <h1 className="text-center">Users</h1>
          </div>
          <div className="row">
            <div className="row ">
              <div className="col-10">
                <h3 className="border border-2 my-2">1. {user1}</h3>
              </div>
              <div className="col-2">
                <input
                  type="checkbox"
                  className=" w-100 h-75 my-2"
                  checked={check1}
                  onClick={()=>setCheck1((prev)=> !prev)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <h3 className="border border-2 my-2">2. {user2}</h3>
              </div>
              <div className="col-2">
                <input
                  type="checkbox"
                  className=" w-100 h-75 my-2"
                  checked={check2}
                  onClick={()=>setCheck2((prev)=> !prev)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <h3 className="border border-2 my-2">3. {user3}</h3>
              </div>
              <div className="col-2">
                <input
                  type="checkbox"
                  className=" w-100 h-75 my-2"
                  checked={check3}
                  onClick={()=>setCheck3((prev)=> !prev)}
                />
              </div>
              <div className="row">
                <h3>4. .................................</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 border-3 border-black border p-3">
          <div className="row border border-3 border-black">
            <h1 className="text-center">Actives</h1>
          </div>
          <div className="row" >
            <div className="col-6">
              <h2>{activated}</h2>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
