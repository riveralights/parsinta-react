import React, { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);

    setFirstName("");
    setLastName("");
  };

  return (
    <div className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Learn React Functional Component</div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">
                      First Name
                    </label>
                    <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} name="firstname" id="firstname" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">
                      Last Name
                    </label>
                    <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} name="lastname" id="lastname" className="form-control" />
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">
                      Show
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer">My name is {fullName ? fullName : ". . ."}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
