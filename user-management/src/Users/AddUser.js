import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";

const Adduser = (props) => {
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  // We don't have to use each input on change listener approach if we use useRef
  // Just create ref variables and connect it with DOM input element and later on access with refName.current.value
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    const username = usernameInputRef.current.value;
    const age = ageInputRef.current.value;
    console.log(username, age);

    if (username.trim().length === 0 || age.trim().length === 0 || +age < 1) {
      setError({
        title: "Invalid input",
        message: "Name and age cannot be empty! or age cannot be negative",
      });
      return;
    }

    console.log(username, age);
    props.onUserAdded(username, age);
    // No need to reset value, using setMethoName if we use ref
    // setEnteredUsername("");
    // setEnteredAge("");
    // usernameInputRef.current.value = "";
    // ageInputRef.current.value = "";
  };

  // Not required of useRef
  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // Not required of useRef
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorModalCloseHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorModalCloseHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            // onChange={usernameChangeHandler}
            id="username"
            type="text"
            // value={enteredUsername}
            ref={usernameInputRef}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            // onChange={ageChangeHandler}
            id="age"
            type="number"
            // value={enteredAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default Adduser;
