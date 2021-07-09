import React, { Component } from "react";
import { UserContext } from '../context'

class Home extends Component {
  static contextType = UserContext;


  render() {
  const {username, switchUser } = this.context

  

    return (
      <div className="home">
        <h2>Hello {username}</h2>
        <button onClick ={switchUser}> Click</button>
      </div>
    );
  }
}
// or
// Home.contextType = UserContext
export default Home;
