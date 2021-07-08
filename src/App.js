import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="py-4">
      <div className="container">
        <h4>The Posts</h4>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <Card
              content={{
                imageUrl: "https://placekitten.com/g/300/200",
                title: "First Post",
                published: "8 July 2021",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
