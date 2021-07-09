import React from "react";
import { UserConsumer } from "../context";

const Welcome = () => {
  return (
    <UserConsumer>
      {(value) => {
        console.log(value);
        const { username, switchUser, changeUser } = value;

        const rand = changeUser();

        if (rand < 3) {
          return <div> Random Generated</div>;
        }
        return (
          <div className="welcome">
            <h2>Welcome {username}</h2>
            <button onMouseOver={switchUser}>HOVER {rand}</button>
          </div>
        );
      }}
    </UserConsumer>
  );
};

export default Welcome;
