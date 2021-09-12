import Input from "../../UI/Input";
import classes from "./MenuItemForm.module.css";

const MenuItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input label="Amount" input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 10,
          step: 1,
          defaultValue: 0
      }} />
      <button>+ Add</button>
    </form>
  );
};

export default MenuItemForm;
