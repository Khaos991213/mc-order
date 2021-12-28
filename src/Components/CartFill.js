import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { MinusCircle, PlusCircle, UserPlus } from "react-feather";
import imgPaymentOptions from "../../src/images/cards.jpg";
import GoogleLoginHandler from "./GoogleLoginHandler";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";

function CartFill(props) {
  const [cart] = useContext(CartContext);
  const currency = "NTD";
  const fullPrice =  currency;
  const [currentUser] = useContext(UserContext);

  let qty = 0;
  if (cart) {
    qty = cart.reduce((acc, curr) => acc + curr.qty, 0);
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">結帳</span>
            <span className="badge badge-primary badge-pill ">{qty}</span>
          </h4>
          <ul className="list-group mb-3">
            {cart.map((doc) => (
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">
                    {doc.name}{" "}
                    <PlusCircle
                      onClick={() => props.increaseBasket(doc.id)}
                      className="cursor-pointer"
                      size={22}
                      color={"var(--clr-green-dark)"}
                    />
                    <span className="p-2 text-black">{doc.qty}</span>
                    <MinusCircle
                      onClick={() => props.decreaseBasket(doc.id, doc.qty)}
                      className="cursor-pointer"
                      size={22}
                      color={"var(--clr-red-dark)"}
                    />
                  </h6>

                  <small className="text-muted"></small>
                </div>
                <span className="text-muted">
                  {doc.price}
                  {fullPrice}
                </span>
              </li>
            ))}
            
            <li className="list-group-item d-flex justify-content-between">
              <span>總金額(NTD)</span>
              <strong>
                {props.totalPrice-29}
                {fullPrice}
              </strong>
            </li>
          </ul>
        </div>
        
       
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">個人資訊</h4>
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">姓氏</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="輸入姓氏"
                    value={localStorage.getItem("loginFirstName")}
                    style={{ backgroundColor: "var(--clr-grey-10)" }}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">名字</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="輸入名字"
                    value={localStorage.getItem("loginLastName")}
                    style={{ backgroundColor: "var(--clr-grey-10)" }}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="輸入有效信箱"
                  value={localStorage.getItem("loginEmail")}
                  style={{ backgroundColor: "var(--clr-grey-10)" }}
                />
                <div className="invalid-feedback">
                  Please enter a valid email address htmlFor shipping updates.
                </div>
              </div>
              <h4 className="mb-3">帳單地址</h4>
              <div className="mb-3">
                <label htmlFor="address">地址</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="輸入地址"
                  required
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="zip">郵遞區號</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder="輸入郵遞區號"
                />
              </div>

              <hr className="mb-4" />

              
              

              <h4 className="mb-3">支付方式</h4>

              <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <input
                    id="mobilepay"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                  />
                  <label className="custom-control-label" htmlFor="mobilepay">
                    行動支付
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                  />
                  <label className="custom-control-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>
              <div className="row">
                
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-number">信用卡卡號</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    required
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">有效期限</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder="MM/YY"
                    required
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-cvv">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder="XXX"
                    required
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Bestil og betal med kort ({props.totalPrice}
                {fullPrice})
              </button>
            </form>
          </div>
   
      </div>
      <footer className="my-5 pt-5 text-muted text-center text-small">
        <img
          className=" mb-4 w-25 img-fluid hd"
          src={imgPaymentOptions}
          alt="payment options"
        ></img>

        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="/">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="/">Support</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default CartFill;
