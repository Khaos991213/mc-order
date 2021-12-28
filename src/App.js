import React from "react";
import "./App.css";
import "./custom.scss";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Cart from "./Components/pages/Cart";
import { AuthProvider } from "./Contexts/AuthContext";
import { CartProvider } from "./Contexts/CartContext";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import { UserProvider } from "./Contexts/UserContext";
import Menu from "./Components/pages/Menu";
import Custome from "./Components/Custome";
const App = () => {
  

  return (
    <>
      <Router>
        <ScrollToTop />
        <UserProvider>
          <CartProvider>
            <Switch>
              <AuthProvider>
                <Navbar />
                <Route path="/" exact component={Home} />
                <Route path="/menu" exact component={Menu} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/custom" exact component={Custome} />
              </AuthProvider>
            </Switch>
          </CartProvider>
        </UserProvider>
        <Footer />
      </Router>
    </>
  );
};

export default App;
