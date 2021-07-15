import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Index(props) {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      let response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {users.map((user, index) => {
          return (
            <div className="col-md-4" key={index}>
              <div className="card mb-3">
                <div className="card-header">{user.name}</div>
                <div className="card-body">
                  <div className="mb-4">
                    <a href={`//${user.website}`} target="_blank" rel="noreferrer">
                      {user.website}
                    </a>
                  </div>
                  <NavLink to={`/users/${user.id}`} className="btn btn-primary">
                    See Profile
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
