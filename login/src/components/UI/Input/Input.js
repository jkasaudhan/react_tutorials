import classes from "./Input.module.css";
import React, { useImperativeHandle, useRef } from "react";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const activate = () => {
    inputRef.current.focus();
  };
  // useImperativeHandle(ref, () => { return { activate: activefn } }) it exposes object returned  from the function so that component can expose some methods and data outside component if required…. But we need to wrap the component inside React.forwardRef(Input((props, ref) => {…})) function. On parent component we can use useRef and set ref=inputRef variable and access the exposed function as inputRef.current.activate()… we should try to avoid using this as far as possible
  useImperativeHandle(ref, () => {
    return {
      activate: activate,
    };
  });
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
