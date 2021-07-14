import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Show(props) {
  const [user, setUser] = useState([]);
  let { identifier } = useParams();

  const getUser = async () => {
    let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`);
    setUser(response.data);
  };

  useEffect(() => {
    getUser();
  }, [identifier]);

  console.log(identifier);
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">{user.name}</div>
        <div className="card-body">
          <h4 className="my-3">User details</h4>
          <ul className="list-group">
            <li className="list-group-item">Name : {user.name}</li>
            <li className="list-group-item">Website : {user.website}</li>
            <li className="list-group-item">Phone : {user.phone}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Show;
