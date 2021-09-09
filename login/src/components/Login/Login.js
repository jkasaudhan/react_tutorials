import React, { useState, useReducer, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  // action is an object which is passed in dispatch() function
  // state is the data which was set before i.e whatever is returned from reducer function
  if (action.type === "USER_INPUT") {
    return {
      value: action.payload.value,
      isValid: action.payload.value.includes("@"),
    };
  }
  if (action.type === "BLUR_INPUT") {
    // onBlur event means we have clicked outside the input element and email has been set to the state variable,
    // therefore we can use state rather than action.payload, state in this case is the value returned from the
    // reducer function i.e {value: '...', isValid: ...} object
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.payload.value,
      isValid: action.payload.value.trim().length > 6,
    };
  }
  if (action.type === "BLUR_INPUT") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return { value: "", isValid: false };
};
const Login = (props) => {
  // whenever dispatch is called, its reducer is called automatically and the returned value of reducer fn is somehow
  // internally assigend to emailState
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  // use reducer instead of individual variables for email and pwd
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const emailInputRef = useRef();

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({
      type: "USER_INPUT",
      payload: { value: event.target.value },
    });
    setFormIsValid(
      // event.target.value.includes("@") && enteredPassword.trim().length > 6
      emailState.isValid && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({
      type: "USER_INPUT",
      payload: { value: event.target.value },
    });
    setFormIsValid(
      // event.target.value.trim().length > 6 && enteredEmail.includes("@")
      emailState.isValid && passwordState.isValid
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes("@"));
    dispatchEmail({ type: "BLUR_INPUT" });
    // This is an example that shows we can access functions exposed by a child component in a parent function
    // by using useImperativeHandle, React.forwardRef
    console.log(
      emailInputRef.current.activate(),
      emailInputRef.current.activate
    );
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: "BLUR_INPUT" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword);
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="Email"
          type="text"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailState.isValid}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validateEmailHandler}
          isValid={passwordState.isValid}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
