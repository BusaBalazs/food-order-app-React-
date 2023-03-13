import { Fragment } from "react";
import imageMeal from "../../assets/meals.jpg"
import classes from "./Header.module.css"

import HeaderCartButton from "./HeaderCartButtom";

const Header = (props) => {
  
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={imageMeal} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
