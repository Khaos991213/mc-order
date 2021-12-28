import React from "react";
import { Link } from "react-router-dom";
//看是否empty
function CartEmpty() {
  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="row">
        <div className="col-md-12 mb-5">
          <div className="mb-5">
            <div className="card-body cart ">
              <div className="col-sm-12 empty-cart-cls text-center mb-5">
                {" "}
                <img
                  src="https://i.imgur.com/dCdflKN.png"
                  width="130"
                  height="130"
                  className="img-fluid mb-4 mr-3"
                  alt="cart Is Empty"
                />
                <h3>
                  <strong>你的購物車沒有東西</strong>
                </h3>
                <Link to="/menu">
                  <button className="goToMenuBtn">前往菜單 {""}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartEmpty;
