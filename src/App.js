import axios from "axios";
import React, { useEffect, useState } from "react";

const App = (props) => {
  const [user, setUser] = useState([]);
  const [identifier, setIdentifier] = useState(1);
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    try {
      let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`);
      setUser(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(true);
      console.log(e.messsage);
    }
  };

  useEffect(() => {
    getUser();
  }, [identifier]);

  return (
    <div className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="display-6">List of User</h1>
            <hr />
            <input type="text" className="form-control mb-3" name="identifier" id="identifier" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
            {loading ? (
              <div> Loading Dulu .... </div>
            ) : (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                    <td>{user.phone}</td>
                  </tr>
                </tbody>
              </table>
            )}
            {/* Untuk Looping Data yang banyak */}
            {/* {users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.website}</td>
                      <td>{user.phone}</td>
                    </tr>
                  );
                })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
