import classes from "./MealItem.module.css";
import MenuItemForm from "./MenuItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  console.log("meal item: ", props);
  return (
    <li className={classes.meal} key={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MenuItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
