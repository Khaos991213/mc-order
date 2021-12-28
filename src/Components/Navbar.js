/* eslint-disable eqeqeq */
import React, { useState, useEffect, useContext } from "react";
import { Button } from "./Buttons/Button";
import { ButtonCart } from "./Buttons/ButtonCart";
import { ButtonProfile } from "./Buttons/ButtonProfile";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { CartContext } from "../Contexts/CartContext";
import ReactGA from "react-ga";
import mcicon from "../images/TopIcon.png"
import { UserContext } from "../Contexts/UserContext";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // eslint-disable-next-line
  const [cart] = useContext(CartContext);
  //const [currentUser] = useContext(UserContext);
  let totalPrice = 0;
  let qty = 0;
  if (cart) {
    totalPrice = cart.reduce(
      (acc, curr) => acc + parseInt(curr.price * curr.qty),
      0
    );
    qty = cart.reduce((acc, curr) => acc + curr.qty, 0);
  }

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const deliveryCost = 0;
  const currency = " NTD";

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  function handleCartClick() {
    ReactGA.event({
      category: "Button",
      action: "Cart navbar icon clicked",
    });
  }
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo mr-5" onClick={closeMobileMenu}>
            Mcdonald
            <img src={mcicon} className="Mcicon"></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/menu" className="nav-links" onClick={closeMobileMenu}>
                菜單
              </Link>
            </li>
            
            <li>
              <Link
                to="/cart"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                <i className="fas fa-shopping-cart"></i>
                <br />
                {cart != 0 && totalPrice + deliveryCost + currency}
              </Link>
            </li>
          </ul>
          {button && (
            <ButtonCart onClick={handleCartClick} buttonStyle="btn--outline">
              {" "}
              {cart != 0 && qty + " x"}
              <i className="fas fa-shopping-cart"></i>{" "}
              {cart != 0 && totalPrice + deliveryCost + currency}
            </ButtonCart>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
