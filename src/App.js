import React, { Component } from "react";
import axios from "axios";

class App extends Component {
    constructor() {
        super();

        this.state = {
            user: [],
        };
    }

    getUser = async () => {
        let response = await axios.get(
            "https://jsonplaceholder.typicode.com/users/1"
        );
        this.setState({
            user: response.data,
        });
    };

    componentDidMount() {
        this.getUser();
    }

    render() {
        const user = this.state.user;
        return (
            <div>
                <div>
                    My Name is {user.name} and my email is {user.email}
                </div>
            </div>
        );
    }
}

export default App;
