import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";
// import styled, { css } from "styled-components";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   input {
//     display: block;
//     width: 100%;
//     border: 1px solid #ccc;
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
//   ${({ isValid }) =>
//     !isValid &&
//     css`
//       border-color: red;
//       background: salmon;
//     `}
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid ? styles.invalid : ''}`}>
      {/* <FormControl isValid={isValid}> */}
        {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}> */}
        <label>Course Goal</label>
        {/* <label style={{color: !isValid ? 'red' : 'black' }}>Course Goal</label> */}
        <input
          style={{ borderColor: !isValid ? "red" : "black" }}
          type="text"
          onChange={goalInputChangeHandler}
        />
        {/* </div> */}
        <Button type="submit">Add Goal</Button>
      {/* </FormControl> */}
      </div>
    </form>
  );
};

export default CourseInput;
