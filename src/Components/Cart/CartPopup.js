import React from "react";
import { Link } from "react-router-dom";
import CartQuickSummary from "./CartQuickSummary";
//button below
function CartPopup(props) {
  return (
    <div className=''>
      <div className='card'>
        <div className='card-body'>
          <CartQuickSummary />
        </div>
        <div class='container mb-4 text-center'>
          <div class='row'>
            <div class='col'>
              {" "}
              <Link to='/cart' className='btn btn-primary '>
                結帳
              </Link>
            </div>
            <div class='col'>
              {" "}
              <button
                className='btn btn-outline-primary'
                onClick={props.togglePopup}
              >
                關閉
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPopup;
