import React from "react";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <div className="row">
      <div className="col-4 offset-4">
        <Link to="/homework1" className="btn btn-primary m-4">
          Homework 1
        </Link>
        <Link to="/homework2" className="btn btn-primary m-4">
          Homework 2
        </Link>
        <Link to="/homework3" className="btn btn-primary m-4">
          Homework 3
        </Link>
      </div>
    </div>
  );
}
