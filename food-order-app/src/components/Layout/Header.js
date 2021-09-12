import classes from "./Header.module.css";
import headerImage from "../../assets/images/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food Order App</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={headerImage} alt="food header image"/>
      </div>
    </>
  );
};

export default Header;
