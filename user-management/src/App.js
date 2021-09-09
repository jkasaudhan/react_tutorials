import React from "react";
import Adduser from "./Users/AddUser";
import UsersList from "./Users/UsersList";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };
  return (
    <div>
      <Adduser onUserAdded={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
